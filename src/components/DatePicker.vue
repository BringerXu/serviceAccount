<template>
  <div>
    <el-button id="showDatePicker" @click="handleDatePicker">{{authTime.year}}年{{authTime.month}}月{{authTime.date}}日</el-button>
    <!-- <a href="javascript:;" class="weui-cell" ></a> -->
    
  </div>
</template>

<script>
  export default{
    data(){
      return {
        nowTime:{
          year:"",
          month:"",
          date:""
        },
        authTime:{
          year:"",
          month:"",
          date:""
        },
        warnflag:"flag"
      }
    },
    methods:{
      handleDatePicker(){
        let vuetemp = this;
        this.$weui.datePicker({
            start: new Date().getFullYear(),
            end: new Date().getFullYear()+1,
            // onChange: function (result) {
            //     window.console.log(result);
            // },
            onConfirm: function (result) {
              vuetemp.verifyAuthTime(result);
                // this.$emit("sendAuthDate",result)
            },
            title: '选择授权到期时间'});
      },
      verifyAuthTime(objects){
        let y = objects[0];
        let m = objects[1];
        let d = objects[2];
        if(y.value >= this.nowTime.year && m.value >= this.nowTime.month && d.value >= this.nowTime.date){
          this.authTime.year = y.value;
          this.authTime.month = m.value;
          this.authTime.date = d.value;
        } else {
          //弹出警告
          this.warnflag = true;
        }
      },
      showDate(objects){

      },
      timeFormate(timeStamp) {
        // let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
        // let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
        this.nowTime.year = new Date(timeStamp).getFullYear();
        this.nowTime.month = new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
        this.nowTime.date = new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
        this.authTime.year = this.nowTime.year;
        this.authTime.month = this.nowTime.month;
        this.authTime.date = this.nowTime.date;
      },
      
      nowTimes(){
        this.timeFormate(new Date());
      },
    },
    mounted(){
      this.nowTimes()
    }
  }
</script>

<style>
.weui-cell{
  padding: 0px;
  margin: 0px;
  margin-right: 2px;
}
</style>
