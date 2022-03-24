import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/BaseLayout.vue'
import type { LyRouteRecordRaw } from '@ly-js/element'

const routes: Array<LyRouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '概览'
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "test-layout" */ '@/views/layout/Dashboard.vue'
          ),
        meta: {
          id: 'dashboard',
          title: 'dashboard',
          affix: true,
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: '测试'
    },
    children: [
      {
        path: '/test-1',
        name: 'Test1',
        component: () =>
          import(
            /* webpackChunkName: "test-layout" */ '@/views/layout/Test1.vue'
          ),
        meta: {
          id: 'test-1',
          title: 'test-1',
          keepAlive: true
        }
      },
      {
        path: '/test-1/:id',
        name: 'TestChild1',
        component: () =>
          import(
            /* webpackChunkName: "test-layout" */ '@/views/layout/TestChild1.vue'
          ),
        meta: {
          id: 'test-child-1',
          title: 'test-child-1',
          keepAlive: false,
          activeMenu: 'Test1',
          hidden: true
        }
      },
      {
        path: '/test-2',
        name: 'Test2',
        component: () =>
          import(
            /* webpackChunkName: "test-layout" */ '@/views/layout/Test2.vue'
          ),
        meta: {
          id: 'test-2',
          title: 'test-2',
          keepAlive: true
        }
      },
      {
        path: '/test-3',
        name: 'Test3',
        component: () =>
          import(
            /* webpackChunkName: "test-layout" */ '@/views/layout/Test3.vue'
          ),
        meta: {
          id: 'test-3',
          title: 'test-3',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test-scroll',
    name: 'TestScroll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "scroll" */ '@/views/scroll/index.vue')
  },
  {
    path: '/test-scroll2',
    name: 'TestScroll2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "scroll2" */ '@/views/scroll/TestPullUp.vue')
  },
  {
    path: '/test-layout',
    name: 'TestLayout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "layout" */ '@/views/TestLayout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
