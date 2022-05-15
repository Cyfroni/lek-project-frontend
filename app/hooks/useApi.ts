import { ApiResponse } from "apisauce"
import { useState } from "react"

// fix types
type ApiFunc<T, K> = (...args : T[]) => Promise<ApiResponse<K[], K[]>>

export default function useApi<T, K>(apiFunc: ApiFunc<T, K>) {
  const [data, setData] = useState<K[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async (...args : T[]) => {
    setLoading(true)
    const response = await apiFunc(...args)
    setLoading(false)

    if (!response.ok) return setError(true)

    setError(false)
    setData(response.data!)
  }

  return { data, error, loading, request }
}
