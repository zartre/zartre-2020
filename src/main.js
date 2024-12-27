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

  head.script.push({
    src: 'https://www.googletagmanager.com/gtag/js?id=G-WX579TCJNZ',
    async: true
  })
  head.script.push({
    vmid: 'gtag',
    innerHTML: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      
      gtag('config', 'G-WX579TCJNZ');
    `,
    __dangerouslyDisableSanitizersByTagID: {
      gtag: ['innerHTML']
    }
  })
}
