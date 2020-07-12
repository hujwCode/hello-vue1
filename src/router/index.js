import Vue from 'vue'
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Login from "@/views/Login";
import UserProfile from "@/views/user/Profile";
import UserList from "@/views/user/List";

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            path:'/Main',
            component: Main,
            children: [
                {path: '/user/profile', component: UserProfile},
                {path: '/user/list', component: UserList}
            ]
        },
        {
            path: '/Login',
            component: Login,

        },


    ]
})
