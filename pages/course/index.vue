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
                            <el-menu-item index="1" class="course-banner" @click="setActiveItem(0)" ref="menuItemCourse0">
                                <span slot="title">{{pics[0].title}}</span>
                            </el-menu-item>
                            <el-menu-item index="2" class="course-banner" @click="setActiveItem(1)" ref="menuItemCourse1">
                                <span slot="title">{{pics[1].title}}</span>
                            </el-menu-item>
                            <el-menu-item index="3" class="course-banner" @click="setActiveItem(2)" ref="menuItemCourse2">
                                <span slot="title">{{pics[2].title}}</span>
                            </el-menu-item>
                        </el-menu>
                    </div>
                    <div class="bk2">
                        <el-carousel class="course-banner-carousel" @change="changeCarousel($event)" ref="carouselCourse">
                            <el-carousel-item v-for="item in pics" :key="item.carouselId" style="height:100%;" >
                              <a :href="item.destinationUrl" target="_blank"><img :src="item.imageUrl" :alt="item.title" class="course-carousel"></a>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-card>
            </div>
            <div id="latest" style="background-color: #fff; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="最新课程" :list="latest" :bodyStyle="{padding: '0px', 'background-color':'#fff'}" :rank="1"></course-list>
            </div>
            <div id="elementary" style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="初级课程" :list="elementrary" :bodyStyle="{padding: '0px', 'background-color':'#f0f0f0'}" :rank="2"></course-list>
            </div>
            <div id="intermediate" style="background-color: #fff; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="中级课程" :list="intermediate" :bodyStyle="{padding: '0px', 'background-color':'#fff'}" :rank="3"></course-list>
            </div>
            <div id="advanced" style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="高级课程" :list="advanced" :bodyStyle="{padding: '0px', 'background-color':'#f0f0f0'}" :rank="4"></course-list>
            </div>
            <div class="course-tutor">
                <teacher-list :teacherList="teacher"></teacher-list>
            </div>
        </div>
    </section>
</template>
<script>
import CourseList from '@/components/CourseList'
import TeacherList from '@/components/TeacherList'
export default {
  components: {
    CourseList,TeacherList
  },
  async asyncData({ $axios }) {
    const latest = await $axios.$get('/api/course/latest')
    const elementrary = await $axios.$get('/api/course/elementary')
    const intermediate = await $axios.$get('/api/course/intermediate')
    const advanced = await $axios.$get('/api/course/advanced')
    const teacher = await $axios.$get('/api/course/teacher/list')
    const pics = await $axios.$get('/api/carousel/course/list')
    return {latest: latest.body, elementrary: elementrary.body, intermediate: intermediate.body, advanced: advanced.body, teacher: teacher.body, pics: pics.body}
  },
  data () {
    return {
      latest:[],
      elementrary: [],
      intermediate: [],
      advanced: [],
      teacher: [],
      pics: []
    }
  },
  methods:{
    setActiveItem(x) {
      this.$refs.carouselCourse.setActiveItem(x)
    },
    changeCarousel(e) {
      if(e == 0) {
        this.$refs.menuItemCourse0.$el.click()
      } else if (e == 1) {
        this.$refs.menuItemCourse1.$el.click()
      } else {
        this.$refs.menuItemCourse2.$el.click()
      }
    }
  }
}
</script>


