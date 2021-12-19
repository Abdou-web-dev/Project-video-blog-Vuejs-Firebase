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
          <router-link to="register2"
            ><button class="btn-lg btn btn-outline-primary">
              Next
            </button></router-link
          >

          <br />
          <p>
            Do you already have an account ?
            <router-link to="login">Then login here. </router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HomeRedirect from "../components/HomeRedirect";

export default {
  name: "Register",
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
        .createUserWithEmailAndPassword(this.email, this.password)
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

<style scoped>
.btn-lg {
  border: 1px solid;
  position: relative;
  bottom: 60px;
  right: 30px;
  /* left: 150px; */
}
</style>
