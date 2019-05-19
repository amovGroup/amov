<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="nav-menu"
      mode="horizontal"
      @select="handleSelect"
      background-color="#0a122b"
      text-color="#fff"
      active-text-color="#5175ea"
    >
      <el-menu-item class="nav-menu-item" index="1">
        <nuxt-link to="/">
          <img src="~/assets/logo/logo_white.png" alt="logo" class="logo">
        </nuxt-link>
      </el-menu-item>
      <el-menu-item class="nav-menu-item" index="2">
        <nuxt-link to="/" class="router-nav">首页</nuxt-link>
      </el-menu-item>
      <el-menu-item class="nav-menu-item" index="3">
        <nuxt-link to="/product" class="router-nav">产品</nuxt-link>
      </el-menu-item>
      <!--<el-menu-item class="nav-menu-item" index="4"><nuxt-link to="/software" class="router-nav">软件</nuxt-link></el-menu-item>-->
      <!--<el-menu-item class="nav-menu-item" index="5"><nuxt-link to="/course" class="router-nav">课程</nuxt-link></el-menu-item>-->
      <el-menu-item class="nav-menu-item" index="4">
        <nuxt-link to="/news" class="router-nav">新闻</nuxt-link>
      </el-menu-item>
      <el-menu-item class="nav-menu-item" index="5">
        <a href="http://bbs.amovauto.com/" target="_blank" class="router-nav">论坛</a>
      </el-menu-item>
      <el-menu-item class="nav-menu-item" index="6">
        <a href="https://shop142114972.taobao.com" target="_blank" class="router-nav">店铺</a>
      </el-menu-item>
      <el-menu-item class="nav-menu-item" index="7">
        <nuxt-link to="/about" class="router-nav">关于我们</nuxt-link>
      </el-menu-item>
      <el-menu-item class="nav-menu-item right-item" index="8" id="signUpMenu" v-if="!isLogin">
        <nuxt-link to="/sign_up" class="router-nav">注册</nuxt-link>
      </el-menu-item>
      <el-menu-item class="nav-menu-item right-item" index="9" id="signInMenu" v-if="!isLogin">
        <nuxt-link to="/sign_in" class="router-nav">登录</nuxt-link>
      </el-menu-item>
      <ul id="mainMenuUl" v-if="isLogin">
        <li style="margin-right: 20px">
          <a href="javascript:;" title="用户名">{{cookiesInfo}}</a>
        </li>
        <li style="margin-right: 5px">
          <a href="javascript:;" style="text-decoration: none;" title="退出登录" @click="isModalVisible = true" >退出登录</a>
        </li>
      </ul>
    </el-menu>
    <QuitLoginModal v-show="isModalVisible" @close="isModalVisible = false"/>
  </div>
</template>

<script>
import QuitLoginModal from '@/components/quitLoginModal'
export default {
  components: {
    QuitLoginModal
  },
  computed: {},
  data() {
    return {
      activeIndex: '1',
      cookiesInfo: null,
      isModalVisible: false,
      isLogin:false,
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  },
  beforeMount: function() {
    if (document.cookie) {
      let cookie = document.cookie.replace(/\s+/g, '')
      let cookieArr = cookie.split(';')
      let jsonCookie = {}
      cookieArr.forEach(i => {
        let arr = i.split('=')
        jsonCookie[arr[0]] = arr[1]
      })
      if (jsonCookie.cache) {
        this.isLogin = true
        this.cookiesInfo = jsonCookie.username
      } else {
        this.isLogin = false
      }
    } else {
      this.isLogin = false
    }
  }
}
</script>