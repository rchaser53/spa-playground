import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import  { createDecoratorObj } from '../parent/ParentB.vue'

const data = {
  articleEndpoint: '/testPath'
} 
const client = {
  get() {
    return new Promise((resolve) => {
      resolve({data: 'hoge'})
    })
  }
}

describe('ParentB decoratorObj', () => {
  test('normal', async () => {
    const fakeThis = {
      cancelSource: {},
      article: ''
    }
    const expected = {
      cancelSource: {},
      article: 'hoge'
    }

    const decoratorObj = createDecoratorObj(client, data)
    await decoratorObj.mounted.call(fakeThis)
    expect(fakeThis).toEqual(expected)
  })
})