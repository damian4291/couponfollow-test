import httpRequests from './http-requests.service'
import {
  API_CATEGORIES_URL,
  API_ENTRIES_URL,
  API_RANDOM_ENTRY_URL,
} from '../constants/api.constants'
import {
  IApiRequestOptions,
  iApiResponeEntries,
  IApiResponseCategories,
} from '../interfaces/api.interfaces'

export function fetchEntries(options?: IApiRequestOptions): Promise<iApiResponeEntries> {
  return httpRequests.get(API_ENTRIES_URL, options as RequestInit)
}

export function fetchRandomEntry(options?: IApiRequestOptions): Promise<iApiResponeEntries> {
  return httpRequests.get(API_RANDOM_ENTRY_URL, options as RequestInit)
}

export function fetchCategories(): Promise<IApiResponseCategories> {
  return httpRequests.get(API_CATEGORIES_URL)
}
