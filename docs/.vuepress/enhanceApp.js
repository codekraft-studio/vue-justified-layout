
import pageComponents from '@internal/page-components'
import VueJustifiedLayout from "../../src/components/JustifiedLayout.vue"

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  // fix for Unknown Custom Element - <v-#####>
  // @see https://github.com/vuejs/vuepress/issues/1173
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component)
  }

  Vue.component('VueJustifiedLayout', VueJustifiedLayout)
}
