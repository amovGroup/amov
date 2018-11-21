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
      <div class="software">
        <h3>软件一览表</h3>
        <hr class="hr-line" size="10" />
        <div>
          <el-row :gutter="20">
            <el-col :span="8" style="margin-top: 10px;">
              <el-card>
                <img src="@/assets/home/products/car.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Obcaecati sint,
                    illum architecto voluptates praesentium, iusto culpa eligendi 
                    voluptatum recusandae ducimus.</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 10px;">
              <el-card>
                <img src="@/assets/home/products/car.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Obcaecati sint,
                    illum architecto voluptates praesentium, iusto culpa eligendi 
                    voluptatum recusandae ducimus.</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 10px;">
              <el-card>
                <img src="@/assets/home/products/car.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Obcaecati sint,
                    illum architecto voluptates praesentium, iusto culpa eligendi 
                    voluptatum recusandae ducimus.</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 10px;">
              <el-card>
                <img src="@/assets/home/products/car.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Obcaecati sint,
                    illum architecto voluptates praesentium, iusto culpa eligendi 
                    voluptatum recusandae ducimus.</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 10px;">
              <el-card>
                <img src="@/assets/home/products/car.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Obcaecati sint,
                    illum architecto voluptates praesentium, iusto culpa eligendi 
                    voluptatum recusandae ducimus.</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8" style="margin-top: 10px;">
              <el-card>
                <img src="@/assets/home/products/car.jpg" class="image">
                <div style="padding: 14px;">
                  <span>好吃的汉堡Lorem ipsum dolor sit Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Obcaecati sint,
                    illum architecto voluptates praesentium, iusto culpa eligendi 
                    voluptatum recusandae ducimus.</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
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
      pics: ['/_nuxt/assets/carousel/1.jpeg','/_nuxt/assets/carousel/2.jpeg','/_nuxt/assets/carousel/3.jpeg','/_nuxt/assets/carousel/4.jpeg']
    }
  }
}
</script>
