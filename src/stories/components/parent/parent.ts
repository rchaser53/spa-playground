import { createClass } from '~src/components/parent/parent/Parent.vue'
import { insertUtilMixins as insertToParentA } from '~src/components/parent/ParentA.vue'
import { insertUtilMixins as insertToParentB } from '~src/components/parent/ParentB.vue'
import { insertMockHttpClient } from '~src/stories/mixins/mockHttpClient.vue'
import MockErrorHandler from '~src/stories/mixins/mockErrorHandler.vue'

const createNomalMixin = () => {
  const mockClient = {
    get() {
      return Promise.resolve({
        data: {
          textA: 'textA',
          textB: 'textB',
          selectA: ''
        }
      })
    }
  }
  return insertMockHttpClient(mockClient)
}

const NormalMixinClass = createNomalMixin()
export const ParentA = createClass(
  insertToParentA([ NormalMixinClass ])
)
export const ParentB = createClass(
  insertToParentB([ NormalMixinClass ])
)

const createErrorMixin = () => {
  const mockClient = {
    get() {
      return Promise.reject({
        status: 500
      })
    }
  }
  return insertMockHttpClient(mockClient)
}

const ErrorMixinClass = createErrorMixin()
export const ErrorParentA = createClass(
  insertToParentA([ MockErrorHandler, ErrorMixinClass ])
)

export default (storiesOf) => {
  return storiesOf
          .add('render parentA', () => ({
            components: { ParentA },
            template: '<parent-a></parent-a>'
          }))
          .add('render ParentB', () => ({
            components: { ParentB },
            template: '<parent-b></parent-b>'
          }))
          .add('connection error in parentA', () => ({
            components: { ErrorParentA },
            template: '<error-parent-a />'
          }))
}