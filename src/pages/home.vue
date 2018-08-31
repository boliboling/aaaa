<template>
  <div class="home">
    <el-container>
      <el-header class="flex">
        <div class="h-left font22">乐惠后台</div>
        <div class="h-right font18">{{username}}<span @click="loginOut">退出</span></div>
      </el-header>
      <el-container>
        <el-aside width="8%">
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#393D49" text-color="#fff" active-text-color="#fff">
            <router-link to="/user">
              <el-menu-item index="1">
                <span slot="title">用户管理</span>
              </el-menu-item>
            </router-link>
                <router-link to="/sort">
              <el-menu-item index="1">
                <span slot="title">分类管理</span>
              </el-menu-item>
            </router-link>
     <!--        <el-submenu index="2">
              <template slot="title">
                <span>导航2</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu> -->
          </el-menu>
        </el-aside>
         <el-main>
       
         <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
     username:''
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    loginOut(){
      localStorage.removeItem("username");
       this.$message("退出成功");
       this.$router.push('/login')
    }
  },
  created(){
    console.info(localStorage.username);
    if(!localStorage.username){
       this.$router.push('/login')
    }else{
       this.username=localStorage.username
    }
  }
}

</script>
<style scoped>
.el-container {
  height: 100vh;
}

.el-header {
  background-color: #23262E;
  color: white;
  text-align: center;
  padding: 40px 3% 40px 1%;
}

.el-aside {
  background-color: #393D49;
  color: white;
  text-align: left;
}

.el-main {
       background-color: white;
    width: 95%;
    padding: 20px 2.5%;
    overflow-x: hidden;
}

.el-menu-item {
  width: 100% !important;
  padding: 0;
  padding-left: 20px !important;
}

.el-menu {
  border: none;
}
.h-right span{
  margin-left: 20px;
}

</style>
