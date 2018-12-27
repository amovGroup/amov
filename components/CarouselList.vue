<template>
    <div class="sowing-map">
    <el-carousel :interval="5000" :initial-index="index"	arrow="always" class="banner">
        <el-carousel-item v-for="item in pics" :key="item.carouselId">
          <a @click="printItem(item.carouselId)" style="cursor: pointer"><img v-bind:src="item.imageUrl" :alt="item.title" :title="item.title" class="carousel"></a>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
export default {
  props: ["pics", "index"],
  async asyncData({ $axios }) {
    const json = await $axios.$post('/api/carousel/list', {location: 0})
    return { pics: json.body }
  },
  methods:{
    printItem(carouselId){
      if (process.browser) {
        switch(carouselId){
          case 1:window.location.href = '/';break;
          case 2:window.location.href = '/product';break;
          case 3:window.location.href = '/news';break;
          case 4:window.location.href = '/software';break;
        }
      }
    }
  }
}
</script>
