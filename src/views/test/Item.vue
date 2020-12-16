<template>
  <div class="item"><slot>{{ data }}</slot></div>
</template>

<script>
import {reactive, toRefs} from 'vue'

export default {
  props: {
    data: [Number, String]
  },
  setup() {
    const data = reactive({})
    return {
      ...toRefs(data),
    }
  },
}
</script>

<style scoped lang="scss"></style>
