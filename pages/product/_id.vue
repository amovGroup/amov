<template>
  <section class="container">
    <div class="max-width">
      <div class="course-board">
      </div>
      <div>
        <div class="product-platform clearfix">
        <div class="product-title">
          <h3>无人机开发平台</h3>
        </div>
          <div class="platform-inst">
            <div>
              <div class="inst-content">
                <div class="product-subtitle">
                  <span>产品概述</span>
                  <div class="inst-hr"></div>
                  <div class="inst-gene">
                    <span>
                      {{proInfo.product.intro}}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="inst-purchase">
              <div class="inst-cash">¥{{proInfo.product.price}}</div>
              <div>
                <el-button type="primary" size="mini" round>&nbsp;&nbsp;&nbsp;立即购买&nbsp;&nbsp;&nbsp;</el-button>
              </div>
            </div>
          </div>
          <div class="platform-pic">
            <img :src="proInfo.product.profileUrl" alt="pic">
          </div>
        </div>
        <div class="product-video">
          <div class="product-subtitle">
            <span>产品视频</span>
            <div class="inst-hr"></div>
          </div>
          <video class="video-size" :src="proInfo.productInfo.videoUrl" controls>视频有误不能观看</video>
        </div>
        <div class="product-prop">
          <div class="product-subtitle">
            <span>产品属性</span>
            <div class="inst-hr"></div>
            <div class="inst-gene">
              <div>{{proInfo.productInfo.property}}</div>
            </div>
          </div>
        </div>
        <div class="product-instruction">
          <div class="product-subtitle">
            <span>功能介绍</span>
            <div class="inst-hr"></div>
            <div class="inst-gene">
              <div>{{proInfo.productInfo.function}}</div>
            </div>
          </div>
        </div>
        <div class="product-feature">
          <div class="product-subtitle">
            <span>产品特色</span>
            <div class="inst-hr"></div>
            <div class="inst-gene">
              <div>{{proInfo.productInfo.feature}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData({$axios,params}){
    const proInfo = await $axios.get('/api/product/' + params.id);
    return {proInfo:proInfo.data.body}
  },
  data() {
    return {
      pics: [
        '/_nuxt/assets/carousel/1.jpeg',
        '/_nuxt/assets/carousel/2.jpeg',
        '/_nuxt/assets/carousel/3.jpeg',
        '/_nuxt/assets/carousel/4.jpeg'
      ],
      proInfo:[]
    }
  }
}
</script>

<style>

</style>

