<template>
<!-- el-row -->
<el-row class="layout-header" type="flex" align="middle">
    <!-- 先定义一行 -->
    <el-col class="left" :span="12">
        <i class="el-icon-s-fold"></i>
        <span>江苏传智博客教育科技股份有限公司</span>
    </el-col>
    <el-col class="right" :span="12">
         <el-row type="flex" justify="end" align="middle">
             <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
             <!-- 下拉菜单 -->
             <el-dropdown @command="clickMenu">
                 <!-- 匿名插槽 -->
                 <span>{{userInfo.name}}</span>
                 <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item command="info">个人信息</el-dropdown-item>
                      <el-dropdown-item command="git">git地址</el-dropdown-item>
                       <el-dropdown-item command="lgout">退出</el-dropdown-item>
                 </el-dropdown-menu>
             </el-dropdown>
         </el-row>
    </el-col>

</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 定义一个用户对象
      defaultImg: require('../../assets/img/tx-g.jpg')
    }
  },
  created () {
    let token = localStorage.getItem('user-token') // 获取用户
    this.$axios({
      url: '/user/profile',
      headers: {
        // 参数内容
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  },
  methods: {
    // 点击菜单项时触发
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        // 跳转到git地址
        window.location.href = 'https://github.com/DuullPig/Hei-Ma-Tou-Tiao-90'
      } else {
        // 退出
        window.localStorage.removeItem('user-token')
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang='less' scoped>
.layout-header {
    height: 60px;
    .left {
        font-size: 20px;
        .span {
            color: #2c3e50;
            font-size: 16px;
            margin-left: 4px;
        }
    }
    .right {
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;  //蒙奇·D·路飞
        }
    }
}
</style>
