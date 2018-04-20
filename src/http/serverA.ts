import Axios from 'axios'
export const cancelToken = Axios.CancelToken;

export const httpClient = Axios.create({
  baseURL: 'http://localhost:3000'
})

export const httpObject = {
  client: httpClient
}