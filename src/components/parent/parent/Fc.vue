<script lang="ts">
import Vue from 'vue'

export default Vue.component('fc', {
  render: function(createElement) {
    return this.$props.hoge % 2 === 0 ? createElement('div', 'even') : createElement('div', 'odd')
  },
  props: {
    hoge: {
      type: Number,
      required: true
    }
  }
})
</script>
