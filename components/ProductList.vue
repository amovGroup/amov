<template>
    <div>
        <el-row :gutter="20">
        <el-col :span="8" v-for="item in productList" :key="item.productId">
            <!--<nuxt-link :to="'/product/'+item.productId">-->
          <a @click="goProductUrl(item.intro)" style="cursor: pointer">
            <div class="product-item">
            <!--<div class="product-abstract" :class="{'product-abstract-hover': item.hover}" @mouseleave="leaveProduct($event, item)">-->
              <div class="product-abstract">
                <div class="product-abstract-title">{{item.title}}</div>
                <div class="product-abstract-content">{{item.intro}}</div>
            </div>
            <!--<div class="product-card" @mouseenter="overProduct($event, item)" >-->
              <div class="product-card">
            <el-card>
                <img :src="item.profileUrl" class="image">
                <div style="padding: 14px;">
                <span>{{item.title}}</span>
                </div>
            </el-card>
            </div>
            </div>
          </a>
            <!--</nuxt-link>-->
        </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  props: ['productList'],
  methods: {
    overProduct(e, obj) {
      obj.hover = true
    },
    leaveProduct(e, obj){ 
      obj.hover = false
    },
    goProductUrl(x){
      window.open(x)
    }
  },
}
</script>
