<template>
      <div class="product">
        <el-row :gutter="20">
          <el-col :span="8" v-for="o in goodsList" :key="o.goodsId">
            <el-card :body-style="{margin: '1vw', padding: '1vw', height: '52vw'}" class="bgBox">
              <img src="../assets/course1.png" class="image" v-if="o.productId === 1">
              <img src="../assets/course2.png" class="image" v-if="o.productId === 2">
              <img src="../assets/course3.png" class="image" v-if="o.productId === 3">
              <div style="padding: 14px;margin-top: 50px">
                <div class="goods-title">
                    {{ o.title }}
                </div>
                <div class="goods-name">{{ o.name }}</div>
                <div class="goods-content">
                    {{ o.intro }}
                </div>
              </div>
              <div class="bottom clearfix">
                <div class="goods-btn">
                <el-button type="primary" class="button learn-more" @click="learnMore(o.url)" round>&nbsp;&nbsp;了解详情&nbsp;&nbsp;</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
</template>

<script>
export default {
    props: ["goodsList"],
    methods: {
        learnMore(idx) {
            // window.open("/product/"+idx, "_blank")
          window.open(idx,"_blank")
        }
    }
}
</script>

