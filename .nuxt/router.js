import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f403990c = () => interopDefault(import('../pages/basic-r/_slug.vue' /* webpackChunkName: "pages/basic-r/_slug" */))
const _81bc56d4 = () => interopDefault(import('../pages/basic-sql/_slug.vue' /* webpackChunkName: "pages/basic-sql/_slug" */))
const _1f86f80e = () => interopDefault(import('../pages/git/_slug.vue' /* webpackChunkName: "pages/git/_slug" */))
const _26f4d10f = () => interopDefault(import('../pages/intro-ds/_slug.vue' /* webpackChunkName: "pages/intro-ds/_slug" */))
const _46d77663 = () => interopDefault(import('../pages/machine-learning/_slug.vue' /* webpackChunkName: "pages/machine-learning/_slug" */))
const _f773b34a = () => interopDefault(import('../pages/python/_slug.vue' /* webpackChunkName: "pages/python/_slug" */))
const _d7559d72 = () => interopDefault(import('../pages/scrapy/_slug.vue' /* webpackChunkName: "pages/scrapy/_slug" */))
const _669d0d84 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/basic-r/:slug?",
    component: _f403990c,
    name: "basic-r-slug"
  }, {
    path: "/basic-sql/:slug?",
    component: _81bc56d4,
    name: "basic-sql-slug"
  }, {
    path: "/git/:slug?",
    component: _1f86f80e,
    name: "git-slug"
  }, {
    path: "/intro-ds/:slug?",
    component: _26f4d10f,
    name: "intro-ds-slug"
  }, {
    path: "/machine-learning/:slug?",
    component: _46d77663,
    name: "machine-learning-slug"
  }, {
    path: "/python/:slug?",
    component: _f773b34a,
    name: "python-slug"
  }, {
    path: "/scrapy/:slug?",
    component: _d7559d72,
    name: "scrapy-slug"
  }, {
    path: "/",
    component: _669d0d84,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
