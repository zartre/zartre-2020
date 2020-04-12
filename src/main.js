// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'flexboxgrid'
import 'normalize.css'
import '~/styles/main.sass'
import DefaultLayout from '~/layouts/Default.vue'
import WorkLayout from '~/layouts/WorkLayout.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('WorkLayout', WorkLayout)
}
