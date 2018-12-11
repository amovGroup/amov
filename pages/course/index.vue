<template>
    <section class="container">
        <div class="max-width">
            <div class="course-card">
                <el-card class="card" :body-style="{ padding: '0px' }">
                    <div class="bk1">
                        <el-menu
                            default-active="2"
                            class="course-banner-menu"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <el-menu-item index="1" class="course-banner">
                                <i class="el-icon-menu" ></i>
                                <span slot="title">导航一</span>
                            </el-menu-item>
                            <el-menu-item index="2" class="course-banner">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="4" class="course-banner">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </div>
                    <div class="bk2">
                        <el-carousel class="course-banner-carousel">
                            <el-carousel-item v-for="item in 3" :key="item" style="height:100%;">
                                <h3>{{ item }}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </el-card>
            </div>
            <div style="background-color: #fff; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="最新课程" :list="courseList" :bodyStyle="{padding: '0px', 'background-color':'#fff'}"></course-list>
            </div>
            <div style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="初级课程" :list="courseList" :bodyStyle="{padding: '0px', 'background-color':'#f0f0f0'}"></course-list>
            </div>
            <div style="background-color: #fff; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="中级课程" :list="courseList" :bodyStyle="{padding: '0px', 'background-color':'#fff'}"></course-list>
            </div>
            <div style="background-color: #f0f0f0; padding-top: 20px; padding-bottom: 20px;">
                <course-list title="高级课程" :list="courseList" :bodyStyle="{padding: '0px', 'background-color':'#f0f0f0'}"></course-list>
            </div>
            <div class="course-tutor">
                <div class="course-teacher">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <el-card style="height: 27vw;overflow: scroll;" :body-style="{overflow: 'scroll'}">
                                <img src="@/assets/course/profile.jpg">
                                <p style="padding:10px;"><strong>名字</strong></p>
                                <p>正文介绍很长的那种Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet facilis similique non reiciendis, delectus obcaecati, id neque, rerum officia recusandae tempore.</p>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card style="height: 27vw;overflow: scroll;" :body-style="{overflow: 'scroll'}">
                                <img src="@/assets/course/profile.jpg">
                                <p style="padding:10px;"><strong>名字</strong></p>
                                <p>正文介绍很长的那种Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet facilis similique non reiciendis, delectus obcaecati, id neque, rerum officia recusandae tempore.</p>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card style="height: 27vw;overflow: scroll;" :body-style="{overflow: 'scroll'}">
                                <img src="@/assets/course/profile.jpg">
                                <p style="padding:10px;"><strong>名字</strong></p>
                                <p>正文介绍很长的那种Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet facilis similique non reiciendis, delectus obcaecati, id neque, rerum officia recusandae tempore.</p>
                            </el-card>
                        </el-col>
                        <el-col :span="6">
                            <el-card style="height: 27vw;overflow: scroll;" :body-style="{overflow: 'scroll'}">
                                <img src="@/assets/course/profile.jpg">
                                <p style="padding:10px;"><strong>名字</strong></p>
                                <p>正文介绍很长的那种Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet facilis similique non reiciendis, delectus obcaecati, id neque, rerum officia recusandae tempore.</p>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CourseList from '@/components/CourseList'
export default {
    components: {
        CourseList
    },

    data () {
        return {
            courseList: [
                {"name": "最新课程1", "id":1},
                {"name": "最新课程2", "id":2},
                {"name": "最新课程3", "id":3},
                {"name": "最新课程4", "id":4},
                {"name": "最新课程5", "id":5},
                {"name": "最新课程6", "id":6}
            ],
        }
    }
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
    background-color: brown;
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
	color: #ee3617;
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
</style>
