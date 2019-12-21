<template>
  <div class="login">
    <el-card class="login-card">
      <!-- 放置标题图片 -->
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt="">
      </div>
      <!-- 放置表单  绑定一个属性-->
      <el-form ref="myForm" :model="loginForm" :rules="loginRules">
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
         <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
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
        mobile: [{ required: true, message: '请输入你的手机号' }, {
          pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确'
        }],
        code: [{ required: true, message: '请输入你的验证码' }, {
          pattern: /^\d{6}$/, message: '验证码不正确'
        }],
        check: [{ validator: function (rule, valie, callback) {
          // 自定义校验函数
        // rule 规则没啥用
        // valie 要校验的字段值
        // callback 是一个回调函数
          if (valie) {
            // 认为勾选
            callback() // 规则通过
          } else {
            // 没有勾选
            callback(new Error('你应该同意我们的霸王条款，让我们欺负你')) // 如果没勾选校验失败
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          // 校验通过 调用登录接口
          this.$axios({
            url: '/authorizations', // 请求地址
            method: 'post', // 类型
            data: this.loginForm
          }).then(result => {
            // 只接收真确的
            // 前端缓存 登录成功返回令牌
            window.localStorage.setItem('user-token', result.data.data.token)
          }).catch(() => {
            // 只接收错误的
          })
        }
      })
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
