<template>
    <div class="div1">
        <h1>个人信息</h1>
        {{id}}
    </div>
</template>

import axios from 'axios'
import VueAxios from "vue-axios"

<script>
    export default {
        props: ['id'],
        name: "UserProfile",
        // 过滤器 chain
        beforeRouteEnter: (to, from, next) => {
            console.log("进入路由之前");
            next((vm => {
                vm.getData(); // 进入路由之前执行方法
            }));
        },
        beforeRouteLeave: (to, from, next) => {
            console.log("进入路由之后");
            next();
        },
        methods:{
            getData:function () {
                console.log("datajson")
                this.axios({
                    method:'get',
                    url:'http://localhost:8080/mock/data.json'
                }).then(function (response) {
                    console.log(response);
                })
            }
        }
    }
</script>

<style scoped>
    /*.div1{*/
    /*    text-align: left;*/
    /*    font-size: 20px;*/
    /*}*/
</style>