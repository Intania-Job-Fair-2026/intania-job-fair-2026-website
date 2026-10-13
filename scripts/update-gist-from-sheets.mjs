import { parse } from 'csv-parse/sync'

const env = (name, required = true) => {
  const v = process.env[name]
  if (required && !v) {
    console.error(`Missing env: ${name}`)
    process.exit(1)
  }
  return v || ''
}

const GIST_TOKEN = env('GIST_TOKEN')
const GIST_ID = env('GIST_ID')
const COMPANIES_CSV_URL = env('COMPANIES_CSV_URL')

async function fetchCsv(url) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch CSV: ${url}`)
  const text = await res.text()
  return parse(text, { columns: true, trim: true, skip_empty_lines: true })
}

function toJsonString(data) {
  return JSON.stringify(data, null, 2)
}

async function updateGist(files) {
  const res = await fetch(`https://api.github.com/gists/${GIST_ID}`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${GIST_TOKEN}`,
      'Content-Type': 'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({ files }),
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Gist update failed: ${res.status} ${body}`)
  }
}

const CompanyKeyMap = {
  'ชื่อบริษัท (ภาษาไทย)': 'companyName_th',
  'ชื่อบริษัท (English)': 'companyName_en',
  ชื่อประชาสัมพันธ์: 'promoteName',
  'มา 28': 'come28',
  'มา 29': 'come29',
  จำนวนบูธ: 'bootCount',
  'หมายเหตุ (request)': 'note',
  สมัครงาน: 'hiring',
  'ฝึก ปี 3': 'internship3',
  'ฝึก ปี 1 2': 'internship12',
  หมวดหมู่: 'category',
  เกี่ยวกับบริษัท: 'detail',
}

async function main() {
  const [companiesCsv] = await Promise.all([fetchCsv(COMPANIES_CSV_URL)])
  const companeyCategorylist = []
  companiesCsv.forEach((company) => {
    const category = company['หมวดหมู่']
    if (!companeyCategorylist.includes(category)) {
      companeyCategorylist.push(category)
    }
    delete company['']
    company['สมัครงาน'] = company['สมัครงาน'] == 'TRUE'
    company['ฝึก ปี 3'] = company['ฝึก ปี 3'] == 'TRUE'
    company['ฝึก ปี 1 2'] = company['ฝึก ปี 1 2'] == 'TRUE'
    company['มา 28'] = company['มา 28'] == 'เข้า 28'
    company['มา 29'] = company['มา 29'] == 'เข้า 29'
    company['จำนวนบูธ'] = Number(company['จำนวนบูธ'])
    Object.keys(CompanyKeyMap).forEach((oldKey) => {
      if (oldKey in company) {
        const newKey = CompanyKeyMap[oldKey]
        company[newKey] = company[oldKey]
        delete company[oldKey]
      }
    })
  })
  const files = {
    'companies.json': { content: toJsonString(companiesCsv) },
    'companiesCategory.json': { content: toJsonString(companeyCategorylist) },
  }

  await updateGist(files)
  console.log(`Updated gist ${GIST_ID} with ${Object.keys(files).join(', ')}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
