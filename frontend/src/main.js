//Vue
import Vue from 'vue';
import App from './App.vue';
//Rotas
import router from "./router";
import store from "./store";
//Biblioteca Vuesax
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'boxicons/css/boxicons.min.css'
Vue.use(Vuesax, {});
//Importando diretivas (Dark Mode)
import "./directives/index";
//Importando ícones
import 'material-icons/iconfont/material-icons.css';
//Importando axios
import axios from 'axios';
//Importando constantes
import { Constantes } from './utils/Constantes';
//Http
Vue.config.productionTip = false;
Vue.prototype.$constantes = Constantes;
Vue.prototype.$http = axios;
//Sessões
import VueSession from 'vue-session';
Vue.use(VueSession);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
