<template>
  <div class="app">
    <el-button @click="routerJump('/isCustomElement')">isCustomElement的bug</el-button>
    <el-button @click="routerJump('/switchTabs')">切换tabs产生的bug</el-button>
    <el-button @click="routerJump('/test')">切换表格列引起的bug</el-button>
    <el-button @click="routerJump('/TableBug')">表格和弹窗show-overflow-tooltip定位错误</el-button>
    <el-button @click="routerJump('/tablebugTwo')">表格错误2</el-button>
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
