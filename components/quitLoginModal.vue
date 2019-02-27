<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <slot name="header">
          <button type="button" class="btn-close" @click="close()">x</button>
        </slot>
      </div>
      <div class="modal-body">
        <slot name="body"> 确定退出登录么？ </slot>
      </div>
      <div class="modal-footer">
        <slot name="footer">
          <button type="button" class="btn-green" @click="quitLogin()" style="background-color: red">是</button>
          <button type="button" class="btn-green close" @click="modalClose()" style="background-color: #bbb7b7">取消</button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import {get,post} from '~/plugins/axios'
  export default {
    name: 'quitLoginModal',
    data () {
      return { }
      },
    methods: {
      modalClose() {
        this.$emit('close')
      },
      close(){
        this.$emit('close')
      },
      quitLogin() {
        let cookie = document.cookie.replace(/\s+/g,"");
        let cookieArr = cookie.split(";");
        let jsonCookie = {}
        cookieArr.forEach((i) => {
          let arr = i.split("=");
          jsonCookie[arr[0]] =arr[1];
        });
        const cookies = jsonCookie.cache
        post('account/logout',cookies)
          .then(response => {
            console.log(response)
            if(response.data.status === 3){
              setCookie("cache", null, -1);
              setCookie("watch", null, -1);
              setCookie("username",null, -1);
              alert("退出登录成功");
              window.location.reload();
            }
            else{
              alert("退出登录失败，"+response.data.msg)
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  function  setCookie(name, value, day) {
    const expires = day * 24 * 60 * 60 * 1000;
      const date = new Date(+new Date().valueOf()+expires);
    if(day <0){
      if(name=="watch" || name=="cache"){
        document.cookie = name + "=" + escape(value) + "; expires= "+date+"; domain=.amovauto.com; path=/";
        return
      }
      document.cookie = name + "=" + escape(value) + "; expires= "+date;
      return
    }
    if(day !== 0){     //当设置的时间等于0时，不设置expires属性，cookie在浏览器关闭后删除
      
      document.cookie = name + "=" + escape(value) + "; expires=" + date;
    }else{
      document.cookie = name + "=" + escape(value);
    }
  }
</script>

<style scoped>

</style>
