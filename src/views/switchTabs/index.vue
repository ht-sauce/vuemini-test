<template>
  <div>
    <el-button type="warning" @click="switchTabs">手动切换</el-button>
    <el-tabs v-model="activeName">
      <el-tab-pane label="文件查看" name="FileHistory">
        <tabs-one v-if="activeName === 'FileHistory'"></tabs-one>
      </el-tab-pane>
      <el-tab-pane label="文件上传" name="FileUpload">
        <tabs-two v-if="activeName === 'FileUpload'"></tabs-two>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import tabsOne from './tabsOne'
import tabsTwo from './tabsTwo'
export default {
  components: {
    tabsOne,tabsTwo
  },
  setup() {
    const data = reactive({
      activeName: 'FileUpload'
    })

    function switchTabs() {
      if (data.activeName === 'FileHistory') data.activeName = 'FileUpload'
      else data.activeName = 'FileHistory'
    }

    return {
      ...toRefs(data),
      switchTabs,
    }
  },
}
</script>

<style scoped lang="scss"></style>
