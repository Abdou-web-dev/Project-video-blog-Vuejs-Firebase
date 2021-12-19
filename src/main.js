import {
  createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD7NINtfTk_YwucEa5JM80Syt7ovpi_FkU",
  authDomain: "vue-fire-todo-c6a93.firebaseapp.com",
  projectId: "vue-fire-todo-c6a93",
  storageBucket: "vue-fire-todo-c6a93.appspot.com",
  messagingSenderId: "998793817734",
  appId: "1:998793817734:web:0a1f2cdd2bf493e5e9ab07"
};

firebase.initializeApp(firebaseConfig);


createApp(App)
  .use(router)
  .mount('#app')