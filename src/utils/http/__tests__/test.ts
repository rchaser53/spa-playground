import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const createHoge = (client) => {
  return (url) => {
    return client.get('/hoge')
                .catch((err) => {
                  throw new Error('err')
                })
  }
}
const _axios = axios.create();
const hoge = createHoge(_axios)

let mock = new MockAdapter(axios);
describe('formatIdentifyValues', () => {
  beforeEach(() => {
    mock.reset();
  })

  test('error', async () => {
    mock.onGet('/hoge').reply(500, {});
    try {
      await hoge('aa')
    } catch (err) {
      expect(err).toEqual(new Error('err'));
    }
  })

  test('normal', async () => {
    mock.onGet('/hoge').reply(200, {});
    try {
      const { data } = await hoge('aa')
      expect(data).toEqual({});
    } catch (err) {}
  })
})