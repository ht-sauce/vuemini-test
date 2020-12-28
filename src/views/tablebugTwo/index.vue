<template>
  <el-table
    cell-class-name="custom-cell"
    size="small"
    class="custom-table"
    :data="tableData"
    border
  >
    <template v-for="(item, index) in columnSet" :key="index">
      <el-table-column :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
    </template>
    <el-table-column header-align="center" fixed="right" label="操作" width="220">
      <template #default="scope">
        <el-button type="warning">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div>请点击分页切换数据复现错误</div>
  <el-pagination
    @current-change="onPage"
    layout="prev, pager, next"
    :total="20">
  </el-pagination>
</template>

<script>
  import listdata from './data'
  import {reactive, toRefs} from 'vue'
  export default {
    setup() {
      const data = reactive({
        columnSet: [
          { label: 'cbt话术名称', isEdit: false, width: '200', prop: 'cfgName' },
          { label: '节点类型', isEdit: false, width: '80', align: 'center', prop: 'nodeType' },
          { label: 'cbt答案ID', isEdit: false, width: '100', prop: 'cbtAnswerId' },
        ],
        tableData: listdata[1]
      })
      function onPage(e) {
        data.tableData = []
        setTimeout(() => {
          data.tableData = listdata[e]
        }, 300)
      }

      return {
        ...toRefs(data),
        onPage,
      }
    },
  }
</script>

<style scoped lang="scss">
  .custom-table {
    margin: 15px 0;
    height: 700px;
    ::v-deep(.is-scrolling-left) {
      height: 659px;
      overflow: auto;
    }
    ::v-deep(.custom-cell) {
      padding: 4px 0;
      white-space: nowrap;
    }
  }
</style>
