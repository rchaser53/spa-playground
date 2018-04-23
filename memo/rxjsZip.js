const { Observable } = require('rxjs/Observable')
require('rxjs/add/observable/combineLatest');
require('rxjs/add/observable/fromPromise');
require('rxjs/add/observable/zip');

const axiosRetry = require('axios-retry');
const Axios = require('axios');

const CancelToken = Axios.CancelToken;
const source = CancelToken.source()
const client = Axios.create({
  baseURL: 'http://localhost:3000/',
})

const obsA = Observable.fromPromise(client.get('test', { cancelToken: source.token }))
const obsB = Observable.fromPromise(client.get('test', { cancelToken: source.token }))
const obsC = Observable.fromPromise(client.get('test', { cancelToken: source.token }))

const obsNotFound = Observable.fromPromise(client.get('notfound', { cancelToken: source.token }))
// source.cancel('nya-n')

// Observable.zip(obsA, obsB, obsC)
//           .subscribe(
//             (ret) => {
//               ret.forEach((ret) => {
//                 console.log(ret.data)
//               })
//             },
//             (err) => {
//               console.error(err)
//             }
//           )

Observable.combineLatest(obsA, obsB, obsNotFound)
          .subscribe((a,b,c) => {
            console.log(a.map(({data}) => data))
          }, (err) => {
            console.error(err)
          })