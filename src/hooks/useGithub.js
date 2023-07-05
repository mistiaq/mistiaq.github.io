import {
  useState,
  useEffect
} from 'react'

const useGithub = (url) => {
  const [githubData, setGithubData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchGithubData = async () => {
      setLoading(true)

      try {
        const response = await fetch(`https://api.github.com/users/mistiaq/${url}`)

        const data = await response.json()

        setGithubData(data)

        setTimeout(() => {
          setLoading(false)
        }, 10)

      } catch (err) {
        setError(err)
        setLoading(false)
      }
    }

    fetchGithubData()
  }, [url])

  return {
    githubData,
    error,
    loading
  }
}

export default useGithub
