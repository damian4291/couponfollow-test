export default function objectToQueryParams(objData: { [key: string]: string }): string {
  return objData ? `?${new URLSearchParams(objData).toString()}` : ''
}
