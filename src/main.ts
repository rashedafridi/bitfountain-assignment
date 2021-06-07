import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//global UI component
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseBadge from "./components/ui/BaseBadge.vue";
import LoadingSpinner from "./components/ui/LoadingSpinner.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
Vue.config.productionTip = false

Vue.component("base-card", BaseCard);
Vue.component("base-button", BaseButton);
Vue.component("base-badge", BaseBadge);
Vue.component("loading-spinner", LoadingSpinner);
Vue.component("base-dialog", BaseDialog);
// new Vue({
  
//   store,
//   router,

//   render: h => h(App)
// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
