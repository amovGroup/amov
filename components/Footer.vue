<template>
    <div class="footer">
      <el-row :gutter="20">
        <!--<el-col :span="6">-->
        <!--          <div class="footer-margin"><nuxt-link to="/course" class="foot-a">课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#latest" class="foot-a">推荐课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#elementary" class="foot-a">初级课程</nuxt-link></div>
          <div class="footer-margin"><nuxt-link to="/course#intermediate" class="foot-a">中级课程</nuxt-link></div>
        <div class="footer-margin"><nuxt-link to="/course#advanced" class="foot-a">高级课程</nuxt-link></div>-->
        <!--</el-col>-->
        <el-col :span="8" style="padding-left: 130px">
          <div class="footer-margin">
            <nuxt-link to="/news" class="foot-a">新闻</nuxt-link>
          </div>
          <div class="footer-margin">
            <nuxt-link to="/news" class="foot-a">官方动态</nuxt-link>
          </div>
          <div class="footer-margin">
            <nuxt-link to="/news#evaluation" class="foot-a">线下培训</nuxt-link>
          </div>
          <!--<div class="footer-margin"><nuxt-link to="/" class="foot-a">测试培训</nuxt-link></div>-->
        </el-col>
        <el-col :span="8" style="padding-left: 150px">
          <div class="footer-margin">
            <a href="http://bbs.amovauto.com/" target="_blank" class="foot-a">论坛</a>
          </div>
        </el-col>
        <el-col :span="8" style="padding-left: 80px">
          <div class="footer-margin">联系方式</div>
          <div class="footer-margin">
            地址：
            <span>成都市郫都区菁蓉镇</span>
          </div>
          <div class="footer-margin">
            邮箱：
            <a href="mailto:1202457854@qq.com" class="foot-a">amovlab@163.com</a>
          </div>
          <div class="footer-margin">
            电话：
            <a href="tel:12312312312" class="foot-a">028-87872048</a>
          </div>
          <div class="footer-margin">
            微信公众号
            <img src="~/assets/home/qrcode.jpg" alt class="qrcode">
          </div>
        </el-col>
      </el-row>
    </div>
</template>
