<template>
    <div class="sign_in_box">
      <form action="" class="signForm">
        <div class="logoBox" style="padding-top: 20px;">
          <img src="../../assets/logo/logo.png" alt="" style="width: 145px">
        </div>
        <h3>登&nbsp;&nbsp;&nbsp;录</h3>
        <div class="inputBox">
          <input type="text" onfocus="if(this.value=='手机号或邮箱') this.value=''" onblur="if(this.value=='') this.value='手机号或邮箱'" value="手机号或邮箱">
          <p id="passwordTxt">密码</p>
          <input type="password" id="passwordInput" @focus="inputOnfoces()" @blur="inputOnblur()" value="" autocomplete="off">
        </div>
        <div class="textBox">
          <ul>
            <li><a href="/sign_up">注册</a></li>
            <li style="margin-left: 160px;"><a href="">忘记密码？</a></li>
          </ul>
        </div>
        <div class="btnBox">
          <button>登录</button>
        </div>
        <p style="font-size: 14px;color: #777;margin-top: 15px">第三方登录</p>
        <div class="third-party" style="margin-top: 10px">
          <button class="btn btn1" style="margin-right: 20px"></button>
          <button class="btn btn2"></button>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
    methods:{
      inputOnfoces(){
        document.getElementById('passwordTxt').style.display = 'none'
      },
      inputOnblur(){
        if(document.getElementById('passwordInput').value==''){
          document.getElementById('passwordTxt').style.display = 'block'
        }
      }
    }
  }
</script>

<style>
  .header,.footer{
    display: none;
  }
</style>
