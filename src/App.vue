<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){
    let requrl = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4799e20a50916514&redirect_uri=rdit.com.cn:4578&response_type=code&scope=snsapi_base#wechat_redirect"
    this.$axios.post(requrl)
    .then((response)=>{
        this.openid = response;
        window.console.log(response);
    }).catch(function (response){
        window.console.log(response);
    });
  },
  beforeMount(){
    window.console.log("beforemount")
  },
  mounted(){
    this.$router.push("/");
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
