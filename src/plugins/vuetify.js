import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import '@/assets/scss/app.scss'

Vue.use(Vuetify)

import pt from 'vuetify/es5/locale/pt'
const opts = {
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    themes: {
      light: {
        primary: '#1E88E5'
      }
    }
  }
}

export default new Vuetify(opts)
