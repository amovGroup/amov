<template>
  <div class="sign_in_box">
    <form class="signForm" id="sign_in">
      <div class="logoBox" style="padding-top: 20px;">
        <img src="../../assets/logo/logo.png" alt="" style="width: 145px">
      </div>
      <h3>登&nbsp;&nbsp;&nbsp;录</h3>
      <div class="inputBox">
        <input type="text" @focus="usernameOnfocus()" @blur="phoneNumOnblur()" value="请输入手机号" id="username" autocomplete="off">
        <p class="inputHint" v-if="!usernameStatus">请输入正确的手机号</p>
        <p id="passwordTxt">密码</p>
        <input type="password" id="password" @focus="passwordOnfocus()" @blur="passwordOnblur()" value="" autocomplete="off">
        <p class="inputHint" v-if="!passwordHave">密码应为6-18位字母或数字</p>
      </div>
      <div class="textBox">
        <ul>
          <li><a href="/sign_up">注册</a></li>
          <li style="margin-left: 160px;"><a href="" style="left: calc(67.2vw + 71px);">忘记密码？</a></li>
        </ul>
      </div>
      <div class="btnBox">
        <el-button @click="toSignUp()">登录</el-button>
      </div>
<!--      <div>
        <p style="font-size: 14px;color: #777;margin-top: 15px">第三方登录</p>
        <div class="third-party" style="margin-top: 10px">
          <button class="btn btn1" style="margin-right: 20px"></button>
          <button class="btn btn2"></button>
        </div>
      </div>-->
    </form>
  </div>
</template>

<script>
// import axios from '@nuxtjs/axios'
import {get,post} from '~/plugins/axios'
  export default {
    data() {
      return {
        //-1为初始状态或点击输入框时，0为账号错误/密码输入框为空，1为账号正确/密码输出入框不为空
        //-1和1不显示提示
        usernameStatus: -1, passwordHave: -1
      }
    },
    methods: {
      usernameOnfocus() {
        const username = document.getElementById('username');
        this.usernameStatus = -1;
        if (username.value == '请输入手机号') {
          username.value = '';
        }
      },
      phoneNumOnblur() {
        const username = document.getElementById('username');
        this.usernameStatus = 0;
        //正则验证手机号
        /*        const usernamePattern = /^1[34578]\d{9}$/;
        if(usernamePattern.test(username.value)){
          this.usernameStatus = 1
        }*/
        if (username.value == '') {
          username.value = '请输入手机号'
        } else {
          //替换手机号验证
          this.usernameStatus = 1;
        }
      },
      passwordOnfocus() {
        this.passwordHave = -1;
        document.getElementById('passwordTxt').style.display = 'none'
      },
      passwordOnblur() {
        const passwordLimit = /^[a-zA-Z0-9]{6,18}$/,
          password = document.getElementById('password').value;
        //控制密码是否正确
        if (passwordLimit.test(password)) {
          this.passwordHave = 1;
        } else {
          this.passwordHave = 0;
        }
        if (password == '') {
          document.getElementById('passwordTxt').style.display = 'block'
        }
      },
      toSignUp() {
        // console.log("111")
        const username = document.getElementById('username').value,
          password = document.getElementById('password').value,
          userInfo = { username: username, password: password };
        if (this.usernameStatus === 1 && this.passwordHave === 1) {
          
          post('/account/sign-in', userInfo)
            .then(response => {
              if(!window.localStorage){
                alert("浏览器不支持localStorage！")
              }
              else {
                console.log(response);
                if(response.data.status === 2){
                  // let storage = window.localStorage;
                  let cache = response.data.data;
                  //设置localstorage
                  // storage.setItem("data",cache);
                  // storage.setItem("username",username);
                  //设置cookies
                  let date=new Date();
                  let expireDays=14;
                  //将date设置为5天以后的时间
                  date.setTime(date.getTime()+expireDays*24*3600*1000);
                  //将userId和userName两个cookie设置为10天后过期
                  document.cookie = "cache=" + cache + "; expires=" + date + "; domain=.amovauto.com; path=/";
                  document.cookie = "watch=" + cache + "; expires=" + date + "; domain=.amovauto.com; path=/";
                  document.cookie = "username=" + username + "; expires=" + date + ""; //.toGMTString()
                  console.log(this.$route.query.from)
                  alert("登录成功");
                  // return
                  
                  if(this.$route.query.from){
                    let furl=decodeURIComponent(this.$route.query.from)
                    console.log("论坛跳转"+furl)
                    setTimeout(function(){window.location.href=furl}
                       
                    ,300)
                   return
                  }else{
                    console.log("内部跳转")
                    window.location.reload()
                    // location.href="/"
                  }
                  
                }
                else{
                  alert("登录失败，"+response.data.msg);
                }
              }
            })
            .catch(error => {
              console.log(error)
            })
        }
      }
    }
  }
</script>
