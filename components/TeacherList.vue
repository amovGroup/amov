<template>
  <div class="course-teacher">
    <el-row :gutter="20">
      <el-col :span="6" v-for="item in teacherList" :key="item.teacherId">
        <el-card style="height: 27vw;overflow: scroll;" :body-style="{overflow: 'scroll'}">
          <img src="@/assets/course/profile.jpg">
          <p style="padding:10px;"><strong>{{item.name}}</strong></p>
          <p>{{item.intro}}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    props: ['teacherList']
  }
</script>

<style scoped>

</style>
