<template>
    <div>
        <h3>
            <span class="el-icon-star-off"></span>
            <span class="el-icon-star-on"></span>
            <strong>{{title}}</strong>
            <span class="el-icon-star-on"></span>
            <span class="el-icon-star-off"></span>
        </h3>
        <div class="course-list">
            <el-row :gutter="20">
                <el-col :span="6" v-for="item in list" :key="item.id" style="margin-top: 10px;margin-bottom: 10px;">
                    <a href="https://shop142114972.taobao.com/" target="_blank" style="text-decoration: none;">
                        <el-card shadow="never" style="border: none;" :body-style="bodyStyle">
                            <div class="course-img"></div>
                            <div class="course-name">
                                {{item.name}}
                            </div>
                            <div class="course-class">课程分类 <span><i class="el-icon-view"></i>1234</span></div>
                            <div class="course-price">¥899 <span class="course-note">(包括开发环境)</span></div>
                        </el-card>
                    </a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    props: ['bodyStyle', 'title', 'list']

}
</script>

