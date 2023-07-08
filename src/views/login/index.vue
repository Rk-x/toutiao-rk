<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录 " >

      <van-icon slot="left" name="cross" @click="$router.back()"/>

    </van-nav-bar>

    <!-- 登录表单 -->
    <van-form ref="loginForm" @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          left-icon="smile-o"
          v-model="user.mobile"
          name="mobile"
          placeholder="请输入手机号"
          :rules="userFormRules.mobile"
          type="number"
        >
          <i slot="left-icon" class="toutiao rk-shouji"></i>
        </van-field>
        <van-field
          left-icon="smile-o"
          v-model="user.code"
          name="code"
          placeholder="请输入验证码"
          :rules="userFormRules.code"
          type="number"
          maxlength="6"
        >
          <i slot="left-icon" class="toutiao rk-yanzhengma"></i>
          <template #button>

            <van-count-down
            v-if="isCountDownShow"
            :time="1000*60"
            format="ss s"
            @finish="isCountDownShow=false"/>

            <van-button
            v-else
            class="send-sms-btn"
            size="small"
            round
            native-type="button"
            type="default"
            @click="onSendSms"
              >获取验证码
            </van-button>

          </template>
        </van-field>
      </van-cell-group>
      <div class="login-btn-wrap">
        <van-button block type="info" class="login-btn" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendCode } from '@/api/user'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      userFormRules: {
        mobile: [{
          required: true,
          message: '手机号不能为空'
        }, {
          pattern: /^1[3|5|7|8]\d{9}$/,
          message: '手机号格式不正确'
        }
        ],
        code: [{
          required: true,
          message: '验证码不能为空'
        }, {
          pattern: /^\d{6}$/,
          message: '验证码格式不正确'
        }
        ]
      },
      isCountDownShow: false
    }
  },
  methods: {
    async onSubmit () {
      // 1、获取表单数据
      const user = this.user

      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })

      try {
        const { data } = await login(user)
        console.log('登录成功', data.data)
        // 登录成功 将user更新到到Vuex的容器中，会同步存储到localstore中
        this.$store.commit('setUser', data.data)

        this.$toast.success('登录成功')
        //跳转回原来页面
        this.$router.back()
      } catch (err) {
        if (err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
          console.log('手机号或验证码错误')
        } else {
          console.log('登录失败', err)
          this.$toast.fail('登录失败')
        }
      }
    },
    //
    async onSendSms () {
      console.log('开始发送验证码')
      // 1、校验手机号
      try {
        await this.$refs.loginForm.validate('mobile')
        console.log('验证通过!')
      } catch (err) {
        return console.log('验证失败', err)
      }

      // 3、请求发送验证码
      try {
        const res = await sendCode(this.user.mobile)
        this.$toast('发送成功!')
        // 发送成功后开启倒计时
        this.isCountDownShow = true
      } catch (err) {
        if (err.response.status === 439) {
          this.$toast('发送太频繁了，请稍后重试')
        }
        // 发送失败 关闭倒计时
        this.isCountDownShow = false
        this.$toast('发送失败!')
        console.log('发送失败', err)
      }
    }
  }

}
</script>

<style lang="less" scoped>
.login-container {
  .toutiao {
    font-size: 37px;
  }
}
.send-sms-btn {
  background-color: #ededed;
  line-height: 46px;
  color: #666;
  width: 170px;
  height: 46px;
  font-size: 22px;
}
.login-btn-wrap {
  padding: 53px 33px;
  .login-btn {
    background-color: #6db4fb;
    border: none;
  }
}
</style>
