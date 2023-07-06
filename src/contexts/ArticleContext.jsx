import {
  useState,
  useEffect,
  createContext,
  useContext
} from 'react'

import Request from '../Request'

const ArticleContext = createContext()

export const ArticleContextt = () => {
  return useContext(ArticleContext)
}

const ArticleProvider = ({ children }) => {
  const [articles, setArticles] = useState(null)

  const [articleId, setArticleId] = useState(null)

  const getArticleId = (id) => {
    setArticleId(id)
  }

  useEffect(() => {
    const getArticles = async () => {
      const response = await Request.get("/api/articles1")

      const responseArr = Object.values(response.data.data)

      setArticles(responseArr)
    }

    return getArticles
  }, [])

  const value = {
    articles,
    getArticleId,
    articleId
  }

  return (
    <ArticleContext.Provider
      value={value}
    >
      {children}
    </ArticleContext.Provider>
  )
}

export default ArticleProvider
