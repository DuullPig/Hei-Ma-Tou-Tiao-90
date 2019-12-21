<template>
  <!-- 放置一个大容器 -->
  <el-container>
    <!-- 左侧 -->
    <el-aside style="height:100vh ; background-color:#353b4e;width:230px">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧 -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-main>
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>

export default {

}
</script>

<style>

</style>
