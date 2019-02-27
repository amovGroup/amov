<template>
  <div>
    <div class="header">
      <el-menu
        :default-active="activeIndex"
        class="nav-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0a122b"
        text-color="#fff"
        active-text-color="#5175ea">
        <el-menu-item class="nav-menu-item" index="1"><nuxt-link to="/"><img src="~/assets/logo/logo_white.png" alt="logo" class="logo"></nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item" index="2"><nuxt-link to="/" class="router-nav">首页</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item" index="3"><nuxt-link to="/product" class="router-nav">产品</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item" index="4"><nuxt-link to="/software" class="router-nav">软件</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item" index="5"><nuxt-link to="/course" class="router-nav">课程</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item" index="6"><nuxt-link to="/news" class="router-nav">新闻</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item" index="7"><a href="http://bbs.amovauto.com" class="router-nav">论坛</a></el-menu-item>
        <el-menu-item class="nav-menu-item" index="8"><a href="https://shop142114972.taobao.com" target="_blank" class="router-nav">店铺</a></el-menu-item>
        <el-menu-item class="nav-menu-item" index="9"><nuxt-link to="/about" class="router-nav">关于我们</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item right-item" index="10" id="signUpMenu"><nuxt-link to="/sign_up" class="router-nav">注册</nuxt-link></el-menu-item>
        <el-menu-item class="nav-menu-item right-item" index="11" id="signInMenu"><nuxt-link to="/sign_in" class="router-nav">登录</nuxt-link></el-menu-item>
        <ul id="mainMenuUl">
          <li style="margin-right: 20px"><a href="javascript:;" title="用户名">{{cookiesInfo}}</a></li>
          <li style="margin-right: 5px"><a href="javascript:;" style="text-decoration: none" title="退出登录" @click="openModal">退出登录</a></li>
        </ul>
      </el-menu>
      <QuitLoginModal v-show="isModalVisible" @close="closeModal" />
    </div>
    <nuxt/>
    <div class="footer">
      <el-row :gutter="20">
        <el-col :span="6">
          <div>
            <p>&nbsp;</p>
          </div>
<!--          <div class="footer-margin"><nuxt-link to="/course" class="foot-a">课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#latest" class="foot-a">推荐课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#elementary" class="foot-a">初级课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#intermediate" class="foot-a">中级课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#advanced" class="foot-a">高级课程</nuxt-link></div>-->
        </el-col>
        <el-col :span="6">
          <div class="footer-margin"><nuxt-link to="/news" class="foot-a">新闻</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/news" class="foot-a">官方动态</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/news#evaluation" class="foot-a">线下培训</nuxt-link></div>
          <!--<div class="footer-margin"><nuxt-link to="/" class="foot-a">测试培训</nuxt-link></div>-->
        </el-col>
        <el-col :span="6">
          <div class="footer-margin"><a href="http://bbs.amovauto.com/" target="_blank" class="foot-a">论坛</a></div>
        </el-col>
        <el-col :span="6">
          <div class="footer-margin">联系方式</div>
          <div class="footer-margin">地址：<span>成都市郫都区菁蓉镇</span></div>
          <div class="footer-margin">邮箱：<a href="mailto:1202457854@qq.com" class="foot-a">1202457854@qq.com</a></div>
          <div class="footer-margin">电话：<a href="tel:12312312312" class="foot-a">123123123123</a></div>
          <div class="footer-margin">微信公众号 <img src="~/assets/home/qrcode.jpg" alt="" class="qrcode"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import QuitLoginModal from '@/components/quitLoginModal'
  export default {
    components: {
      QuitLoginModal
    },
    data() {
      return {
        activeIndex: '1',
        cookiesInfo:null,
        isModalVisible:false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      openModal:function (){
        this.isModalVisible = true
      },
      closeModal: function () {
        this.isModalVisible = false
      }
    },
    beforeMount:function() {
      const signUpMenu = document.getElementById("signUpMenu"),
        signInMenu = document.getElementById("signInMenu"),
        mainMenuUl = document.getElementById("mainMenuUl")
      if(document.cookie){
        let cookie = document.cookie.replace(/\s+/g,"");
        let cookieArr = cookie.split(";");
        let jsonCookie = {}
        cookieArr.forEach((i) => {
          let arr = i.split("=");
          jsonCookie[arr[0]] =arr[1];
        });
        if(jsonCookie.cache){
          signUpMenu.style.display = "none";
          signInMenu.style.display = "none";
          mainMenuUl.style.display = "block";
          this.cookiesInfo = jsonCookie.username
        }
        else {
          signUpMenu.style.display = "block";
          signInMenu.style.display = "block";
          mainMenuUl.style.display = "none";
        }
      }
      else {
        signUpMenu.style.display = "block";
        signInMenu.style.display = "block";
        mainMenuUl.style.display = "none";
      }
    }
  }
</script>


<style>
</style>
