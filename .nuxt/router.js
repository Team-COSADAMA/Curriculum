import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ce3c3be = () => interopDefault(import('../pages/basic-r/_slug.vue' /* webpackChunkName: "pages/basic-r/_slug" */))
const _4661b17d = () => interopDefault(import('../pages/basic-sql/_slug.vue' /* webpackChunkName: "pages/basic-sql/_slug" */))
const _2f7c4bc0 = () => interopDefault(import('../pages/git/_slug.vue' /* webpackChunkName: "pages/git/_slug" */))
const _6d623b48 = () => interopDefault(import('../pages/intro-ds/_slug.vue' /* webpackChunkName: "pages/intro-ds/_slug" */))
const _2977979c = () => interopDefault(import('../pages/machine-learning/_slug.vue' /* webpackChunkName: "pages/machine-learning/_slug" */))
const _0d6a6a58 = () => interopDefault(import('../pages/python/_slug.vue' /* webpackChunkName: "pages/python/_slug" */))
const _0959d5c0 = () => interopDefault(import('../pages/scrapy/_slug.vue' /* webpackChunkName: "pages/scrapy/_slug" */))
const _7fadfae5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _9ce3c3be,
    name: "basic-r-slug"
  }, {
    path: "/basic-sql/:slug?",
    component: _4661b17d,
    name: "basic-sql-slug"
  }, {
    path: "/git/:slug?",
    component: _2f7c4bc0,
    name: "git-slug"
  }, {
    path: "/intro-ds/:slug?",
    component: _6d623b48,
    name: "intro-ds-slug"
  }, {
    path: "/machine-learning/:slug?",
    component: _2977979c,
    name: "machine-learning-slug"
  }, {
    path: "/python/:slug?",
    component: _0d6a6a58,
    name: "python-slug"
  }, {
    path: "/scrapy/:slug?",
    component: _0959d5c0,
    name: "scrapy-slug"
  }, {
    path: "/",
    component: _7fadfae5,
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
