// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(BootstrapVue);

Vue.config.productionTip = false
let app;
let config = {
  apiKey: "AIzaSyABq904mMuJqgVB-9spHtkMhGW2Cf-Wz7E",
  authDomain: "my-website-3e3ca.firebaseapp.com",
  databaseURL: "https://my-website-3e3ca.firebaseio.com",
  projectId: "my-website-3e3ca",
  storageBucket: "my-website-3e3ca.appspot.com",
  messagingSenderId: "260939014953"
};
const firebaseApp =  firebase.initializeApp(config);
export const db = firebaseApp.database();

firebase.auth().onAuthStateChanged(function(user) {
/* eslint-disable no-new */
if (!app) {
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
}



});


