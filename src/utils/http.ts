import Axios from 'axios'

export const httpClient = Axios.create({
  baseURL: 'http://localhost:3000'
})
export const cancelToken = Axios.CancelToken;