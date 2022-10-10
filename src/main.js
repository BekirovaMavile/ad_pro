import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase analytics";

Vue.use(Router)
Vue.config.productionTip = false


new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
  const firebaseConfig = {
  apiKey: "AIzaSyDU-ji7rSCEU9HO8JYhP4pgd6ZNKsw7Smo",
  authDomain: "ad-pro-b8cea.firebaseapp.com",
  projectId: "ad-pro-b8cea",
  storageBucket: "ad-pro-b8cea.appspot.com",
  messagingSenderId: "456077062798",
  appId: "1:456077062798:web:05d2cd3aa56628018dcfdf",
  measurementId: "G-P5ST031JT8"
};
// Initialize Firebase
fb.initializeApp(firebaseConfig);
  fb.analytics();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  }
}).$mount('#app')
