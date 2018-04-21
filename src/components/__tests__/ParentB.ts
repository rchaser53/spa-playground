import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import  { createDecoratorObj } from '../parent/ParentB.vue'

const data = {
  articleEndpoint: '/testPath'
} 

describe('ParentB decoratorObj', () => {
  test('normal', async () => {
    const client = {
      get() {
        return new Promise((resolve) => {
          resolve({data: 'hoge'})
        })
      }
    }

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

  test('error', async () => {
    const errorObj = { error: 'hoge' }
    const client = {
      get() {
        return new Promise((_, reject) => {
          reject(errorObj)
        })
      }
    }

    const fakeThis = {
      cancelSource: {},
      article: '',
      eventhub: {
        $emit: (key, object) => {
          expect(key).toEqual('error');
          expect(object).toEqual(errorObj);
        }
      }
    }
    const expected = {
      cancelSource: {},
      article: 'hoge'
    }

    const decoratorObj = createDecoratorObj(client, data)
    await decoratorObj.mounted.call(fakeThis)
    
  })
})