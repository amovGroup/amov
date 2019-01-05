<template>
  <div class="sign_in_box">
    <form action="" class="signForm" id="sign_up">
      <div class="logoBox" style="padding-top: 20px;">
        <img src="../../assets/logo/logo.png" alt="" style="width: 145px">
      </div>
      <h3>个人信息</h3>
      <div class="inputBox">
        <input id="username" type="text" onfocus="if(this.value=='昵称') this.value=''" onblur="if(this.value=='') this.value='昵称'" value="昵称">
        <input id="password" type="text" onfocus="if(this.value=='密码') this.value=''" onblur="if(this.value=='') this.value='密码'" value="密码" style="margin-top: 20px">
        <input id="again" type="text" onfocus="if(this.value=='确认密码') this.value=''" onblur="if(this.value=='') this.value='确认密码'" value="确认密码" style="margin-top: 20px">
      </div>
      <div class="btnBox">
        <button>完成</button>
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
  .btnBox{
    margin-top: 40px;
  }
</style>
