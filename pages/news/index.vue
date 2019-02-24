<template>
  <section class="container">
    <div class="max-width">
      <div class="news-detail">
        <el-tabs tab-position="left" @tab-click="clickTab">
          <el-tab-pane label="官方动态"><dynamics-list :list="dynamics"></dynamics-list></el-tab-pane>
          <el-tab-pane label="线下培训"><dynamics-list :list="evaluation"></dynamics-list></el-tab-pane>
          <el-tab-pane label="测试评价"><dynamics-list :list="training"></dynamics-list></el-tab-pane>
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
      const training = await $axios.$get('/api/news/training?startPage=0&pageSize=10')
      return { dynamics: dynamics.body.list, evaluation: evaluation.body.list, training: training.body.list}
    },
    data() {
      return {
        dynamics: [],
        evaluation: [],
        training: []
      }
    },
    methods: {
      clickTab(tab, event) {
        //可能会加点东西
        var name = event.target.innerText
        var self = this
        if(name === "线下培训") {
          console.log(2)
        } else if(name === "测试评价") {
          console.log(3)
        } else {
          console.log(1)
        }
      }
    }
  }
</script>
<style>
  .newsList{
    width: 16.5vw;
  }
  .news-img{
    border-radius: 7px 7px 0 0;
    width: 100%;
  }
  .outBox{
    box-shadow: 0 0 15px #969595;
    border-radius: 7px;
  }
  .newsList .textBox{
    padding: 10px 0 15px;
  }
  .dynamicsList .imgBox{
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 180px;
  }
  .dynamicsList .dynamics-img{
    width: 170px;
    height: 120px;
  }
  .dynamicsList .textBox {
    width: calc(100% - 200px);
    margin-left: 200px;
    height: 135px;
    font-size: 12px;
    display: -webkit-box;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical;
    /* autoprefixer: on */
    -webkit-line-clamp: 3;
    overflow: hidden;
    padding-top: 10px;
  }
  .dynamicsList .textBox>p{
    line-height: 20px;
  }
  .dynamicsList .btnBox{
    padding-bottom: 10px;
    width: calc(100% - 200px);
    margin: 0;
    margin-left: 200px;
    padding-top: 10px;
  }
  .dynamicsList .urlBtn{
    width: 85px;
    height: 25px;
    border: 0;
    border-radius: 13px;
    background-color: #5175EA;
    color: white;
    margin-left: calc(100% - 110px);
    cursor: pointer;
    padding-top: 0;
  }
</style>
