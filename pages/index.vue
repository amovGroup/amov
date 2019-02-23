<template>
  <section class="container">
    <div class="max-width">
      <carousel-list :pics="pics" :index="0"></carousel-list>
      <div class="intro">
        <img :src="image_url" alt="f" class="photo">
      </div>
      <goods-list :goodsList="goodsList"></goods-list>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CarouselList from '~/components/CarouselList.vue'
import GoodsList from '~/components/GoodsList.vue'
export default {
  components: {
    Logo,
    CarouselList,
    GoodsList
  },
  async asyncData({ $axios }) {
    const json = await $axios.$post('/api/carousel/list', {location: 0})
    const image = await $axios.$get('/api/init/image')
    const goods = await $axios.$get('/api/goods/list')
    return { pics: json.body, image_url: image, goodsList:goods }
  },
  data() {
    return {
      pics: [],
      image_url: "~/assets/home/family.jpg",
      goodsList: [{name:"123"}, {name:"123"}, {name:"123"}]
    }
  }
}
</script>
