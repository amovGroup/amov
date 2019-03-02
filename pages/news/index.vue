<template>
  <section class="container">
    <div class="max-width">
      <div class="news-detail">
        <el-tabs tab-position="left" @tab-click="clickTab">
          <el-tab-pane label="官方动态"><dynamics-list :list="dynamics"></dynamics-list></el-tab-pane>
          <el-tab-pane label="线下培训"><dynamics-list :list="evaluation"></dynamics-list></el-tab-pane>
          <!--<el-tab-pane label="测试评价"><dynamics-list :list="training"></dynamics-list></el-tab-pane>-->
  </el-tabs>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import CarouselList from '~/components/CarouselList.vue'
  import ProductList from '~/components/ProductList.vue'
  import NewsList from '~/components/NewsList'
  import DynamicsList from '~/components/DynamicsList'
  export default {
    components: {
      Logo, CarouselList, ProductList, NewsList, DynamicsList
    },
    async asyncData({ $axios }) {
      const dynamics = await $axios.$get('/api/news/dynamics?startPage=0&pageSize=10')
      const evaluation = await $axios.$get('/api/news/evaluation?startPage=0&pageSize=10')
      // const training = await $axios.$get('/api/news/training?startPage=0&pageSize=10')
      return { dynamics: dynamics.body.list, evaluation: evaluation.body.list}
    },
    data() {
      return {
        dynamics: [],
        evaluation: [],
        // training: []
      }
    },
    methods: {
      clickTab(tab, event) {
        //可能会加点东西
        var name = event.target.innerText
        var self = this
        if(name === "线下培训") {
          console.log(2)
        }
        else {
          console.log(1)
        }
      }
    }
  }
</script>
