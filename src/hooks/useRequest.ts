import { useState } from 'react'

function useRequest<T, K>(promiseFunc: (args?: K) => Promise<T>) {
  const [error, setError] = useState<Error | null>(null)
  const [response, setResponse] = useState<any>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const callRequest = (args: K) => {
    setError(null)
    setResponse(null)
    setIsLoading(true)

    promiseFunc(args)
      .then(setResponse)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }

  return [callRequest, response, isLoading, error]
}

export default useRequest
