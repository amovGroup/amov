<template>
  <div class="modal-backdrop forgotModal" v-if="show">
    <div class="modal">
      <div class="modal-header">
        <slot name="header">
          <button type="button" class="btn-close" @click="close()">x</button>
        </slot>
      </div>
      <div class="modal-body">
        <slot name="body">
          <p>请先关注微信公众号</p>
          <img src="~/assets/home/qrcode.jpg" alt="">
        </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <p>然后发送“主页改名+本人手机号+希望修改的密码”修改，如“主页改名+151****1234+123456”，如无回复，请联系电话/微信：18380289240</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:['show'],
    name: 'ForgotModal',
    data () {
      return { }
    },
    methods: {
      close(){
      this.$emit('update:show', false)
      }
    }
  }
</script>

<style scoped>

</style>
