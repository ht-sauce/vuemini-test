<template>
  <div class="app">
    <el-button @click="routerJump('/isCustomElement')">isCustomElement的bug</el-button>
    <el-button @click="routerJump('/switchTabs')">切换tabs产生的bug</el-button>
  </div>
  <router-view />
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const router = useRouter()

    function routerJump(url) {
      router.push(url)
    }

    return {
      routerJump
    }
  },
}
</script>

<style>
</style>
