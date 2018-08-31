<template>
  <div class="sort">
    <div class="head flex">
      <div class="font24">分类管理</div>
      <router-link to="/sort/sortAdd">
        <el-button type="primary">添加分类</el-button>
      </router-link>
    </div>
    <div class="con">
      <el-table :data="tableData">
        <el-table-column prop="brand_img" label="logo">
        </el-table-column>
        <el-table-column prop="brand_type" label="品牌">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="10" @current-change="handleCurrentChange" v-if="tableData.length>0">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getSort } from '../fetch/fetch'
export default {
  name: 'sort',
  data() {
    return {
      tableData: [],
      total: 0,
      pageno: 1
    }
  },
  created() {
    // this.get_sort();
  },
  methods: {
    async get_sort() {
      await getSort(this.pageno).then(res => {
        //未登录
        if (res.code == 200) {
          this.tableData = res.list;
          this.total = res.total
        }
      }).catch(e => {
        if (e.code == 404) {
          this.$router.push('/login')
        }
      })
    },
    handleCurrentChange(val) {
      this.pageno = val;
      this.get_sort();
    },
  }
}

</script>
<style scoped>



</style>
