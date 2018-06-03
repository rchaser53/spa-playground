import Vue from 'vue'
import * as VueServerRenderer from 'vue-server-renderer'
import SimpleMde from '../simple-mde/simple-mde.vue'

const renderer = VueServerRenderer.createRenderer()

const render = (vm) => {
  return new Promise((resolve, reject) => {
    renderer.renderToString(vm, (err, str) => {
      if (err) {
        return reject(err)
      }
      resolve(str)
    })
  })
}

test('render simple-mde', () => {
  const vm = new Vue({
    el: document.createElement('div'),
    render: (h) => {
      h('div', SimpleMde)
    }
  })

	expect(vm).toMatchSnapshot()

})
