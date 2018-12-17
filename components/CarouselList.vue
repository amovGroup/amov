<template>
    <div class="sowing-map">
    <el-carousel :interval="5000" :initial-index="index"	arrow="always" class="banner">
        <el-carousel-item v-for="item in pics" :key="item.carouselId">
        <img v-bind:src="item.imageUrl" :alt="item.title" :title="item.title" class="carousel">
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
}
</script>
