<template>
  <div class="layout-container">
    <!--子路由的出口-->
    <router-view></router-view>

    <van-tabbar class="layout-tabbar"  route>
      <van-tabbar-item to="/home" >
        <i slot="icon" class="toutiao rk-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/qa">
        <i slot="icon" class="toutiao rk-wenda"></i>
        <span class="text">问答</span>
      </van-tabbar-item>
      <van-tabbar-item to="/video">
        <i slot="icon" class="toutiao rk-shipin"></i>
        <span class="text">视频</span>
      </van-tabbar-item>
      <van-tabbar-item to="/my">
        <i slot="icon" class="toutiao rk-wode"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.layout-container{
    .layout-tabbar{
        i.toutiao{
            font-size: 40px;
        }
    }
}
</style>
