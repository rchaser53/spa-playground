const axiosRetry = require('axios-retry');
const Axios = require('axios');

const CancelToken = Axios.CancelToken;
const client = Axios.create({
  baseURL: 'http://localhost:3000/',
})

client.interceptors.request.use((ret) => {
  console.log(Date.now())
  return ret
})

axiosRetry(client, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay
});
client.get('/count'
// ,{
//   'axios-retry': {
//     retries: 2
//   }
// }
)
.then((ret) => {
  console.log(ret.data)
})
.catch(error => { // The first request fails
  console.log('nyan')
});
