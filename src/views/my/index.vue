<template>
  <div class="my-container">
        <!---已登录头部-->
    <div v-if="user" class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image
            class="avatar"
            round
            fit="cover"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="name">黑马头条</span>
        </div>
        <div class="right">
          <van-button size="mini" round>编辑资料</van-button>
        </div>
      </div>
      <div class="data-stats">
        <div class="data-item">
          <span class="count">10</span>
          <span class="text">头条</span>
        </div>
        <div class="data-item">
          <span class="count">66</span>
          <span class="text">关注</span>
        </div>
        <div class="data-item">
          <span class="count">88</span>
          <span class="text">粉丝</span>
        </div>
        <div class="data-item">
          <span class="count">88</span>
          <span class="text">获赞</span>
        </div>
      </div>
    </div>
    <!---未登录头部-->
    <div v-else class="header not-login">
      <div class="login-btn">
        <img
          class="mobile-img"
          src="~@/assets/mobile.png"
          @click="$router.push('/login')"
        />
        <span class="text">登录/注册</span>
      </div>
    </div>
    <!-- 导航 -->
    <van-grid class="grid-nav" :column-num="2" clickable>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao rk-shoucang"></i>
        <span slot="text" class="text">收藏</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon" class="toutiao rk-lishi"></i>
        <span slot="text" class="text">历史</span>
      </van-grid-item>
    </van-grid>

    <van-cell title="消息通知" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell v-if="user" title="退出登录" class="lgout-cell" />

    <!-- <van-cell title="消息通知" is-link url="" />
    <van-cell title="实名认证" is-link url="" />
    <van-cell title="用户反馈" is-link url="" />
     <van-cell title="消息通知" is-link url="" />
    <van-cell title="小智同学" is-link url="" />
    <van-cell title="系统设置" is-link url="" /> -->
  </div>
</template>

<script>
import { mapState,mapGetters  } from 'vuex'
export default {
  name: "MyIndex",
  components: {},
  props: {},
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['user'])
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.my-container {
  .header {
    height: 361px;
    background: url("~@/assets/banner.png") no-repeat;
    background-size: cover;
  }

  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;

    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .mobile-img {
        width: 132px;
        height: 132px;
        margin-bottom: 15px;
      }

      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }

  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          border: 4px solid #fff;
          width: 132px;
          height: 132px;
          margin-right: 23px;
        }
        .name {
          font-size: 30px;
          color: #fff;
        }
      }
      .right {
        align-items: center;
        display: flex;
      }
    }

    .data-stats {
      display: flex;
      .data-item {
        height: 130px;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        .text {
          font-size: 23px;
        }
        .count {
          
          font-size: 36px;
        }
      }
    }  
  }
  .grid-nav{
      .grid-item{
        height: 141px;
        i.toutiao{
          font-size: 45px !important;
        }
        span.text{
          font-size: 28px;
        }
        .rk-shoucang{
          color:#eb5253;
        }
        .rk-lishi{
          color:#ff9d1d;
        }
      }
    }
  .lgout-cell{
     text-align: center;
     color: #d86262;
     margin-top: 9px;
  }
}
</style>
