<template>
  <section class="container">
    <div class="max-width">
      <div class="course-detail">
        <div class="course-learn">
          <el-card>
            <div class="news-title">{{news.news.title}}</div>
            <div class="news-info">
              <span style="position: absolute;margin-left: 23vw;">作者：{{news.news.editorName}}</span>
              <span style="margin-left: 35vw;">发布时间：{{news.news.createTime}}</span>
            </div>
            <div v-html="news.newsInfo.body"></div>
          </el-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    async asyncData({$axios,params}){
      const news = await $axios.get('/api/news/' + params.id);
      return {news:news.data.body,params:params}
    },
    data() {
      return {
        news:[]
      }
    },
    methods: { },
    components: { }
  }
</script>
<style>

</style>
