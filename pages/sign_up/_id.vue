<template>
  <div class="sign_in_box">
    <form action="" class="signForm" id="sign_up_id">
      <div class="logoBox" style="padding-top: 20px;">
        <img src="../../assets/logo/logo.png" alt="" style="width: 145px">
      </div>
      <h3>个人信息</h3>
      <div class="inputBox">
        <input autocomplete="off" id="username" type="text" @focus="usernameOnfocus()" @blur="usernameOnblur()" value="昵称">
        <p class="inputHint" v-if="!usernameStatus">请输入正确的昵称</p>
        <p id="passwordTxt">密码</p>
        <input autocomplete="off" id="password" type="password" @focus="passwordOnfocus()" @blur="passwordOnblur()" style="margin-top: 20px">
        <p class="inputHint" v-if="!passwordStatus">密码应为6-18位字母或数字</p>
        <p id="passwordAgain">确认密码</p>
        <input autocomplete="off" id="again" type="password" @focus="againOnfocus()" @blur="againOnblur()" style="margin-top: 20px">
        <p class="inputHint">{{againStatus===-1?"请先正确输入密码":againStatus===0?"":"两次输入不一致"}}</p>
      </div>
      <div class="btnBox">
        <el-button @click="postInfo()">完成</el-button>
      </div>
    </form>
  </div>
</template>

<script>
import {get,post} from '~/plugins/axios'
  export default {
    data(){
      return {
        //-1为初始状态或点击该输入框状态，0为输入有误或输入框为空，1为输入正确
        usernameStatus:-1,
        passwordStatus:-1,
        againStatus:0
      }
    },
    methods:{
      usernameOnfocus(){
        const username = document.getElementById('username');
        this.usernameStatus = -1;
        if(username.value=='昵称'){
          username.value=''
        }
      },
      usernameOnblur(){
        const username = document.getElementById('username');
        this.usernameStatus = 0;
        username.value==''?username.value='昵称':this.usernameStatus = 1;
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
        if(this.passwordStatus===0){
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
          this.againStatus = (password==again?2:1);
        }
      },
      postInfo(){
        const pathname = window.location.pathname,
          phoneNum = pathname.slice(9),
          username = document.getElementById('username').value,
          password = document.getElementById('password').value;
        if(this.usernameStatus === 1 && this.passwordStatus === 1 && this.againStatus === 0 ){
          const registerInfo = {username:username,phoneNumber:phoneNum,password:password,status:1,age:16}
          post('system/user/add',registerInfo)
            .then(response => {
              if(response.data.status === 1){
                console.log(response);
                alert("注册成功");
              }
              else{
                alert("注册失败，" + response.data.msg)
              }
            })
            .catch(error => {
              console.log(error)
              alert("注册失败，请稍后重试");
            })
        }else {
          alert("请正确填写");
        }
      }
    }
  }
</script>
