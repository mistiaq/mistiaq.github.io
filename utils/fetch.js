import axios from 'axios'

const Request = axios.create({
  baseURL: `${process.env.STRAPI_API_URL}`,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `bearer ${process.env.STRAPI_API_TOKEN}`
  },
  next: {
    revalidate: 100
  }
})

async function fetchQuery(
  path
) {
  const res = await Request(`${process.env.STRAPI_API_URL}/${path}`)

  if (res.statusText !== 'OK') {
    throw new Error('Failed to fetch data')
  }

  const data = await res.data.data

  return data
}

export default fetchQuery
