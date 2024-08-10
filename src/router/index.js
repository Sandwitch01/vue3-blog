import {createRouter,createWebHashHistory} from 'vue-router'


const constantRouters = [
    {
        path:'/',
        component:()=>import('@/views/login/index.vue'),
    },
    {
        path:'/login',
        component:()=>import('@/views/login/index.vue'),
        meta:{
            isParentView:true
        }
    },
    {
        path:'/test',
        component:()=>import('@/views/test/index.vue')
    },
    {   //path:'/404'
        path:'/:pathMatch(.*)*',
        component:()=>import('@/views/error-page/404.vue')
    },
]

const router = createRouter({
    history:createWebHashHistory(),
    routes:constantRouters
})

export default router
