<template>
  <section class="container">
    <div class="max-width">
      <carousel-list :pics="pics" :index="2"></carousel-list>
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
import CarouselList from '~/components/CarouselList.vue'
export default {
  components: {
    Logo, CarouselList
  },
  async asyncData({ $axios }) {
    const json = await $axios.$post('/api/carousel/list', {location: 0})
    const image = await $axios.$get('/api/init/image')
    return { pics: json.body, image_url: image }
  },
  data() {
    return {
      pics: []
    }
  }
}
</script>
