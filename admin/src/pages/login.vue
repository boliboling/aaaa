<template>
  <div class="login">
    <div class="login-head font36">后台管理</div>
    <el-form :model="userinfo" :rules="rules" ref="userinfo" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="userinfo.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="userinfo.pass"></el-input>
      </el-form-item>
      <div class="flex-round login-btn">
        <el-button type="primary" @click="submitForm('userinfo')">登录</el-button>
        <el-button @click="resetForm('userinfo')">重置</el-button>
      </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { aLogin } from '../fetch/fetch'
export default {
  name: 'Login',
  data() {
    return {
      userinfo: {
        name: '',
        pass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]

      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          aLogin(this.userinfo).then(res => {
            if (res.code == 201 || res.code == 200){
               this.$message(res.message);
                localStorage.username=this.userinfo.name;
                this.$router.push('/user')
            }
          
          }).catch(e => {
            console.info(e)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>
<style scoped>
.el-form {
  width: 30%;
  margin: 0% 35%;
}

.login-btn {
  width: 40%;
  margin: 0 30%;
}

.login-head {
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}

</style>
