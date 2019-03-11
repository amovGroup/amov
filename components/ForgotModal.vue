<template>
  <div class="modal-backdrop forgotModal">
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
          <p>然后发送“主页改名+本人手机号+希望修改的密码”修改，如“主页改名+151****1234+123456”</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ForgotModal',
    data () {
      return { }
    },
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>
