<template>
    <div id="UserPage">
        <el-avatar :size="size" fit="cover">
            <img src="../squi.jpg" alt="">
        </el-avatar>
        <div>
            <span class="pageTitle">{{this.name}}</span>
        </div>
        <DatePicker v-if="authflag" v-on:sendAuthDate="getAuthDate"/>
    </div>
</template>

<script>
import DatePicker from './DatePicker.vue'
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
            size:0,
            
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
    },
    methods:{
        getRouterData(){
            this.name = this.$route.params.name;
        },
        getAuthDate(data){
            window.console.log(data);
        }
    }
}
</script>

<style>
#UserPage{
    height:100%;
}
.weui-tabbar{
    position:absolute;
    /* top: 150px; */
    bottom:0px;
    left:0px;
    right:0px;
}

#UserPage .el-avatar{
    margin-top: 10px;
}
.img{
    width:100%;
}
.pageTitle{
    font-size: 30px;
    font-weight: 600;
}
</style>
