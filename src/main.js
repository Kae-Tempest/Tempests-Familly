import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import VueChatScroll from 'vue-chat-scroll'
Vue.use(VueChatScroll)
Vue.use(VueRouter)
Vue.config.productionTip = false

import '@/css/reset.css'
import '@/css/style.css'

import AuthWrapper from '@/pages/AuthWrapper.vue';
import Home from '@/pages/home.vue';


/*const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database('../db/bdd.db', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });

  let email = db.all('Select * from users')
  console.log(email)
  */

const routes = [
    { path: '/AuthWrapper', component: AuthWrapper },
    { path: '/', component: Home }
]

const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
