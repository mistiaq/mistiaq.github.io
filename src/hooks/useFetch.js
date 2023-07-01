import {
  useState,
  useEffect
} from 'react'

import Request from '../Request'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)

      try {
        const res = await Request.get(url)

        setData(res.data.data)

        setTimeout(() => {
          setLoading(false)
        }, 10)
      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetch()
  }, [url])

  return {
    data,
    error,
    loading
  }
}

export default useFetch
