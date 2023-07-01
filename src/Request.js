import axios from 'axios'

const Request = axios.create({
  baseURL: 'http://localhost:1337/api/',
  headers: {
    // 'Content-type': 'application/json',
    Authorization: 'bearer' + 'ef2c9d9436f9eabf1a44b45fbb9f9a60df8758913d8f65844a92291d5fe1b0a6b6e97f11f3fa01e00c808a242264d752653b22b9c50e914ef8531074e81f79e39d6b7e961dcd1bb2c0da1ae7ce0edbd98819bac1bc821a9a3f82083070d8a520d571411df8916a4f9a5d64e74e30c521520dd95922b2263e8e82dde554c64001'
  }
})

export default Request
