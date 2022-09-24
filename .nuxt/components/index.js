export { default as Close } from '../../components/Close.vue'
export { default as CourseHeader } from '../../components/CourseHeader.vue'
export { default as Featured } from '../../components/Featured.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as FooterFull } from '../../components/FooterFull.vue'
export { default as FooterLogo } from '../../components/FooterLogo.vue'
export { default as FooterLogo1 } from '../../components/FooterLogo1.vue'
export { default as Footeralt } from '../../components/Footeralt.vue'
export { default as GithubLogo } from '../../components/GithubLogo.vue'
export { default as Header } from '../../components/Header.vue'
export { default as HeaderAlt } from '../../components/HeaderAlt.vue'
export { default as HeaderLogo } from '../../components/HeaderLogo.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as Prevnext } from '../../components/Prevnext.vue'
export { default as Search } from '../../components/Search.vue'
export { default as SearchIcon } from '../../components/SearchIcon.vue'
export { default as SocialHead } from '../../components/SocialHead.vue'
export { default as Warning } from '../../components/Warning.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
