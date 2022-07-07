export interface IApiRequestBody extends Omit<BodyInit, 'body'> {
  title?: string
  description?: string
  auth?: string
  https?: string
  cors?: string
  category?: string
}

export interface IApiRequestOptions extends Omit<RequestInit, 'body'> {
  body: IApiRequestBody
}

export interface IApiResponseEntry {
  API: string
  Auth: string
  Category: string
  Cors: string
  Description: string
  HTTPS: string
  Link: string
}

export interface iApiResponeEntries {
  count: number
  entries: IApiResponseEntry[]
}

export interface IApiResponseCategories {
  count: number
  categories: string[]
}
