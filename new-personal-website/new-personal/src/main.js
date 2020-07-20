import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin,faSoundcloud, faBandcamp, faYoutube }  from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin,faSoundcloud, faBandcamp, faYoutube);
Vue.component('fa-icon', FontAwesomeIcon);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)





Vue.config.productionTip = false
require('vue2-animate/dist/vue2-animate.min.css')

new Vue({

  render: h => h(App),
}).$mount('#app')
