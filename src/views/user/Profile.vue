<template>
    <div class="div1">
        <h1>个人信息</h1>
        {{id}}
    </div>
</template>

<script>
    export default {
        props: ['id'],
        name: "UserProfile"
    }
</script>

<style scoped>
    /*.div1{*/
    /*    text-align: left;*/
    /*    font-size: 20px;*/
    /*}*/
</style>