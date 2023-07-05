import axios from 'axios'

const Request = axios.create({
  // baseURL: 'http://127.0.0.1:1337/api/',
  baseURL: 'https://strapi-development-tb5n.onrender.com/api/',
  headers: {
    'Content-type': 'application/json',
    Authorization: 'bearer' + 'f7f1a11b6402be7b25344ce29261319f921c64bf7f8b232c6173d9468e59a751f9edf0b9df9e3897ee0f92511f5d44982da0042a52dbec3fed396b03a754413cd4e661fd5db3be98ddf2a1b134ebad64e310c7b35bffe6e805bcef6d9e5b0cb5b3db6868041827e377d25e9835c7ef1b31cb06ce119bb2aad5e8f7620fd5fa87'
  }
})

export default Request
