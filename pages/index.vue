<template>
  <section class="container">
    <div class="max-width">
      <carousel-list :pics="pics" :index="0"></carousel-list>
      <div class="intro">
        <!--<img :src="image_url" alt="f" class="photo">-->
        <embed src='http://player.youku.com/player.php/sid/XMzg5MzUzODU1Ng==/v.swf' allowFullScreen='true' quality='high' width='850' height='600' align='middle' allowScriptAccess='always' type='application/x-shockwave-flash' />
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
    const json = await $axios.$post('/api/carousel/list');
    const image = await $axios.$get('/api/init/image');
    return { pics: json.body, image_url: image }
  },
  data() {
    return {
      pics: [],
      image_url: "~/assets/home/family.jpg",
      // goodsList: [{name:"123"}, {name:"123"}, {name:"123"}],
      goodsList:[{productId:1,title:"Prometheus100",intro:"“Prometheus100”是阿木实验室推出的一款专注于专注于无人机二次开发的硬件平台，具备高扩展能力机架，可同时搭载多种二次开发设备。此开发平台也同时配备了激光雷达、GPU板卡、摄像头、超声波模块等，实现了基础的视觉跟踪、图像识别、室内定位及避障能力。飞行控制系统采用PX4的开源构架，同时提供通信、控制（位置控制、姿态控制、速度控制）、YOLO-V3深度学习框架、Google Cartographer等源码Demo。为广大无人机开发者提供一套相对完善的开发平台，以供大家学习和研究。",url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-18545444955.3.1b8b6fdbcjTlDf&id=579850930835"},
        {productId:2,title:"Pioneer避障无人车",intro:"“Pioneer避障无人车”是阿木实验室推出的专注于无人车二次开发的硬件平台，足够大的车架保证可同时搭载多种二次开发设备。此开发平台也同时配备了激光雷达、厘米级千寻定位等，实现了自动巡航，激光雷达避障，多传感器融合，厘米级定位等多种功能。并开放了位置控制接口，地面站系统等多种能力。为广大无人机开发者提供一套相对完善的开发平台，以供大家学习和研究。",url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-18433176671.3.4cbc6fdb2JRcjt&id=574237150420"},
        {productId:3,title:"July无人船开发平台",intro:"“July无人船开发平台”是阿木实验室推出的一款专注于无人船二次开发的硬件平台，该款无人船开发套件是具备自动巡航并且适配有完整的地面站系统的开发平台。主要硬件包括：PIXHAWK控制板一套，遥测数传一套，差速转向船体一套，动力与检测系统一套，GPS导航设备一套。我们提供完整的开发环境和开发例程，可以迅速帮助大家搭建一套无人船控制系统。并且可以提供完整的上位机地面站和下位机控制软件。客户利用我们的的Demo例程上手开发工作，会事半功倍，更加去专注于算法的开发，让研发更高效。",url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w5003-19079448664.3.4bf26fdbD7WPLE&id=565964182479&scene=taobao_shop"}]
    }
  }
}
</script>
