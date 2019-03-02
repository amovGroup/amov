<template>
  <div class="sign_in_box">
    <form class="signForm" id="sign_up">
      <div class="logoBox" style="padding-top: 20px;">
        <img src="../../assets/logo/logo.png" alt="" style="width: 145px">
      </div>
      <h3>注&nbsp;&nbsp;&nbsp;册</h3>
      <div class="inputBox">
        <input autocomplete="off" id="username" type="text" @focus="usernameOnfocus()" @blur="usernameOnblur()" value="用户名">
        <p class="inputHint" v-if="!usernameStatus">用户名由3到15个字符组成</p>
        <p id="passwordTxt">密码</p>
        <input autocomplete="off" id="password" type="password" @focus="passwordOnfocus()" @blur="passwordOnblur()">
        <p class="inputHint" v-if="!passwordStatus">密码应为6-18位字母或数字</p>
        <p id="passwordAgain">确认密码</p>
        <input autocomplete="off" id="again" type="password" @focus="againOnfocus()" @blur="againOnblur()">
        <p class="inputHint">{{againStatus===-1?"请先正确输入密码":againStatus===1?"两次输入不一致":""}}</p>
        <input id="phoneNumber" type="text" autocomplete="off" @focus="phoneNumOnfocus()" @blur="phoneNumOnblur()" value="手机号">
        <p class="inputHint" v-if="!phoneNumStatus">请输入正确的手机号</p>
        <div></div>
        <input id="authCode" type="text" autocomplete="off" @focus="authCodeOnfocus()" @blur="authCodeOnblur()" value="请输入验证码">
        <el-button id="sendCode" @click="clickSendCode()" type="button">获取验证码</el-button>
        <p class="inputHint" v-if="!authCodeStatus">请输入正确的验证码</p>
      </div>
      <div class="textBox">
        <ul>
          <li><a href="/sign_in">登录</a></li>
          <!--<li style="margin-left: 160px;"><a @click="sendCode()" style="cursor: pointer">发送验证码</a></li>-->
        </ul>
      </div>
      <div class="btnBox">
        <el-button @click="register()">注册</el-button>
      </div>
      <div v-if="0">
        <p style="font-size: 14px;color: #777;margin-top: 15px">第三方登录</p>
        <div class="third-party" style="margin-top: 10px">
          <button class="btn btn1" style="margin-right: 20px"></button>
          <button class="btn btn2"></button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {get,post} from '~/plugins/axios'
  export default {
    data(){
      return {
        //-1为初始状态或点击状态，0为输入有误或为空，1为输入正确
        usernameStatus:-1,
        phoneNumStatus:-1,
        authCodeStatus:-1,
        passwordStatus:-1,
        //-1为密码未正确输入，0为初始或输入框为空，1为密码和再次输入密码不一致，2为密码和再次输入密码一致
        againStatus:0,
        clickTimes:0
      }
    },
    methods:{
      usernameOnfocus(){
        const username = document.getElementById('username');
        this.usernameStatus = -1;
        if(username.value=='用户名'){
          username.value=''
        }
      },
      usernameOnblur(){
        const username = document.getElementById('username').value;
        if(username.length>15 || username.length<3){
          console.log(username.length+" ，不在范围");
          this.usernameStatus = 0;
          if(username==''){
            document.getElementById('username').value='用户名'
          }
        }else {
          console.log(username.length+" ，在范围");
          this.usernameStatus = 1;
        }
      },
      phoneNumOnfocus(){
        const phoneNum = document.getElementById('phoneNumber');
        this.phoneNumStatus = -1;
        if(phoneNum.value=='手机号'){
          phoneNum.value='';
        }
      },
      phoneNumOnblur(){
        const phoneNum = document.getElementById('phoneNumber');
        const phoneNumPattern = /^1[34578]\d{9}$/;
        this.phoneNumStatus = 0;
        if(phoneNumPattern.test(phoneNum.value)){
          this.phoneNumStatus = 1
        }
        if(phoneNum.value==''){
          phoneNum.value='手机号';
        }
      },
      authCodeOnfocus(){
        const authCode = document.getElementById('authCode');
        this.authCodeStatus = -1;
        if(authCode.value=='请输入验证码'){
          authCode.value=''
        }
      },
      authCodeOnblur(){
        const authCode = document.getElementById('authCode');
        const authCodePattern = /^\d{6}$/;
        this.authCodeStatus = 0;
        if(authCode.value=='') {
          authCode.value = '请输入验证码'
        }
        if(authCodePattern.test(authCode.value)){
          this.authCodeStatus = 1;
        }
      },
      passwordOnfocus() {
        this.passwordStatus = -1;
        document.getElementById('passwordTxt').style.display = 'none'
      },
      passwordOnblur() {
        const passwordLimit = /^[a-zA-Z0-9]{6,18}$/,
          password = document.getElementById('password').value;
        //控制密码是否正确
        if (passwordLimit.test(password)) {
          this.passwordStatus = 1;
        } else {
          this.passwordStatus = 0;
        }
        if (password == '') {
          document.getElementById('passwordTxt').style.display = 'block'
        }
      },
      againOnfocus(){
        document.getElementById('passwordAgain').style.display = 'none';
        this.againStatus = 0;
        if(this.passwordStatus!=1){
          this.againStatus = -1;
        }
      },
      againOnblur(){
        const password = document.getElementById('password').value,
          again = document.getElementById('again').value;
        if(again===""){
          document.getElementById('passwordAgain').style.display = 'block';
        }
        if(this.passwordStatus === 1){
          this.againStatus = (password===again?2:1);
        }
      },
      register(){
        if(this.phoneNumStatus === 1 && this.authCodeStatus === 1 && this.usernameStatus === 1 && this.againStatus === 2){
          const phoneNum = document.getElementById('phoneNumber').value,
            authCode = document.getElementById('authCode').value,
            username = document.getElementById('username').value,
            password = document.getElementById('password').value,
            addDTO = {"age":0,"status":1,"password":password,"phoneNumber":phoneNum,"username":username};
          post('account/validate'+"?code="+authCode,addDTO)
            .then(response =>{
              console.log(response);
              if(response.data.status === 1){
                alert("注册成功，请登录");
                if(this.$route.query.from){
                  window.location.href = "/sign_in"+"?form="+encodeURIComponent(this.$route.query.from);
                }
                window.location.href = "/sign_in"
              }
              else{
                alert("注册失败，" + response.data.msg)
              }
            })
            .catch(error => {
              console.log(error)
            })
        }else {
          alert("请正确填写信息");
        }
      },
      clickSendCode(){
        console.log(this.clickTimes++)
        let wait = 60;
        const sendCode = document.getElementById("sendCode");
        if(this.phoneNumStatus === 1){
          time(sendCode,wait);
          const phoneNum = document.getElementById('phoneNumber').value,
            phoneNumber = "phoneNumber=" + phoneNum;
          post('account/send',phoneNumber)
            .then(response => {
              console.log(response);
              if(response.data.status===1){
                alert("成功发送验证码");
              }
              else {
                alert("验证码未成功发送，请稍后再试");
              }
            } )
            .catch(error => {
              console.log(error)
            })
        }
        else{
          alert("请先正确输入手机号");
        }
      }
    }
  }
function time(dom,wait) {
  if (wait === 0) {
    dom.removeAttribute("disabled");
    dom.innerHTML = "获取验证码";
    wait = 60;
  } else {
    dom.setAttribute("disabled", true);
    dom.innerHTML = wait + "秒后重试";
    wait--;
    setTimeout(function() {
      time(dom,wait)
    }, 1000)
  }
}
</script>
