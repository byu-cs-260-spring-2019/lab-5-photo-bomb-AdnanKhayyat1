import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';
import axios from 'axios'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyDd9luclsa1ddibMpjWG0WlZsICdXKPQjM",
    authDomain: "myportifolio-49092.firebaseapp.com",
    databaseURL: "https://myportifolio-49092.firebaseio.com",
    projectId: "myportifolio-49092",
    storageBucket: "myportifolio-49092.appspot.com",
    messagingSenderId: "835787085886",
    appId: "1:835787085886:web:372338bbe31a17c9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
