<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 放置标题图片 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 放置表单 -->
      <el-form>
        <!-- 表单域 里面的设置 -->
        <el-form-item>
          <el-input placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item>
          <el-input style="width:65%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <!-- 复选框 -->
           <el-checkbox>我以阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
         <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.login {
  background-image: url('../../assets/img/san-g.jpg');
  height : 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 350px;
    .title {
      text-align: center;
      margin-block: 30px;
      img {
        height: 45px;
      }
    }
  }
}

</style>
