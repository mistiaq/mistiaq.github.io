async function fetchQuery(
  path
) {
  const res = await fetch(`${process.env.STRAPI_API_URL}/${path}`, {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `bearer ${process.env.STRAPI_API_TOKEN}`
    },
    next: {
      revalidate: 100
    }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json()

  return data.data
}

export default fetchQuery

// import axios from 'axios'

// const Request = axios.create({
//   baseURL: `${process.env.STRAPI_API_URL}`,
//   headers: {
//     'Content-type': 'application/json',
//     Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`
//   }
// })

// async function fetchQuery(
//   path
// ) {
//   const res = await axios.get(`${process.env.STRAPI_API_URL}/${path}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.data.data

//   return data
// }

// export default fetchQuery
