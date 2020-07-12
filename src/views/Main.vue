<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <!-- 菜单组件 -->
                <el-menu :default-openeds="['1']">
                    <!-- 子菜单：用户管理 -->
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-caret-right"></i>
                            <span>用户管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="11" >
<!--                                {name: 'UserProfile',params: {id: 1}}-->
                                <router-link :to="{name:'UserProfile',params:{id:1}}">用户管理</router-link>
                            </el-menu-item>
                            <el-menu-item index="12" >
                                <router-link to="/user/list">用户列表</router-link>
                            </el-menu-item>
                            <el-menu-item index="13" >
                                <router-link to="/goHome">回到首页</router-link>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <!-- 子菜单：商品管理 -->
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-caret-right"></i>
                            <span>商品管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="21">商品分类</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group>
                            <el-menu-item index="22">商品管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>个人信息</el-dropdown-item>
                            <el-dropdown-item>退出登陆 </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-header>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name:'Main',
        data() {
            return {};
        },
        methods: {

        }
    };
</script>

<style scoped>
    .el-header{
        background-color: #42b983;
        color: #333333;
        line-height: 60px;
    }
    .el-aside{
        color: #333333;
    }

</style>