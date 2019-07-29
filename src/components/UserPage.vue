<template>
    <div id="UserPage">
        
    </div>
</template>

<script>
export default {
    name:"userPage",
    mounted()
    {
        this.$weui.dialog({
            title: '提示',
            content: '是否领取礼品',
            buttons: [{
            label: '取消',
            type: 'default',
            onClick: () => {
                alert('您已取消领取礼品！')
            }
            }, {
                label: '确定',
                type: 'primary',
                onClick: () => {
                    alert('您已确定领取礼品！')
                }
            }]
        })
    }
}
</script>

<style>

</style>
