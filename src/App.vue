<template>
 
  <div class="container-xxl">
    <Header
      class="text-light"
      @toggle-add-post="toggleAddPost"
      :showAddPost="showAddPost"
    />
    <!-- <Login /> -->
    <router-view :showAddPost="showAddPost"></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Login from "./views/Login";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    // Login,
  },
  data() {
    return {
      showAddPost: false,
    };
  },
  methods: {
    toggleAddPost() {
      this.showAddPost = !this.showAddPost;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background: rgba(169, 169, 169, 0.719);
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  border: none;
  padding: 10px 20px;
  margin: 60px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btnhome {
  margin-top: 70px  ;
}
.btn-primary {
  position: relative;
  bottom: 60px;
  left: 550px;
}

.btn-secondary {
  position: relative;
  bottom: 60px;
  left: 430px;
}
.btn-primary:hover {
  transform: scale(1.2);
  transition: 0.6s ease;
}

.btn-secondary:hover {
  transform: scale(1.2);
  transition: 0.6s ease;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
