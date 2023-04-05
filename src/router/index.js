import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

export const routes = [
    {
        name: '主页',
        path: '/index',
        component: resolve => require(['@/views/index.vue'], resolve),
        meta: {
            title: '首页',
        }
    },
    {
        name: '我的工作台',
        path: '/project',
        component: resolve => require(['@/views/project.vue'], resolve),
        meta: {
            title: '工作台',
        }
    },
    {
        name: '协作',
        path: '/team',
        component: resolve => require(['@/views/team.vue'], resolve),
        meta: {
            title: '协作',
        }
    },
    {
        // 动态路由
        name: '未知页面',
        path: '/*',
        component: resolve => require(['@/views/404.vue'], resolve),
        meta: {
            title: '未找到',
        }
    },

]

const router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    const title = to.meta.title ? to.meta.title : '在线学习系统';
    document.title = title;
    // 登录判断, 后台
    next()
})
export default router