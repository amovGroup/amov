<template>
  <section class="container">
    <div class="max-width">
      <div class="aboutus">
        <div>
          <div class="bk-top"></div>
          <div class="bk-bottom"></div>
        </div>
        <div class="about-card">
          <el-card>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ullam, reiciendis? Molestiae ex magni quas, aspernatur error,
            sapiente facilis expedita provident cum dignissimos odio obcaecati
            natus officiis nesciunt. Corporis voluptas assumenda dolorum adipisci
            nulla natus voluptates repellendus aliquid minus hic iusto culpa vitae,
            cupiditate ad nesciunt aliquam voluptatibus maxime deleniti 
            dolorem nobis distinctio nihil! Expedita eos quidem accusantium ullam repudiandae!
          </el-card>
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

