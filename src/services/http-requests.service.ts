import objectToQueryParams from '../utils/objectToQueryParams'
import { TRANSLATIONS } from '../constants/translations.constants'

export const GLOBAL_HTTP_OPTIONS: RequestInit = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}

function request(url: string, options: RequestInit = {}): Promise<any> {
  return fetch(url, {
    ...GLOBAL_HTTP_OPTIONS,
    ...options,
    ...(options.body ? { body: JSON.stringify(options.body) } : {}),
  })
    .then((response: Response) => {
      if (response.ok) {
        const isJsonResponse = response.headers.get('Content-Type') === 'application/json'
        return isJsonResponse ? response.json() : response
      }

      return Promise.reject(response)
    })
    .catch((error: Response) => {
      console.error(error)
      throw new Error(TRANSLATIONS.API_ERROR_MESSAGE)
    })
}

function get(url: string, { body, ...restOptions }: RequestInit = {}): Promise<any> {
  return request(url + objectToQueryParams(body as {}), { method: 'GET', ...restOptions })
}

function post(url: string, options: RequestInit = {}): Promise<any> {
  return request(url, { method: 'GET', ...options })
}

const methods = { get, post }
export default methods
