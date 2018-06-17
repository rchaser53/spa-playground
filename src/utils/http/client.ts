import axios, { CancelTokenStatic, CancelTokenSource, AxiosInstance } from 'axios'

export class HttpClient {
  private client: AxiosInstance
  cancelToken: CancelTokenStatic
  cancelTokenSource: CancelTokenSource

  constructor(client: AxiosInstance) {
    this.client = client
    this.cancelToken = axios.CancelToken
    this.cancelTokenSource = this.cancelToken.source()
  }

  refreshToken() {
    this.cancelTokenSource = this.cancelToken.source()
  }

  cancelRequest() {
    this.cancelTokenSource.cancel('cancel')
  }

  get(url, param): Promise<any> {
    return this.client.get(url, { ...param, cancelToken: this.cancelTokenSource.token })
  }
}

export const httpClient = new HttpClient(
  axios.create({
    baseURL: 'http://localhost:3000'
  })
)
