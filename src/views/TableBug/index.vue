<template>
  <div class="table-bug">
    <el-table :data="tableData">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="日期"
        width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="100"
        :show-overflow-tooltip="true">

      </el-table-column>
    </el-table>
    <el-button type="primary" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      border
      width="50%">
      <el-table :data="tableData">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="日期"
          width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="100"
          :show-overflow-tooltip="true">
        </el-table-column>
      </el-table>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  import {reactive, toRefs} from 'vue'

  export default {
    setup() {
      const data = reactive({
        dialogVisible: false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      })
      return {
        ...toRefs(data),
      }
    },
  }
</script>
