<template>
<div>
   <div class="logo">
   <img src="~/assets/logo/logo_white.png" alt="logo" class="logo">
    </div>
  <div v-swiper:mySwiper="swiperOption" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide swiper-item" v-for="banner in banners" :key="banner" v-bind:style="{backgroundImage:'url(' + banner + ')'}">
        <!-- <img src="../static/images/sign_bg/1.jpg"> -->
        <!-- {{banner}} -->
      </div>
    </div>
  </div>
</div>


</template>
<script>
export default {
  data() {
    return {
      banners: ['/_nuxt/static/images/sign_bg/1.jpg'],
      swiperOption: {
        loop: true,
        effect:'fade',
        slidesPerView: 'auto',
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: true,
          },
        centeredSlides: true,
        on: {
          slideChange() {
            // console.log('onSlideChangeEnd', this)
          },
          tap() {
            // console.log('onTap', this)
          }
        }
      }
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
 .logo {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 1;
    img {
      height: 50px;
      width: auto;
    }
  }
.swiper {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 0;
  .swiper-item {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 0;
    background-image: url('~static/images/sign_bg/1.jpg');
  }
}
</style>
