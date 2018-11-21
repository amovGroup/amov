<template>
  <div>
    <div class="header">
      <el-menu
  :default-active="activeIndex2"
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
  <el-menu-item class="nav-menu-item" index="7"><nuxt-link to="/forum" class="router-nav">论坛</nuxt-link></el-menu-item>
  <el-menu-item class="nav-menu-item" index="8"><a href="https://shop142114972.taobao.com" target="_blank" class="router-nav">店铺</a></el-menu-item>
  <el-menu-item class="nav-menu-item" index="9"><nuxt-link to="/about" class="router-nav">关于我们</nuxt-link></el-menu-item>
  <el-menu-item class="nav-menu-item right-item" index="10"><nuxt-link to="/sign_up" class="router-nav">注册</nuxt-link></el-menu-item>
  <el-menu-item class="nav-menu-item right-item" index="11"><nuxt-link to="/sign_in" class="router-nav">登录</nuxt-link></el-menu-item>
</el-menu>
    </div>
    <nuxt/>
    <div class="footer">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">推荐课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">初级课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">中级课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">高级课程</nuxt-link></div>
        </el-col>
        <el-col :span="6">
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">新闻</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">官方动态</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">线下培训</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">测试培训</nuxt-link></div>
        </el-col>
        <el-col :span="6">
          <div class="footer-margin"><nuxt-link to="/" class="foot-a">论坛</nuxt-link></div>
        </el-col>
        <el-col :span="6">
          <div class="footer-margin">联系方式</div>
          <div class="footer-margin">地址：<span>Lorem ipsum dolor sit.</span></div>
          <div class="footer-margin">邮箱：<a href="mailto:example@example.com" class="foot-a">example@example.com</a></div>
          <div class="footer-margin">电话：<a href="tel:12312312312" class="foot-a">123123123123</a></div>
          <div class="footer-margin">微信公众号 <img src="~/assets/home/qrcode.jpg" alt="" class="qrcode"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
      data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>


<style>
</style>
