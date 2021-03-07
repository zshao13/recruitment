import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/layout/Index.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'Home',
            children: [
                {
                    path: '/index',
                    name: 'Index',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/Index.vue')
                },
                {
                    path: '/position',
                    name: 'Position',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/Position.vue')
                },
                {
                    path: '/positionDetail',
                    name: 'PositionDetail',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/PositionDetail.vue')
                },
                {
                    path: '/positionEdit',
                    name: 'PositionEdit',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/PositionEdit.vue')
                },
                {
                    path: '/posted',
                    name: 'Posted',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/Posted.vue')
                },
                {
                    path: '/resumeEdit',
                    name: 'ResumeEdit',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/ResumeEdit.vue')
                },
                {
                    path: '/resume',
                    name: 'Resume',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/Resume.vue')
                },
                {
                    path: '/resumeList',
                    name: 'ResumeList',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/ResumeList.vue')
                },
                {
                    path: '/company',
                    name: 'Company',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/Company.vue')
                },
                {
                    path: '/companyPosition',
                    name: 'CompanyPosition',
                    component: () => import(/* webpackChunkName: "main" */ '@/views/CompanyPosition.vue')
                }
            ]
        }
    ]
})
