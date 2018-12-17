<template>
  <section class="container">
    <div class="max-width">
      <carousel-list :pics="pics" :index="1"></carousel-list>
      <div class="hardware">
        <h3>硬件平台</h3>
        <hr class="hr-line" size="10" />
        <product-list :productList="hardware"></product-list>
      </div>
      <div class="other-hardware">
        <h3>周边硬件平台</h3>
        <hr class="hr-line" size="10" />
        <product-list :productList="peripheral"></product-list>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import CarouselList from '~/components/CarouselList.vue'
import ProductList from '~/components/ProductList.vue'
export default {
  components: {
    Logo, CarouselList, ProductList
  },
  async asyncData({ $axios }) {
    const json = await $axios.$post('/api/carousel/list', {location: 0})
    const hardware = await $axios.$get('/api/product/hardware/list')
    const peripheral= await $axios.$get('/api/product/peripheral/list')
    for (var i =0; i < hardware.body.length; i++) {
      hardware.body[i].hover = false;
    }
    for (var i =0; i <peripheral.body.length; i++) {
      peripheral.body[i].hover = false;
    }
    return { pics: json.body, hardware:hardware.body, peripheral:peripheral.body }
  },
  data() {
    return {
      pics: [],
      hardware: [],
      peripheral: []
    }
  },
  computed: {
  }
}
</script>
