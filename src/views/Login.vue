<template>
  <HomeRedirect />

  <div class="container-xxl">
    <div class="row">
      <div class="col-md-8 col-lg-10">
        <form action="" class="border border-2 p-5 w-50">
          <label for="" class="form-label">Email :</label>
          <input
            class="mb-2 form-control"
            type="text"
            v-model="email"
            placeholder="Your Email :"
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>

          <br />
          <label for="" class="form-label">Password :</label>
          <input
            class="form-control"
            type="password"
            v-model="password"
            placeholder="Password"
          />
          <div class="form-text">
            Neither the password
          </div>
          <br />
          <router-link to="/">
            <button class="btn btn-lg btn-outline-success border border-1">
              Back
            </button></router-link
          >

          <button class="btn-lg btn btn-outline-primary border border-2">
            Login
          </button>

          <p>
            Do you need an account ?
            <router-link to="register">Then, sign up!</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HomeRedirect from "../components/HomeRedirect";

export default {
  name: "Login",
  components: {
    HomeRedirect,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      // log the user in
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.data);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style></style>
