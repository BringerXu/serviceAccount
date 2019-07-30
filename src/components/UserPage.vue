<template>
    <div id="UserPage">
        {{this.name}}
    </div>
</template>

<script>
export default {
    name:"userPage",
    data(){
        return {
            name:""
        }
    },
    created(){
        this.getRouterData();
    },
    methods:{
        getRouterData(){
            this.name = this.$route.params.name;
        }
    }
}
</script>

<style>

</style>
