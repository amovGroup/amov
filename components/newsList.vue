<template>
  <div>
    <div class="news-list">
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in list" :key="item.id" style="margin-top: 10px;margin-bottom: 10px;" class="newsList">
          <a :href="'/news/'+item.id" target="_blank" style="text-decoration: none;color: black;font-size: 14px;">
            <div class="outBox">
              <div class="imgBox">
                <img src="~assets/news/newsPic.png" alt="" class="news-img">
              </div>
              <div class="textBox">
                <div class="news-name" style="font-weight: bold">
                  {{item.name}}
                </div>
                <div class="news-station">
                  {{item.station}}
                </div>
                <div class="news-time" style="margin-top: 10px;font-size: 12px;">
                  {{item.time}}
                </div>
              </div>
            </div>
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

