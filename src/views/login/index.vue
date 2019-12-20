<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 放置标题图片 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 放置表单  绑定一个属性-->
      <el-form ：model="loginForm" :rules="loginRules">
        <!-- 表单域 里面的设置 -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <!-- 表单域 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:65%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right" plain>发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <!-- 复选框 -->
           <el-checkbox v-model="loginForm.check">我以阅读并同意用户协议和隐私条款</el-checkbox>
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
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false // 是否勾选
      },
      loginRules: {
        // 验证对象
      }
    }
  }
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
