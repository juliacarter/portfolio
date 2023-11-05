import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export const tab = null

const darkMintChocolate: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#100c09',
    primary: '#00e699',
    secondary: '#4d285d',
    secondarydesat: '#4c2b5a'
  }
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'darkMintChocolate',
      variations: {
        colors:['primary', 'secondary', 'background'],
        lighten: 2,
        darken: 2,
      },
      themes: {
        darkMintChocolate,
      },
    },
    icons: {
      iconfont: 'fa',
      values: {
        git: 'fa-brands fa-github',
        linkedin: 'fa-brands fa-linkedin'
      }
    },
  })

const app = createApp(App)


app.use(vuetify)
app.use(router)


app.mount('#app')
