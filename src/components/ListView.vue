<template>
<div id="listview">
        <div class="weui-cells">
            <a class="weui-cell weui-cell_access" href="javascript:;" @click="handleCardClick(index)" v-for="(item, index) in items" :key="index">
                <div class="weui-cell__hd">
                    <el-avatar>
                        <img src="../squi.jpg">
                    </el-avatar>
                </div>
                <div class="weui-cell__bd">
                    <span>{{item.name}}</span>
                </div>
                <div class="weui-cell__ft">
                    <img>
                </div>
            </a>
        </div>
</div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
    name:"listview",
    data(){
        return {
            items:[
                    {
                        "name":"cloudragon"
                    },
                    {
                        "name":"xzy"
                    },
                    {
                        "name":"pest"
                    },
                    {
                        "name":"pest"
                    },
                    {
                        "name":"pest"
                    },
                    {
                        "name":"pest"
                    },
                    {
                        "name":"pest"
                    },
                    {
                        "name":"pest"
                    }
                ]
        }
    },
    methods:{
        handleCardClick(index){
            setTimeout(200);
            this.$router.push({name:'user', params: {name:this.items[index].name}});
        }
    }
}
</script>
<style>
.weui-cell__bd {
    text-align: left;
    margin-left: 20px;
}
</style>
