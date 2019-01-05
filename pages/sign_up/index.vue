<template>
  <div class="sign_in_box">
    <form action="" class="signForm" id="sign_up">
      <div class="logoBox" style="padding-top: 20px;">
        <img src="../../assets/logo/logo.png" alt="" style="width: 145px">
      </div>
      <h3>注&nbsp;&nbsp;&nbsp;册</h3>
      <div class="inputBox">
        <input id="username" type="text" autocomplete="off" onfocus="if(this.value=='手机号或邮箱') this.value=''" onblur="if(this.value=='') this.value='手机号或邮箱'" value="手机号或邮箱">
        <input id="authCode" type="text" autocomplete="off" onfocus="if(this.value=='请输入验证码') this.value=''" onblur="if(this.value=='') this.value='请输入验证码'" value="请输入验证码" style="margin-top: 20px">
      </div>
      <div class="textBox">
        <ul>
          <li><a href="/sign_in">登录</a></li>
          <li style="margin-left: 160px;"><a href="">发送验证码</a></li>
        </ul>
      </div>
      <div class="btnBox">
        <button>注册</button>
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

  }
</script>

<style>
  .header,.footer{
    display: none;
  }
</style>
