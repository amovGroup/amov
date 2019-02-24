<template>
  <div>
    <div class="dynamics-list">
      <el-row :gutter="20">
        <el-col :span="24" v-for="item in list" :key="item.newsId" style="margin-top: 10px;margin-bottom: 10px;" class="dynamicsList">
          <div class="outBox" style="text-align: left">
            <div class="imgBox">
              <img src="../static/images/dynamicsBg.png" alt="" class="dynamics-img">
            </div>
            <div class="textBox">
              <p style="font-weight: bold;font-size: 14px">{{item.title}}</p>
              <p style="font-size: 12px;padding: 5px 0">{{item.createTime}}</p>
              <p style="font-size: 12px;max-height:100px;overflow: hidden;text-overflow: ellipsis;}">{{item.content}}</p>
            </div>
            <div class="btnBox">
              <button class="urlBtn" @click="goUrl(item.newsId)">了解详情</button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['list'],
    methods:{
      goUrl(params){
        window.open('/news/' + params, "_blank");
      }
    }
  }
</script>

