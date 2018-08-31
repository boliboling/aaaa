<template>
  <div class="user">
    <div class="head flex">
       <div class="font24">用户管理</div>
       <el-button type="primary">添加用户</el-button>
    </div>
    <div class="con">
      <el-table :data="tableData">
        <el-table-column prop="username" label="姓名">
        </el-table-column>
        <el-table-column prop="password" label="密码">
        </el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" :total="total" :page-size="10"  @current-change="handleCurrentChange" v-if="tableData.length>0">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getUser } from '../fetch/fetch'
export default {
  name: 'User',
  data() {
    return {
      tableData: [],
      total:0,
      pageno:1
    }
  },
  created() {
    this.get_user();
  },
  methods: {
    async get_user() {
      await getUser(this.pageno).then(res => {
        //未登录
        if (res.code == 200){
          this.tableData = res.list;
          this.total=res.total
        }
      }).catch(e => {
        if(e.code==404){
            this.$router.push('/login')
        }
      })
    },
   handleCurrentChange(val){
   	this.pageno=val;
       this.get_user();
      },
  }
}

</script>
<style scoped>

</style>
