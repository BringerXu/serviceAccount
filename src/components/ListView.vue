<template>
<div id="listview">
    <div v-for="(item, index) in items" :key="index">
        <el-card class="box-card" :body-style="{padding:'0px'}" @click.native="handleCardClick(index)">
            <el-container>
            <el-avatar>
                
            </el-avatar>
            <el-main>
                <span id="itemName">{{item.name}}</span>
                
            </el-main>
            <div id="sBar">

            </div>
            </el-container>
        </el-card>
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
                    "name":"shenggangwu"
                    },
                    {
                        "name":"zhengyixu"
                    }
                ]
        }
    },
    methods:{
        handleCardClick(index){
            this.dialogVisible = true;
        }
    }
}
</script>

<style>
.el-card__body{
    padding:5px;
    margin-bottom: 1px;
    box-shadow: 0px 10px 5px #888888;
    text-align: left;
    vertical-align: middle;
}

.el-main{
    padding:0px;
    margin: 0px;
    text-align: left;
    margin-left: 5px;
    vertical-align: middle;
}

#listview > div > div > div > section > main{
    padding: 5px;
    vertical-align: middle;
}

.el-avatar{
    margin: 5px;
}

#itemName{
    position:absolute;
    transform:translate(0,50%);
}
</style>
