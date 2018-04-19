const { Observable } = require('rxjs/Observable')
require('rxjs/add/observable/fromPromise');
require('rxjs/add/operator/mergeMap');

const axiosRetry = require('axios-retry');
const Axios = require('axios');

const CancelToken = Axios.CancelToken;
const source = CancelToken.source()
const client = Axios.create({
  baseURL: 'http://localhost:3000/',
})

Observable.fromPromise(client.get('test', { cancelToken: source.token }))
      .mergeMap((ret) => {
        console.log(1, ret.data)
        return Observable.fromPromise(client.get('test', { cancelToken: source.token }))
      }).subscribe((ret) => {
        console.log(2, ret.data)
      }, (error) => {
        console.error(error)
      });
