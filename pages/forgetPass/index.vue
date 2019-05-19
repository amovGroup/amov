<style lang="sass" scoped>
@import "./forgetPass.scss"
</style>
<template>
    <div class="forgetPassPage">
        <img class="headerImage" src="" alt="">
        <div class="writeBox">
                <div class="phoneInput">
                    <input type="text" placeholder="请输入手机号">
                    <mu-icon value="clear" class="deleteIcon"></mu-icon>
                </div>
                <div class="phoneCode" >
                    <input type="text" placeholder="请输入验证码">
                    <mu-button class="codeButton">获取验证码</mu-button>
                </div>
                <div class="password">
                    <input type="password" placeholder="请输入新密码">
                    <mu-icon value="delete" class="noSee"></mu-icon>
                </div>
                <mu-button class="registerButton" >修改密码</mu-button>
            </div>
    </div>
</template>
