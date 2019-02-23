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
.platform-inst,
.platform-pic {
  float: left;
  min-height: 16vw;
}

.platform-inst {
  width: 66.66%;
}

.platform-pic {
  width: 33.34%;
}

.clearfix {
  overflow: auto;
}

.product-subtitle,
.product-title {
  font-family: MicrosoftYaHei-Bold;
  font-weight: normal;
  font-stretch: normal;
  color: #333333;
  text-align: left;
}

.product-title {
  font-size: 1.25vw;
  letter-spacing: 0.06vw;
  line-height: 3vw;
}

.product-subtitle {
  font-size: 0.94vw;
  letter-spacing: 0.05vw;
}

.inst-hr {
  height: 1px;
  width: 30%;
  background-color: #d6d6d6;
  border: #d6d6d6 1px solid;
  margin: 1vw 0 1vw 0;
}

.inst-gene {
  font-family: MicrosoftYaHei;
  font-size: 0.83vw;
  font-weight: normal;
  font-stretch: normal;
  letter-spacing: 0.04vw;
  color: #333333;
}

.inst-cash {
  font-family: MicrosoftYaHei-Bold;
  font-size: 1.56vw;
  font-weight: normal;
  font-stretch: normal;
  line-height: 3.03vw;
  letter-spacing: 0.08vw;
  color: #ee3617;
}

.inst-purchase {
  float: right;
}

.video-size {
  width: 100%;
  height: 33vw;
}
</style>

