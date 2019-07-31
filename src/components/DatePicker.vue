<template>
  <div tapmode id="dataPicker">
    <div>
      <a href="javascript:;" class='weui-btn weui-btn_default setAuthtimeBtn' tapmode @click="openActionsheet()">授权设置</a>
    </div>
    <!--BEGIN actionSheet-->
    <div>
    <div class="weui-mask" id="iosMask" style="opacity: 0; display: none;"></div>
    <div :class=Toggle id="iosActionsheet">
      <!--  Toggle: weui-actionsheet_toggle -->
        <div class="weui-actionsheet__title">
            <p class="weui-actionsheet__title-text">授权时间</p>
        </div>
        <div class="weui-actionsheet__menu">
            <div class="weui-actionsheet__cell" @click="handlePickDays(1)">一天</div>
            <div class="weui-actionsheet__cell" @click="handlePickDays(3)">三天</div>
            <div class="weui-actionsheet__cell" @click="handlePickDays(5)">五天</div>
            <div class="weui-actionsheet__cell" style="text-align:left">
              <div class="weui-flex">
                <div class="weui-flex__item">
                  <input class="weui-input" dir="rtl" type="number" v-model="inputAuthday"/>
                </div>
                <div class="weui-flex__item">
                  天
                </div>
              </div>
            </div>
        </div>
        <div class="weui-actionsheet__action">
            <div class="weui-flex">
              <div class="weui-flex__item">
                <div class="weui-actionsheet__cell" @click="submitActionsheet()">确认</div>
              </div>
              <div class="weui-flex__item">
                <div class="weui-actionsheet__cell" @click="closeActionsheet()">取消</div>
              </div>
            </div> 
        </div>
    </div>
    </div>
    <!--END actionSheet-->
  </div>
</template>

<script>
  export default{
    data(){
      return {
        Toggle:"weui-actionsheet",
        inputAuthday:null,
        authDays:0
      }
    },
    methods:{
      handlePickDays(days){
        this.authDays = days;
      },
      openActionsheet(){
        // let iosMask = document.getElementById("iosMask");
        // iosMask.fadeOut(200);
        this.authDays = 0;
        this.inputAuthday = null;
        this.Toggle = "weui-actionsheet weui-actionsheet_toggle";
      },
      closeActionsheet(){
        // let iosMask = document.getElementById("iosMask");
        // iosMask.fadeIn(200);
        this.authDays = 0;
        this.inputAuthday = null;
        this.Toggle = "weui-actionsheet";
      },
      submitActionsheet(){
        if(this.inputAuthday!=null){
          this.authDays = this.inputAuthday;
        }
        this.Toggle = "weui-actionsheet";
        this.$emit('sendAuthDate', this.authDays)
      }
    },
    mounted(){
    }
  }
</script>
<style>
#dataPicker > div > a{
  font-size: 20px;
}
</style>
