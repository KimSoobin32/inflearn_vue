import Vue from 'vue'
import Router from 'vue-router'
import Read from '@/components/Read'
import Create from '@/components/Create'
import Detail from '@/components/Detail'
//bbs
import Board from '@/components/Board'
// import { component } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Read',
      component: Read
    },
    {
      //?붙이면 뒤에 아이디 있어도 없어도 create보여줌
      path: '/create/:contentId?',
      name: 'Create',
      component: Create
    },
    {
      path: '/detail/:contentId',
      name: 'Detail',
      component: Detail
    },
    //bbs
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
  ]
})
