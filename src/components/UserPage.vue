<template>
    <div id="UserPage">
        <el-avatar :size="size" fit="cover">
            <img src="../squi.jpg" alt="">
        </el-avatar>
        <div>
            <span class="pageTitle">{{this.name}}</span>
        </div>
        <div class="icon-box">
            <i :class="statusIcon"></i>
            <div class="icon-box__ctn">
                <h3 class="icon-box__title">未授权</h3>
                <!-- <p class="icon-box__desc">用于表示操作顺利达成</p> -->
            </div>
        </div>
        <DatePicker v-if="authflag" v-on:sendAuthDate="getAuthDate"/>
            <div class="weui-flex botBar">
                <div class="weui-flex__item">
                <div class="weui-btn weui-btn_primary" @click="submitAuth()">提交</div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from './DatePicker.vue'
import { setTimeout } from 'timers';
export default {
    name:"userPage",
    components:{
        DatePicker
    },
    data(){
        return {
            name:"",
            authDate:"",
            authflag:true,
            size:200,
            // weui-icon-warn weui-icon_msg 警告标志
            // weui-icon-success weui-icon_msg 成功标志
            statusIcon:"weui-icon-warn weui-icon_msg",
            // 失效 选择时间段隐藏
            // 授权
        }
    },
    created(){
        this.getRouterData();
    },
    mounted(){
        let ww = window.innerWidth;
        this.size = ww*0.8;
        // 请求获得是否已授权
    },
    beforeDestroy(){

    },
    methods:{
        getRouterData(){
            this.name = this.$route.params.name;
        },
        getAuthDate(data){
            this.authDate = data;
        },
        submitAuth(){
            let vuetemp = this;
            this.statusIcon = "weui-icon-success weui-icon_msg";
            setTimeout(function(){vuetemp.$router.push("/");}, 300);
        }
    }
}
</script>

<style>
#UserPage{
    height:100%;
}

#UserPage .el-avatar{
    margin-top: 25px;
}
.img{
    width:100%;
}
.pageTitle{
    font-size: 30px;
    font-weight: 600;
}

.botBar{
    box-sizing: border-box;
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: 600;
    padding: 20px;
    background-color: #3A3A3A;
}
</style>
