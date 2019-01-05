<template>
  <section class="container">
    <div class="max-width">
      <carousel-list :pics="pics" :index="3"></carousel-list>
      <div class="news-detail">
        <el-row :gutter="50">
          <el-col :span=6>
            <div class="news-chapter">
              <el-card :body-style="{ padding: '0px' }" >
                <el-menu>
                  <el-menu-item index="1" class="news-banner" @click="clickButton(1)">
                              <span slot="title">
                                  <el-button type="text">官方动态</el-button>
                              </span>
                  </el-menu-item>
                  <el-menu-item index="1" class="news-banner" @click="clickButton(2)">
                              <span slot="title">
                                  <el-button type="text">线下培训</el-button>
                              </span>
                  </el-menu-item>
                  <el-menu-item index="1" class="news-banner" @click="clickButton(3)">
                              <span slot="title">
                                  <el-button type="text">测试评价</el-button>
                              </span>
                  </el-menu-item>
                </el-menu>
              </el-card>
            </div>
          </el-col>
          <el-col :span="18" style="display: block" id="part1">
            <div class="partName">
              <div>官方动态</div>
              <div style="margin-top: 5px">Official dynamics</div>
            </div>
            <div class="partContent">
              <dynamics-list :list="dynamicsList"></dynamics-list>
            </div>
          </el-col>
          <el-col :span="18" style="display: none" id="part2">
            <div class="partName">
                <div>线下培训</div>
                <div style="margin-top: 5px">Offline training</div>
            </div>
            <div class="partContent">
              <news-list title="最新课程" :list="newsList" :bodyStyle="{padding: '0px', 'background-color':'#fff'}"></news-list>
            </div>
          </el-col>
          <el-col :span="18" style="display: none" id="part3">
            <div class="partName">
              <div>测试评价</div>
              <div style="margin-top: 5px">Offline training</div>
            </div>
            <div class="partContent">
              <news-list title="最新课程" :list="newsList" :bodyStyle="{padding: '0px', 'background-color':'#fff'}"></news-list>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import CarouselList from '~/components/CarouselList.vue'
  import ProductList from '~/components/ProductList.vue'
  import NewsList from '~/components/NewsList'
  import dynamicsList from '~/components/dynamicsList'
  export default {
    components: {
      Logo, CarouselList, ProductList, NewsList, dynamicsList
    },
    async asyncData({ $axios }) {
      const json = await $axios.$post('/api/carousel/list', {location: 0})
      const image = await $axios.$get('/api/init/image')
      const goods = await $axios.$get('/api/goods/list')
      return { pics: json.body,image_url: image, goodsList:goods }
    },
    data() {
      return {
        newsList: [
          {name: "PIXHAWK二次开发培训", id:1,station:"北京站",time:"(9月22日~9月24日)"},
          {name: "PIXHAWK二次开发培训", id:2,station:"北京站",time:"(9月22日~9月24日)"},
          {name: "PIXHAWK二次开发培训", id:3,station:"北京站",time:"(9月22日~9月24日)"},
          {name: "PIXHAWK二次开发培训", id:4,station:"北京站",time:"(9月22日~9月24日)"},
          {name: "PIXHAWK二次开发培训", id:5,station:"北京站",time:"(9月22日~9月24日)"},
          {name: "PIXHAWK二次开发培训", id:6,station:"北京站",time:"(9月22日~9月24日)"}
        ],
        dynamicsList:[
          {title:"极飞C2000分析报告",time:"2018年11月6日",content:"极飞C2000分析报告 一．C2000介绍： 极飞在3 月 20 日春季发布会上发布了地理智能测绘无人机（XGeomatics C2000)。这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭",imgUrl:""},
          {title:"极飞C2000分析报告",time:"2018年11月6日",content:"极飞C2000分析报告 一．C2000介绍： 极飞在3 月 20 日春季发布会上发布了地理智能测绘无人机（XGeomatics C2000)。这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭",imgUrl:""},
          {title:"极飞C2000分析报告",time:"2018年11月6日",content:"极飞C2000分析报告 一．C2000介绍： 极飞在3 月 20 日春季发布会上发布了地理智能测绘无人机（XGeomatics C2000)。这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭",imgUrl:""},
          {title:"极飞C2000分析报告",time:"2018年11月6日",content:"极飞C2000分析报告 一．C2000介绍： 极飞在3 月 20 日春季发布会上发布了地理智能测绘无人机（XGeomatics C2000)。这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭",imgUrl:""},
          {title:"极飞C2000分析报告",time:"2018年11月6日",content:"极飞C2000分析报告 一．C2000介绍： 极飞在3 月 20 日春季发布会上发布了地理智能测绘无人机（XGeomatics C2000)。这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭这款应用于测绘领域的无人机，不仅能解决农业测绘的问题，还标志着极飞在农业领域的第一个技术闭",imgUrl:""}
        ]
      }
    },
    methods: {
      clickButton(n){
        let part1 = document.getElementById('part1'),
          part2 = document.getElementById('part2'),
          part3 = document.getElementById('part3');
        switch (n) {
          case 1:
            clickButt(part1,part2,part3);
            break;
          case 2:
            clickButt(part2,part3,part1);
            break;
          case 3:
            clickButt(part3,part1,part2);
            break;
        }
      }
    },
  }

  function clickButt(x,y,z){
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
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
  }
</style>
