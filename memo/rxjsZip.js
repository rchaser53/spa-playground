const { Observable } = require('rxjs/Observable')
require('rxjs/add/observable/fromPromise');
require('rxjs/add/observable/zip');

const axiosRetry = require('axios-retry');
const Axios = require('axios');

const CancelToken = Axios.CancelToken;
const client = Axios.create({
  baseURL: 'http://localhost:3000/',
})

const obsA = Observable.fromPromise(client.get('test'))
const obsB = Observable.fromPromise(client.get('test'))
const obsC = Observable.fromPromise(client.get('test'))

Observable.zip(obsA, obsB, obsC)
          .subscribe((ret) => {
            ret.forEach((ret) => {
              console.log(ret.data)
            })
          })