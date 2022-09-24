export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'COSADAMA Curriculum',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '중앙대학교 비전공자 코딩 커뮤니티, 코사다마의 오픈소스 커리큘럼이 업로드되는 공간입니다.' },
      { name: 'format-detection', content: 'telephone=no' },
      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 't-type',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'COSADAMA Curriculum' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.curriculum.cosadama.com'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'COSADAMA Curriculum'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '중앙대학교 비전공자 코딩 커뮤니티, 코사다마의 오픈소스 커리큘럼이 업로드되는 공간입니다.'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/Team-COSADAMA/Curriculum/main/static/og_image.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://raw.githubusercontent.com/Team-COSADAMA/Curriculum/main/static/og_image.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'COSADAMA Curriculum Logo Image'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //https://github.com/dword-design/nuxt-content-git
    'nuxt-content-git',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
