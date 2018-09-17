import Vue from 'vue'
import Router from 'vue-router'
import CouseDetail from '@/components/CourseDetail'
import CourseList from '@/components/CourseList'
import Index from '@/components/Index'
import Login from '@/components/Login'
import axios from 'axios'


Vue.prototype.$axios = axios;
Vue.use(Router);

export default new Router({
  routes: [
    {path: '/index', name: 'index', component: Index, },
    {path: '/courses', name: 'course_list', component: CourseList,meta:{requireAuth:true}},
    {path: '/courses/:id', name: 'course_detail', component: CouseDetail,meta:{requireAuth:true}},
    {path: '/login', name: 'login', component: Login},
  ],
})


