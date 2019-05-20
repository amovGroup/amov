
<template>
  <div class="userIndexPage">
    <img class="headerImage" src alt>
    <Background class="headerImage"/>
    <div class="actBox">
      <div class="typeTabs">
        <div
          class="bgBox"
          :class="tabStatus==false?'bgBoxRight bgToRight':(tabStatus==='undefind'?'':'bgToLeft') "
        ></div>
        <div class="tabOneLeft" :class="tabStatus?'activeTab':''" @click="tabStatus = true;ruleForm={}">
          <span>登录</span>
        </div>
        <div
          class="tabOneRight"
          :class="tabStatus==false?'activeTab':''"
          @click="tabStatus = false;ruleForm={}"
        >
          <span>注册</span>
        </div>
      </div>
      <div class="loginBox"></div>
      <div class="registerBox">
        <div class="phoneInput">
          <el-input type="text" placeholder="用户名" v-model="ruleForm.username"></el-input>
        </div>
        <div class="password">
          <el-input type="password" placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </div>
        <div class="password" v-if="tabStatus==false">
          <el-input type="password" placeholder="确认密码" v-model="ruleForm.rePassword"></el-input>
        </div>
        <div class="password" v-if="tabStatus==false">
          <el-input type="tel" placeholder="请输入手机号" v-model="ruleForm.telphone"></el-input>
        </div>
        <div class="phoneCode" v-if="tabStatus==false">
          <el-input type="text" placeholder="请输入验证码" v-model="ruleForm.authCode"></el-input>
          <el-button class="codeButton" @click="clickSendCode">
            <span v-if="waitTime==60">获取验证码</span>
            <span v-else>{{waitTime}}s后重试</span>
          </el-button>
        </div>

        <el-button class="registerButton" v-if="tabStatus==false" @click="register">注册</el-button>
        <el-button class="registerButton" v-if="tabStatus" @click="toSignUp">登录</el-button>
        <!-- <div class="lostPass" v-if="tabStatus">忘记密码</div> -->
      </div>
    </div>
  </div>
</template>


<script>
import { get, post } from '~/plugins/axios'
import Background from '@/components/Background'
export default {
  components: {
    Background
  },
  data() {
    return {
      loading: false,
      tabStatus: true,
      waitTime: 60,
      ruleForm: {
        username: '',
        password: '',
        authCode: '',
        rePassword: '',
        telphone: ''
      }
    }
  },
  methods: {
    toSignUp() {
      const userInfo = this.ruleForm

      if (!userInfo.username) {
        this.$notify.error({
          title: '登录失败',
          message: '请输入用户名'
        })
        return
      }
      if (!userInfo.password) {
        this.$notify.error({
          title: '登录失败',
          message: '请输入密码'
        })
        return
      }
      post('account/sign-in', userInfo)
        .then(response => {
          if (response.data.status === 2) {
            let cache = response.data.data
            let date = new Date()
            let expireDays = 14
            date.setTime(date.getTime() + expireDays * 24 * 3600 * 1000)
            document.cookie =
              'cache=' +
              cache +
              '; expires=' +
              date +
              '; domain=.amovauto.com; path=/'
            post('account/current', {}) //,{"Authorization":cache}
              .then(response => {
                if (response.data.status === 1) {
                  //设置cookies
                  // let date=new Date();
                  // let expireDays=14;
                  // date.setTime(date.getTime()+expireDays*24*3600*1000);
                  // document.cookie = "cache=" + cache + "; expires=" + date + "; domain=.amovauto.com; path=/";
                  document.cookie =
                    'cache=' +
                    cache +
                    '; expires=' +
                    date +
                    '; domain=.amovauto.com; path=/'
                  document.cookie =
                    'username=' +
                    response.data.data.username +
                    '; expires=' +
                    date +
                    '; domain=.amovauto.com; path=/'

                  this.$notify({
                    title: '登录成功',
                    type: 'success'
                  })

                  if (this.$route.query.from) {
                    let furl = decodeURIComponent(this.$route.query.from)
                    setTimeout(function() {
                      window.location.href = furl
                    }, 300)
                    return
                  } else {
                    console.log('内部跳转')
                    // window.location.reload()
                    // console.log(this.$router)
                    location.href = '/'
                  }
                } else {
                  console.log(response)
                }
              })
              .catch(error => {
                console.log(error)
              })
          } else {
            this.$notify.error({
              title: '登录失败',
              message: response.data.msg
            })
          }
        })
        .catch(error => {
          console.log(error)
          this.loading = false
        })
    },
    register() {
      let { username, password, rePassword, authCode, telphone } = this.ruleForm

      if (!username) {
        this.$notify.error({
          title: '注册失败',
          message: '请输入用户名'
        })
        return
      }
      if (!password) {
        this.$notify.error({
          title: '注册失败',
          message: '请输入密码'
        })
        return
      }
      if (!rePassword || rePassword!=password) {
        this.$notify.error({
          title: '注册失败',
          message: '请确认密码'
        })
        return
      }
      if (!telphone) {
        this.$notify.error({
          title: '注册失败',
          message: '请输入手机号'
        })
        return
      }
      if (!authCode) {
        this.$notify.error({
          title: '注册失败',
          message: '请输入验证码'
        })
        return
      }

      let addDTO = {
        age: 0,
        status: 1,
        password,
        phoneNumber: telphone,
        username
      }
      post('account/validate' + '?code=' + authCode, addDTO)
        .then(response => {
          if (response.data.status === 1) {
            this.$notify({
              title: '注册成功，请登录',
              type: 'success'
            })
            this.tabStatus = true;
            this.ruleForm = {}
          } else {
            this.$notify.error({
              title: '注册失败',
              message: response.data.msg
            })
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    clickSendCode() {
      if (this.waitTime != 60) {
        this.$notify.error({
          title: '验证码已发送，请稍后再试'
        })
        return
      }
      let { telphone } = this.ruleForm
      if (telphone) {
        let timer = setInterval(() => {
          if (this.waitTime <= 0) {
            clearInterval(timer)
            this.waitTime = 60
            return
          }
          this.waitTime--
        }, 1000)
        post('account/send?phoneNumber=' + telphone, {})
          .then(response => {
            if (response.data.status === 1) {
              this.$notify({
                title: '成功发送验证码',
                type: 'success'
              })
            } else {
              this.$notify.error({
                title: '验证码未成功发送，请稍后再试'
              })
            }
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        this.$notify.error({
          title: '请先正确输入手机号'
        })
      }
    }
  }
}
</script>
<style>
.el-input__inner {
  border-radius: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  /* height: 20px; */
  /* font-size: 12px; */
  line-height: 20px;
}
</style>
<style lang="sass" scoped>
@import "./index.scss"
</style>

