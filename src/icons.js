import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedin,faSoundcloud, faBandcamp, faYoutube }  from '@fortawesome/free-brands-svg-icons'

library.add(faGithub, faLinkedin,faSoundcloud, faBandcamp, faYoutube);
Vue.component('fa-icon', FontAwesomeIcon);