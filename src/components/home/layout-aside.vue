<template>
  <div class="layout-aside">
      <div class="title">
          <img src="../../assets/img/logo_admin.png" alt="">
      </div>
      <!-- 左侧导航 -->
      <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
          <!-- 没有折叠 -->
          <el-menu-item>首页</el-menu-item>
          <!-- 二级折叠菜单 -->
          <el-submenu>
              <template slot="title">
                  <span>内容管理</span>
              </template>
                <el-menu-item>发布文字</el-menu-item>
                <el-menu-item>文章列表</el-menu-item>
                <el-menu-item>评论管理</el-menu-item>
                <el-menu-item>素材管理</el-menu-item>
          </el-submenu>
           <!-- 二级折叠菜单 -->
          <el-submenu>
              <template slot="title">
                  <span>粉丝管理</span>
              </template>
                <el-menu-item>图文数据</el-menu-item>
                <el-menu-item>粉丝概况</el-menu-item>
                <el-menu-item>粉丝画像</el-menu-item>
                <el-menu-item>粉丝列表</el-menu-item>
          </el-submenu>
          <!-- 没有折叠 -->
          <el-menu-item>账户信息</el-menu-item>
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
