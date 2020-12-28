<template>
  <div class="test">
    <button @click="swichData">常规的for循环切换数据</button>
    <div v-for="item in list" :key="item">
      <item>{{ item }}</item>
    </div>
    <hr />
    <div>elementUI出错实现</div>
    <button @click="elSwichData(1)">切换为空数据</button>
    <div>问题1:列数据清空列没有消失</div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <template v-for="item in columns" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width">
        </el-table-column>
      </template>
    </el-table>
    <button @click="elSwichData(2)">切换列数据,从空列为非空列</button>
    <div>问题2:列切换引起vue错误，这个是会引起严重vue错误的</div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <template v-for="item in columns2" :key="item.prop">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item.width">
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script>
import {reactive, toRefs} from 'vue'
import Item from './Item'
export default {
  components: {
    Item
  },
  setup() {
    const data = reactive({
      list: [1,2,3,4,5,6,7,8,9],
      columns: [
        {prop: 'date', label: '日期', width: '180'},
        {prop: 'name', label: '姓名', width: '180'},
        {prop: 'address', label: '地址', width: '300'},
      ],
      columns2: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    })

    function swichData() {
      data.list = ['a','b','c','d']
    }

    function elSwichData(type) {
      if (type === 1) {
        data.columns = []
      }
      if (type === 2) data.columns2 =  [
        {prop: 'date', label: '日期', width: '180'},
        {prop: 'name', label: '姓名', width: '180'},
        {prop: 'address', label: '地址', width: '300'},
      ]
    }

    return {
      ...toRefs(data),
      swichData,
      elSwichData
    }
  },
}
</script>

<style scoped lang="scss"></style>
