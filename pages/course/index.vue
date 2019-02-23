<template>
    <section class="container">
        <div class="max-width">
            <div class="course-card">
                <el-card class="card" :body-style="{ padding: '0px' }">
                    <div class="bk1">
                        <el-menu
                            default-active="1"
                            class="course-banner-menu"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-menu-item index="1" class="course-banner" @click="slideshowChange(1)">
                                <i class="el-icon-menu" ></i>
                                <span slot="title">导航一</span>
                            </el-menu-item>
                            <el-menu-item index="2" class="course-banner" @click="slideshowChange(2)">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="4" class="course-banner" @click="slideshowChange(3)">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </div>
                    <div class="bk2">
                        <el-carousel class="course-banner-carousel">
                            <el-carousel-item v-for="(item,index) in slideshow" :key="item.carouselId" :id="'slideshow'+index" style="height:100%;" >
                              <img :src="item.imageUrl" :alt="item.title">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-card>
            </div>
            <div style="background-color: #fff; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="最新课程" :list="courseList1" :bodyStyle="{padding: '0px', 'background-color':'#fff'}" :rank="1"></course-list>
            </div>
            <div style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="初级课程" :list="courseList2" :bodyStyle="{padding: '0px', 'background-color':'#f0f0f0'}" :rank="2"></course-list>
            </div>
            <div style="background-color: #fff; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="中级课程" :list="courseList3" :bodyStyle="{padding: '0px', 'background-color':'#fff'}" :rank="3"></course-list>
            </div>
            <div style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="高级课程" :list="courseList4" :bodyStyle="{padding: '0px', 'background-color':'#f0f0f0'}" :rank="4"></course-list>
            </div>
            <div class="course-tutor">
                <teacher-list :teacherList="teacherList"></teacher-list>
            </div>
        </div>
    </section>
</template>
<script>
import CourseList from '@/components/CourseList'
import TeacherList from '@/components/TeacherList'
export default {
  async asyncData({ $axios }) {
    const latest = await $axios.get('/api/course/latest')
    const elementrary = await $axios.get('/api/course/elementary')
    const intermediate = await $axios.get('/api/course/intermediate')
    const advanced = await $axios.get('/api/course/advanced')
    const teacher = await $axios.get('/api/course/teacher/list')
    const pics = await $axios.get('/api/carousel/course/list')
    return {latest: latest, elementrary: elementrary, intermediate: intermediate, advanced: advanced, teacher: teacher, pics: pics}
  },
  components: {
    CourseList,TeacherList
  },
  data () {
    return {
      latestList:[],
      elementrary: [],
      intermediate: [],
      advanced: [],
      teacher: [],
      pics: []
    }
  },
  methods:{
    //左边按钮控制轮播图显示函数
    slideshowChange(x){
      let slideshow0 = document.getElementById('slideshow0'),
        slideshow1 = document.getElementById('slideshow1'),
        slideshow2 = document.getElementById('slideshow2');
      switch (x) {
        case 1:
          slideshowTurn(slideshow0,slideshow1,slideshow2)
          break;
        case 2:
          slideshowTurn(slideshow1,slideshow2,slideshow0);
          break;
        case 3:
          slideshowTurn(slideshow2,slideshow0,slideshow1);
          break;
      }
    }
  }
}
//左边按钮控制轮播图显示函数
function slideshowTurn(x,y,z){
    x.classList.add("is-active","is-animating");
    y.classList.remove("is-active","is-animating");
    z.classList.remove("is-active");x.classList.add("is-animating");
    x.setAttribute("style","transform: translateX(0px) scale(1);height: 100%;");
    y.setAttribute("style","transform: translateX(732px) scale(1);height: 100%;");
    z.setAttribute("style","transform: translateX(-732px) scale(1);height: 100%;");
}
//封装axios函数，返回课程分类中需要的数据
function getCourseDate(url){
  let val = [];
  axios(url)
    .then(function(data){
      let datum = data.data.body;
      for(let k in datum){
        val.push(datum[k])
      }
    })
    .catch(function(error) {
        console.log(error)
    });
  return val;
}
</script>


<style>
.bk1 {
    background-color:aqua;
    height: 31vw;
    width: 13vw;
    float: left;
    max-width: 240px;
}
.bk2 {
    /*background-color: brown;*/
    height: 31vw;
    float: left;
    width: calc(100% - 13vw);

}
.course-banner {
    height: calc(100% / 3);
}

.course-banner-menu {
    height:100%;
}

.course-banner-carousel {
    height: 31vw;
    z-index: 0;
}

.course-img {
    background-color: #f0f0f0;
    border-radius: 20px;
    width: 100%;
    height: calc(50vw / 4);
}
.course-name, .course-class, .course-price, .course-note {
    text-align: left;
	font-family: MicrosoftYaHei;
	font-weight: normal;
    font-stretch: normal;
    padding: 5px;
}

.course-name {
	font-size: 18px;
	letter-spacing: 0.9px;
	color: #333333;
}

.course-class {
	font-size: 16px;
	letter-spacing: 0.8px;
	color: #666666;
}

.course-price {
	font-size: 18px;
	letter-spacing: 0.9px;
	/*color: #ee3617;*/
}

.course-note {
	font-size: 14px;
	letter-spacing: 0.7px;
	color: #666666;
}


.card {
    max-height: 600px;
    border-radius: 20px;
}
.el-card__body{
  overflow: hidden !important;
}
  .el-carousel__item>img{
    width: 100%;
    height: 100%;
  }
</style>
