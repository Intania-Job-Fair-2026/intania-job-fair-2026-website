export type Company = {
  companyName_th: string
  companyName_en: string
  promoteName: string
  come28: boolean
  come29: boolean
  bootCount: number
  note: string
  hiring: boolean
  internship3: boolean //รับฝึกงานปี 3
  internship12: boolean //รับฝึกงานปี 1 2
  category: string
  detail: string
}

export type Boot = {
  companyName_th: string
  companyName_en: string
  promoteName: string
  bootCount: number
  bootName: string
  category: string
}

export type CompanyCategory = string[]
