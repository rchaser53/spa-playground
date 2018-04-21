import Axios from 'axios'
export const cancelTokenSource = Axios.CancelToken.source();

export const httpClient = Axios.create({
  baseURL: 'http://localhost:3000'
})

export const httpObject = {
  client: httpClient,
  cancelToken: cancelTokenSource
}