<template>
  <section class="container">
    <div class="max-width">
      <div class="aboutus">
        <div>
          <div class="bk-top"></div>
          <div class="bk-bottom"></div>
        </div>
        <div class="about-card">
          <el-card style="text-align: left;text-indent: 2em">
            阿木实验室，让研发更高效！当前，我们致力于为广大研究所，高校，初创公司团队提供前沿技术培训，研发型社区打造，以及硬件研发平台。从2016年开始，先后在全国举办线下培训超过60场，培训人数超1000人，覆盖行业内高价值人群5000人以上。与中国科学技术研究院，北京航空航天大学，西北工业大学，国防科技大学建立了广泛的技术培训及业务联系。
            2019年，我们将重新杨帆启航，隆重推出无人机大课程，高端视觉无人机P100以及Reactor飞控等重量级产品，敬请期待！
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

