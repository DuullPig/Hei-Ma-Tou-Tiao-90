<template>
  <el-carousel :interval="4000" type="card" height="300px" >
    <el-carousel-item  v-for="item in list" :key="item">
     <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2716500324,534670106&fm=26&gp=0.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576949152925&di=7ce9361d76c0cfa29de7a08c70c71f89&imgtype=0&src=http%3A%2F%2Fimage001.024xht.com%2F20170705%2F41176e3ebe5be62f446b529fdae7b8de.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576949041152&di=fcd0123b3cc00562f6ecf878a1b7b1d9&imgtype=0&src=http%3A%2F%2Fimage001.024xht.com%2F20170705%2Fb213b16dc7c86720c6cd325d674427f0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1264023887,2504332431&fm=15&gp=0.jpg'
      ] }
  }
}
</script>

<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
