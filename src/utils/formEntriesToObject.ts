export default function formEntriesToObject(form: HTMLFormElement): { [key: string]: string } {
  const formEntries = new FormData(form).entries()
  return Object.assign({}, ...Array.from(formEntries, ([key, value]) => ({ [key]: value })))
}
