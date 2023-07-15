import {createRouter,createWebHashHistory} from "vue-router"

import MainPage from '../views/MainPage.vue'

const  router= createRouter({
    history : createWebHashHistory(),
    routes : [{
        path : '/',
        component : MainPage
    }]
})

export default router