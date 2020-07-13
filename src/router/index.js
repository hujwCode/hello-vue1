import Vue from 'vue'
import VueRouter from "vue-router";

import Main from "@/views/Main";
import Login from "@/views/Login";
import UserProfile from "@/views/user/Profile";
import UserList from "@/views/user/List";
import NotFound from "../views/NotFound";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/Main',
            component: Main,
            props: true,
            children: [
                {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile, props: true},
                {path: '/user/list', component: UserList}
            ]
        },
        {
            path: '/Login',
            component: Login,

        },
        {
            path: '/goHome',
            redirect: '/Main'
        },
        {
            path: '*',
            component: NotFound,
        }


    ]
})
