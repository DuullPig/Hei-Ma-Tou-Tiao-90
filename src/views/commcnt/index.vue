<template>
  <!-- 卡片组件 -->
  <el-card v-loading="loading">
    <bread-crumb slot="header">
      <!-- 插槽内容 -->
      <template slot="title">评论管理</template>
    </bread-crumb>
    <!-- 组件表格 -->
    <el-table :data="list">
      <!-- 表格  width宽度 label表头 prop字段名-->
      <el-table-column prop="title" width="550px" label="标题"></el-table-column>
      <el-table-column :formatter="formatterBoolean" prop="comment_status" label="评论状态"></el-table-column>
      <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
      <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
      <el-table-column prop label="操作">
        <template slot-scope="obj">
          <el-button size="small" type="text">修改</el-button>
          <el-button
            @click="openOrCloseState(obj.row)"
            size="small"
            type="text"
          >{{obj.row.comment_status ? '关闭评论' : '打开评论'}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row type='flex' justify="center" align="middle" style="height:80px">
      <!-- 分页组件 -->
      <el-pagination background layout="prev, pager, next" :current-page='page.currentPage' :page-size="page.pageSize"
      :total="page.total" @current-change="changePage"></el-pagination>
    </el-row>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      list: [], // 定义一个数据返回结果
      loading: false, // 默认不打开进度条
      page: {
        total: 0,
        pageSize: 10, // 默认每页条数
        currentPage: 1 // 默认每页页码
      }
    }
  },
  methods: {
    // 页面改变事件
    changePage (newPage) {
      this.page.currentPage = newPage // 最新页面
      this.getComment()
    },
    getComment () {
      this.loading = true // 打开进度条
      this.$axios({
        url: '/articles',
        params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
      }).then(result => {
        this.list = result.data.results
        this.page.total = result.data.total_count
        this.loading = false
      })
    },
    // 定义一个格式化函数
    // row当前行数据, column当前列表数据, cellValue当前单元格值, index下标
    formatterBoolean (row, column, cellValue, index) {
      // return cellValue ? '正常' : '关闭1'
      return cellValue ? '正常' : '关闭'
    },
    // 打开或者关闭评论
    openOrCloseState (row) {
      // 直接调用接口
      let mess = row.comment_status ? '关闭' : '打开'
      this.$confirm(`您是否确定要${mess}关闭评论吗`, '提示').then(() => {
        // 调用接口
        this.$axios({
          method: 'put',
          url: '/comments/status',
          params: { article_id: row.id.toString() },
          data: { allow_comment: !row.comment_status }
        })
          .then(result => {
            debugger
            this.getComment()
          })
          .catch(() => {
            debugger
          })
      })
    }
  },
  created () {
    this.getComment() // 获取数据
  }
}
</script>

<style>
</style>
