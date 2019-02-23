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
            <pre class="news-content">{{news.newsInfo.body}}</pre>
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
  .news-title{
    font-size: 26px;
    font-weight: bold;
  }
  .news-info{
    margin: 15px auto;
    font-size: 14px;
    text-align: left;
  }
  .news-content{
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
    padding: 10px 20px;
    line-height: 26px;
  }
</style>
