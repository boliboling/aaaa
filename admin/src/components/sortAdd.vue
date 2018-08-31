<template>
  <div class="sortAdd">
    <div class="head flex1">
      <div class="font24">添加分类</div>
      <router-link to="/sort">
        <el-button class="margin30">返回</el-button>
      </router-link>
    </div>
    <div class="margin-t40">
      <el-row>
        <el-col :span="2" class="font18">logo：</el-col>
        <el-col :span="4">
          <el-upload class="avatar-uploader" :action="actionPath" :data="postData" accept="image/jpeg,image/gif,image/png,image/bmp" :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
      <el-row class="margin-t40">
        <el-col :span="2" class="font18">分类：</el-col>
        <el-col :span="3">
          <el-input placeholder="请输入分类名称" v-model="bname" clearable>
          </el-input>
        </el-col>
      </el-row>
      <el-row class="margin-t40">
        <el-col :span="5" style="text-align: center;">
          <el-button type="primary" @click="save">保存</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import { sortadd } from '../fetch/fetch'
import { genUpToken } from "../fetch/qiniuToken";
export default {
  name: 'sortAdd',
  data() {
    return {
      imageUrl: '',
      actionPath: 'https://up-z2.qiniup.com',
      bname: '',
      postData: {}
    }
  },
  created() {
    var policy = {};
    var bucketName = 'zyy-images';
    var AK = 'JqsK_6ECWpVHztFwtCPWMh10wGuSrDI_Fnlk9MyJ';
    var SK = 'MUIbNx5bL95nChlxmX5CXoswqempKlP26oFTbVgN';
    var deadline = Math.round(new Date().getTime() / 1000) + 3600;
    policy.scope = bucketName;
    policy.deadline = deadline;
    var token = genUpToken(AK, SK, policy);
    this.postData.token = token;
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = 'http://ozhyt48z3.bkt.clouddn.com/' + res.key
    },
    save() {
      if (this.imageUrl == '') {
        this.$message("图片不能为空");
        return;
      }
      if (this.bname == '') {
        this.$message("分类名称不能为空");
        return;
      }
      sortadd(this.imageUrl, this.bname).then(res => {
          this.$message(res.errmsg);
          setTimeout(function() {
            this.$router.push('/sort')
          }, 1000)
      }).catch(e => {
        console.info(e)
      })
    }
  }
}

</script>
<style lang="css" scoped>


</style>
