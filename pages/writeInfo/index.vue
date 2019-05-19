<style lang="sass" scoped>
@import './writeInfo.scss'
</style>

<template>
    <div class="writeInfoPage">
        <img class="headerImage" src="" alt="">
        <div class="infoBox">
            <div class="tagWord">为了给你提供更好的服务请</div>
            <div class="title">完善您的信息</div>
            <mu-select v-model="form.select" class="selectType" placeholder="组织类型" solo>
                <mu-option v-for="(option,index) in options" :key="option" :label="index" :value="option"></mu-option>
            </mu-select>
            <input type="text" placeholder="组织名字">
            <input type="text" placeholder="职位">
            <input type="text" placeholder="名字">
            <input type="text" placeholder="联系方式">
            <mu-button class="registerButton">注册</mu-button>
            <div class="toLogin">已有帐号,点击登录</div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      }
    }
  }
};
</script>