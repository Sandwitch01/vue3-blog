import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'//路由

const app = createApp(App)
//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key,component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key,component)
}
//pinia
import { createPinia } from 'pinia'
const pinia = createPinia()
//持久化存储
import {createPersistedState} from 'pinia-plugin-persistedstate';
pinia.use(createPersistedState({
    auto:true, //启用所有store默认持久化
}))
// 重写 $reset 方法 => 解决组合式api中无法使用问题
pinia.use(({store})=>{
    const initialStates = JSON.stringify(store.$state);
    store.$reset = ()=>{
        store.$patch(initialStates)
    }
})
app.use(pinia)
//store
import store from './store'
app.config.globalProperties.$store = store

//配置全局api
import api from '@/api'
app.config.globalProperties.$api = api

//注册全局组件
import components from '@/components'
Object.keys(components).forEach(key=>{
    app.component(key,components[key])
})



app.use(ElementPlus)
app.use(router)
app.mount('#app')
