<template>
  <div class="sign_in_box">
    <Background/>
    <div class="logo">
      <img src="~/assets/logo/logo_white.png" alt="logo" class="logo">
    </div>
    <div class="signForm">
      <h3>登录</h3>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="ruleForm"
      >
        <el-form-item prop="username" class="item" label-width="0">
          <el-input
            type="text"
            v-model="ruleForm.username"
            autocomplete="true"
            placeholder="用户名或手机号"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item" label-width="0">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div class="textBox text">
          <div @click="showModel= true">忘记密码</div>
        </div>
        <el-form-item class="btnBox" label-width="0">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="loading"
            class="button"
          >提交</el-button>
        </el-form-item>
        <div class="register text">
          <nuxt-link to="/sign_up">
            <p>注册账户</p>
          </nuxt-link>
        </div>
      </el-form>
    </div>
    <ForgotModal :show.sync='showModel'/>
  </div>
</template>

<script>
import { get, post } from '~/plugins/axios'
import Background from '@/components/Background'
import ForgotModal from '@/components/ForgotModal'
export default {
  components: {
    Background,
    ForgotModal
  },
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      const passwordLimit = /^[a-zA-Z0-9]{6,18}$/
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (!passwordLimit.test(value)) {
        callback(new Error('密码应为6-18位字母或数字!'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      showModel:false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: validateUser, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.toSignUp()
          console.log(this)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    toSignUp() {
      this.loading = true
      const userInfo = this.ruleForm
      post('account/sign-in', userInfo)
        .then(response => {
          this.loading = false
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
                    ''
                  console.log(this.$route.query.from)
                  this.$notify({
                    title: '登录成功',
                    type: 'success'
                  })

                  if (this.$route.query.from) {
                    let furl = decodeURIComponent(this.$route.query.from)
                    console.log('论坛跳转' + furl)
                    setTimeout(
                      function() {
                        window.location.href = furl
                      },

                      300
                    )
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
    }
  }
}
</script>
<style>
.el-input__inner {
  border-radius: 20px;
}
</style>

<style lang="scss" scoped>
.sign_in_box {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  min-width: 1300px;
  overflow: hidden;
  .logo {
    position: absolute;
    top: 20px;
    left: 20px;
    img {
      height: 50px;
      width: auto;
    }
  }
  .signForm {
    width: 390px;
    height: 470px;
    margin-left: 54.7vw;
    border-radius: 15px;
    background-color: white;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 14px;
    h3 {
      font-size: 30px;
      font-weight: 400;
      color: rgba(128, 128, 128, 1);
    }
    .ruleForm {
      margin-top: 40px;
      width: 70%;
    }

    .textBox {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .btnBox {
      margin-top: 15px;
      .button {
        width: 100%;
        border-radius: 20px;
      }
    }
    .text {
      color: #5175ea;
      cursor: pointer;
    }
    .register {
      // margin-top: 1.0938vw;
    }
    a {
      text-decoration: none;
      outline: none;
      color: inherit;
    }
  }
}
</style>

