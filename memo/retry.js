const axiosRetry = require('axios-retry');
const Axios = require('axios');

const CancelToken = Axios.CancelToken;
const client = Axios.create({
  baseURL: 'http://localhost:3000/',
})

client.interceptors.request.use((ret) => {
  return ret
})

axiosRetry(client, { retries: 3 });
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
