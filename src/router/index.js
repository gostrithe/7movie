import { createRouter, createWebHistory } from 'vue-router'
// import { createWebHashHistory } from 'vue-router'

import FilmView from '../views/FilmView.vue'

import NotFound from '../views/NotFound.vue'

const router = createRouter({
  /* 历史记录模式 */ 
  // H5模式
  // 浏览器分不清你是前端路由还是后端路由，以为是后端路由直接访问，发现没有，会报404
  // 解决办法在服务器添加回退路由，匹配不了，则提供相同页面index.html，定性前端路由，在当前页面跳转锚点
  history: createWebHistory(import.meta.env.BASE_URL),
  // 哈希模式 
  // 有#号，在当前页面跳转当前页面的不同地方（页面以内跳转），相当锚记，这部分url不被发送到服务器。影响SEO，SEO不知道#后面的url是不同的内容，以为是同一个页面。
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 重定向，可以根据路径，亦可以根据name
      path: '/films',
      redirect: {name: 'nowPlaying'}
    },

    {
      path: '/films',
      name: 'films',
      component: FilmView,
      children: [
        {
          // /films/nowPlaying
          // NowPlaying会渲染在FilmView组件的<router-view>中
          path: 'nowPlaying',
          name: 'nowPlaying',
          component: () => import('../components/films/NowPlaying.vue')
        },
        {
          path: 'comingSoon',
          name: 'comingSoon',
          component: () => import('../components/films/ComingSoon.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // 异步加载，懒加载，提高首次加载的性能
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: () => import('../views/CinemaView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },

    {
      path: '/',
      redirect: '/films/nowPlaying'
    },

    // 动态路由
    {
      path: '/film/:id(\\d+)',
      name: 'detail',
      component: () => import('../components/films/Detail.vue')
    },

    // 动态路由 配置404
    {
      // 将匹配所有内容并将其放在'$route.params.pathMatch'下
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
      // 将匹配以'/user-'开头的所有内容，并将其放在'$route.params.afterUser'下
      // path: '/user-:afterUser(.*)'
    }
  ]
})

export default router
