<template>
  <section class="container">
    <div class="max-width">
      <div class="sowing-map">
        <el-carousel :interval="5000" arrow="always">
          <el-carousel-item v-for="item in pics" :key="item">
            <img v-bind:src="item" alt="dd" class="carousel">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="intro">
        <img src="~/assets/home/family.jpg" alt="f" class="photo">
      </div>
      <div class="product">
        <el-row :gutter="20">
          <el-col :span="8" v-for="o in 3" :key="o">
            <el-card :body-style="{margin: '1vw', padding: '1vw', height: '45vw'}">
              <img src="@/assets/home/products/car.jpg" class="image">
              <div style="padding: 14px;">
                <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                  amet consectetur adipisicing elit. Obcaecati sint,
                   natus inventore ex quod ut reiciendis harum accusantium 
                   illum architecto voluptates praesentium, iusto culpa eligendi 
                   voluptatum recusandae ducimus.</span>
                <div class="bottom clearfix">
                  <el-button type="primary" class="button learn-more" round>&nbsp;&nbsp;了解详情&nbsp;&nbsp;</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
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
      pics: ['/_nuxt/assets/carousel/1.jpeg','/_nuxt/assets/carousel/2.jpeg','/_nuxt/assets/carousel/3.jpeg','/_nuxt/assets/carousel/4.jpeg']
    }
  }
}
</script>
