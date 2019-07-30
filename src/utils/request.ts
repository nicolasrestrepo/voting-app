import axios from 'axios'
import { env } from '../config/client'

const { apiUrl } = env
const apiSuffix = '/api'
const get = async (serviceUrl: string, params?: any, headers?: any) => {
  const url = `${apiUrl}${apiSuffix}${serviceUrl}`

  const response = await axios.get(url, { params })
  return response
}

const post = async (serviceUrl: string, params?: any) => {
  const url = `${apiUrl}${apiSuffix}${serviceUrl}`
  const response = await axios.post(url, { params })
  return response
}

const put = async (serviceUrl: string, params?: any) => {
  const url = `${apiUrl}${apiSuffix}${serviceUrl}`
  const response = await axios.put(url, { params })
  return response
}

const patch = async (serviceUrl: string, params?: any) => {
  const url = `${apiUrl}${apiSuffix}${serviceUrl}`
  const response = await axios.patch(url, { ...params })
  return response
}

export {
  get, post, put, patch,
}

export default get
