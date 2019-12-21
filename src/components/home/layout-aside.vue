<template>
  <div class="layout-aside">
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <!-- 左侧导航 -->
      <el-menu :router="true" background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
          <!-- 没有折叠 -->
          <el-menu-item index="/home">首页</el-menu-item>
          <!-- 二级折叠菜单 -->
          <el-submenu index="1">
              <template slot="title">
                  <span>内容管理</span>
              </template>
                <el-menu-item index="/home/publish">发布文章</el-menu-item>
                <el-menu-item index="/home/articles">文章列表</el-menu-item>
                <el-menu-item index="/home/comment">评论管理</el-menu-item>
                <el-menu-item index="/home/material">素材管理</el-menu-item>
          </el-submenu>
           <!-- 二级折叠菜单 -->
          <el-submenu index="2">
              <template slot="title">
                  <span>粉丝管理</span>
              </template>
                <el-menu-item index="/home/picture">图文数据</el-menu-item>
                <el-menu-item index="/home/fansinfo">粉丝概况</el-menu-item>
                <el-menu-item index="/home/fanspicture">粉丝画像</el-menu-item>
                <el-menu-item index="/home/fanslist">粉丝列表</el-menu-item>
          </el-submenu>
          <!-- 没有折叠 -->
          <el-menu-item index="/home/userinfo">账户信息</el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .layout-aside {
        width: 230px;
        .el-menu {
            border-right: none;
        }
        .title {
            background-color: #2e2f32;
            text-align: center;
            padding: 10px 0;
            img {
                height: 35px;
            }
        }
    }
</style>
