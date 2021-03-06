import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/pages/Home')
const print = () => import('@/pages/Print')
const library = () => import('@/pages/Library')
const fileView = () => import('@/pages/Library/FileView')
const folderView = () => import('@/pages/Library/FolderView')
const personView = () => import('@/pages/Library/PersonView')
const shareView = () => import('@/pages/Library/ShareView')
const user = () => import('@/pages/User')
import order from '$@/Business/ManageBoard/Order'
import Personal from '$@/Business/ManageBoard/Personal'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: { name: 'home' }
  },
  {
    path: '/home',
    component: home,
    name: 'home'
  },
  {
    path: '/print',
    component: print,
    name: 'print'
  },
  {
    path: '/library',
    component: library,
    name: 'library'
  },
  {
    path: '/library/file/:fileID',
    component: fileView,
    name: 'file-view'
  },
  {
    path: '/library/folder/:folderID',
    component: folderView,
    name: 'folder-view'
  },
  {
    path: '/library/personal/:uid',
    component: personView,
    name: 'person-view'
  },
  {
    path: '/library/share',
    component: shareView,
    name: 'share-view',
    meta: { access: ['user', 'vendor', 'manager'] },
  },
  {
    path: '/user',
    redirect: '/user/order',
    component: user,
    name: 'user',
    meta: { access: ['user', 'vendor', 'manager'] },
    children: [
      {
        path: 'order',
        name: 'user-order',
        component: order,
        meta: { header: order.header }
      },
      {
        path: 'info',
        component: { template: `<router-view/>` },
        children: [
          {
            path: '',
            name: 'person-info',
            component: Personal.display,
            meta: { header: Personal.display.header },
          },
          {
            path: 'change',
            name: 'person-update',
            component: Personal.change,
            meta: { header: Personal.change.header },
          }
        ]
      }
    ]
  },
  {
    path: '*',
    redirect: { name: 'index' }
  }
]

export default new Router({
  mode: 'history',
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
