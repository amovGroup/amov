<template>
  <div class="sign_in_box">
    <Background/>
    <div class="signForm">
      <h3>注册</h3>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="ruleForm">
        <el-form-item prop="username" class="item" label-width="0">
          <el-input type="text" v-model="ruleForm.username" autocomplete="true" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password" class="item" label-width="0">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword" class="item" label-width="0">
          <el-input
            type="password"
            v-model="ruleForm.repassword"
            autocomplete="off"
            placeholder="确认密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="telphone" class="item" label-width="0">
          <el-input type="text" v-model="ruleForm.telphone" autocomplete="true" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item prop="authCode" class="item code" label-width="0">
          <el-input type="text" v-model="ruleForm.authCode" autocomplete="off" placeholder="验证码"></el-input>
          <el-button type="primary" :loading="loading" class="button" @click="clickSendCode">
            <span v-if="waitTime==60">获取验证码</span>
            <span v-else>{{waitTime}}s后重试</span>
          </el-button>
        </el-form-item>
        <el-form-item class="btnBox" label-width="0">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            :loading="loading"
            class="button"
          >注册</el-button>
        </el-form-item>
        <div class="register text">
          <nuxt-link to="/sign_in">
            <p>已有帐号,点击登录</p>
          </nuxt-link>
        </div>
      </el-form>
    </div>
    
  </div>
</template>

<script>
import { get, post } from '~/plugins/axios'
import Background from '@/components/Background'

export default {
  components: {
    Background,
    
  },
  data() {
    var validateUser = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else if (value.length > 15 || value.length < 3) {
        callback(new Error('用户名由3到15个字符组成'))
      } else {
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      const phoneNumPattern = /^1[34578]\d{9}$/
      if (value === '') {
        callback(new Error('请输入手机号'))
      }
      if (!phoneNumPattern.test(value)) {
        callback(new Error('请输入正确手机号'))
      } else {
        callback()
      }
    }
    var validateAuth = (rule, value, callback) => {
      const authCodePattern = /^\d{6}$/
      if (value === '') {
        callback(new Error('请输入验证码'))
      }
      if (!authCodePattern.test(value)) {
        callback(new Error('请输入正确验证码'))
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
    var validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请确认密码'))
      } else if (value != this.ruleForm.password) {
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      ruleForm: {
        username: '',
        password: '',
        repassword: '',
        telphone: '',
        authCode: ''
      },
      rules: {
        username: [{ validator: validateUser, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        telphone: [{ validator: validatePhone, trigger: 'blur' }],
        repassword: [{ validator: validateRePass, trigger: 'blur' }],
        authCode: [{ validator: validateAuth, trigger: 'blur' }]
      },
      waitTime: 60
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // this.toSignUp()
          console.log(this)
          this.register()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    register() {
      let { username, password, authCode, telphone } = this.ruleForm,
        addDTO = {
          age: 0,
          status: 1,
          password,
          phoneNumber: telphone,
          username
        }
      post('account/validate' + '?code=' + authCode, addDTO)
        .then(response => {
          console.log(response)
          if (response.data.status === 1) {
            this.$notify({
              title: '注册成功，请登录',
              type: 'success'
            })
            this.$router.push({ path: '/sign_in' })
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
}
.el-form-item__content {
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
</style>
<style lang="scss" scoped>
.sign_in_box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  min-width: 1300px;
  overflow: hidden;
  .signForm {
    width: 390px;
    height: 570px;
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
      .code {
        width: 100%;

        .el-input {
          width: 50%;
          left: 0;
        }
        .el-button {
          border-radius: 20px;
          width: 40%;
          right: 0;
          margin-left: 10%;
          color: #57c0f1;
          background: #fff;
          border: #57c0f1 1px solid;
        }
      }
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

