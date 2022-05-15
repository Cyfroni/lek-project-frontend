import { ApiResponse } from "apisauce"
import { useState } from "react"

type ResponseData<T> = T extends Promise<ApiResponse<infer T>> ? T : never

export default function useApi<T extends (...args: any[]) => any>(apiFunc: T) {
  const [data, setData] = useState([] as ResponseData<ReturnType<T>>)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const request = async (...args: Parameters<T>) => {
    setLoading(true)
    const response = await apiFunc(...args)
    setLoading(false)

    if (!response.ok) return setError(true)

    setError(false)
    setData(response.data!)
  }

  return { data, error, loading, request }
}
