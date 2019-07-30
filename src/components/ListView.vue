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
                    },
                    {
                        "name":"yisong"
                    },
                    {
                        "name":"zhiweilu"
                    }
                ]
        }
    },
    methods:{
        handleCardClick(index){
            this.$router.push({name:'user', params: {name:this.items[index].name}});
        }
    }
}
</script>
<style>
.weui-cells {
    margin-top: 0px !important;    
}

.weui-cell__bd {
    text-align: left;
    margin-left: 20px;
}
</style>
