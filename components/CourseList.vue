<template>
    <div>
        <h3 v-show="rank == 1">
            <span class="el-icon-point-left point1"></span>
            <span class="el-icon-star-left star1"></span>
            <strong>{{title}}</strong>
            <span class="el-icon-star-right star1"></span>
            <span class="el-icon-point-right point1"></span>
        </h3>
        <h3 v-show="rank == 2">
            <span class="el-icon-point-left point2"></span>
            <span class="el-icon-star-left star2"></span>
            <strong>{{title}}</strong>
            <span class="el-icon-star-right star2"></span>
            <span class="el-icon-point-right point2"></span>
        </h3>
        <h3 v-show="rank == 3">
            <span class="el-icon-point-left point3"></span>
            <span class="el-icon-star-left star3"></span>
            <strong>{{title}}</strong>
            <span class="el-icon-star-right star3"></span>
            <span class="el-icon-point-right point3"></span>
        </h3>
        <h3 v-show="rank == 4">
            <span class="el-icon-point-left point4"></span>
            <span class="el-icon-star-left star4"></span>
            <strong>{{title}}</strong>
            <span class="el-icon-star-right star4"></span>
            <span class="el-icon-point-right point4"></span>
        </h3>
        <div class="course-list">
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in list" :key="item.id" style="margin-top: 10px;margin-bottom: 10px;">
                    <!--<a href="https://shop142114972.taobao.com/" target="_blank" style="text-decoration: none;">-->
                  <a :href="'/course/'+item.courseId" target="_blank" style="text-decoration: none;">
                        <el-card shadow="never" style="border: none;" :body-style="bodyStyle">
                            <div class="course-img">
                              {{item.profileUrl}}
                            </div>
                            <div class="course-name">
                                {{item.title}}
                            </div>
                            <div class="course-class">{{item.classify}} <span><i class="el-icon-view"></i>1234</span></div>
                            <div class="course-price">¥{{item.price}} <span class="course-note">{{item.extraIntro}}</span></div>
                        </el-card>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    props: ['bodyStyle', 'title', 'list', 'rank']
}
</script>

