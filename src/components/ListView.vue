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
    <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    name:"listview",
    data(){
        return {
            dialogVisible: false,
            items:[
                {
                    "name":"sdfsf"
                    },
                    {
                        "name":"sdfsdf"
                    }
                ]
        }
    },
    methods:{
        handleCardClick(index){
            this.dialogVisible = true;
        },

        handleDialogData(){

        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
          }
    }
}
</script>

<style>
.el-card__body{
    padding:5px;
    margin-bottom: 1px;
    box-shadow: 10px 0px 0px black;
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

.el-dialog{
}
</style>
