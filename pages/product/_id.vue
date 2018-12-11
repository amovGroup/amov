<template>
  <section class="container">
    <div class="max-width">
      <div class="sowing-map">
        <el-carousel :interval="5000" arrow="always" class="banner">
          <el-carousel-item v-for="item in pics" :key="item">
            <img v-bind:src="item" alt="dd" class="carousel">
          </el-carousel-item>
        </el-carousel>
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
                      该款视觉无人机开发套件是一款针对开发者，上手简单，功能强大、且方便灵活扩展的无人机开发平台。其主要硬件包括：PIXHAWK飞控一套，英伟达TX1/TX2板卡，旋转式激光雷达，单目/双目摄像头。可以开发无人机室内定位，无人机视觉相关算法。借助英伟达的TX1/TX2支持深度学习的GPU来做复杂的室内定位和机器视觉相关的算法开发。我们提供完整的开发环境和开发例程。帮助大家迅速搭建好一整套的无人机机器视觉开发环境，再利用我们的提供的Demo例程上手开发工作，会事半功倍，更加去专注于算法的开发，让研发更高效。该款视觉无人机开发套件是一款针对开发者，上手简单，功能强大手简单，功能强大手简单，功能强大
                      手简单，功能强大.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="inst-purchase">
              <div class="inst-cash">¥11799.00</div>
              <div>
                <el-button type="primary" size="mini" round>&nbsp;&nbsp;&nbsp;立即购买&nbsp;&nbsp;&nbsp;</el-button>
              </div>
            </div>
          </div>
          <div class="platform-pic">
            <img src="@/assets/product/1.jpg" alt="pic">
          </div>
        </div>
        <div class="product-video">
          <video class="video-size" src="@/assets/video.mp4" controls>视频有误不能观看</video>
        </div>
        <div class="product-prop">
          <div class="product-subtitle">
            <span>产品概述</span>
            <div class="inst-hr"></div>
            <div class="inst-gene">
              <p>
               品牌：Lorem, ipsum dolor.
              </p>
              <p>
               名称：, ipsum dolor.
              </p>
              <p>
               机载电脑：ipsum dolor.
              </p>
              <p>
               二维激光雷达：Lorem, ipsum dolor.
              </p>
              <p>
               单目相机：Lorem, ipsum dolor.
              </p>
            </div>
          </div>
        </div>
        <div class="product-instruction">
          <div class="product-subtitle">
            <span>产品概述</span>
            <div class="inst-hr"></div>
            <div class="inst-gene">
              <p>
               品牌：Lorem, ipsum dolor.
               Lorem ipsum, dolor sit amet 
               consectetur adipisicing elit. Labore, magni illo dolorum quae maiores delectus provident aut accusamus facilis necessitatibus aspernatur doloribus ipsa autem non officiis quas ab illum, fugit possimus voluptate?
              </p>
            </div>
          </div>
        </div>
        <div class="product-feature">
          <div class="product-subtitle">
            <span>产品概述</span>
            <div class="inst-hr"></div>
            <div class="inst-gene">
              <p>Lorem ipsum dolor sit amet.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
              <p>Lorem ipsum dolor sit amet.</p>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              </ul>
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
  data() {
    return {
      pics: [
        '/_nuxt/assets/carousel/1.jpeg',
        '/_nuxt/assets/carousel/2.jpeg',
        '/_nuxt/assets/carousel/3.jpeg',
        '/_nuxt/assets/carousel/4.jpeg'
      ]
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

