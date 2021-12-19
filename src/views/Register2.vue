<template>
  <HomeRedirect />

  <div class="main">
    <form action="" class="border border-2 p-5 w-50">
      <label for="" class="mb-3">Choose a picture of yourself :</label>
      <input type="file" name="myfile" />

      <br /><br />

      <label for="" class="form-label">What is your full name ?</label>
      <input v-model="name" type="text" name="" class="form-control" />
      <br />
      <label class="form-label">What is your phone number ?</label>
      <input v-model="phone" type="tel" name="" class="form-control" /> <br />
      <label for="" class="form-label">Where are you from ?</label>
      <input v-model="country" type="text" name="" class="form-control" />
    </form>
    <router-link to="register">
      <button class="btn btn-lg btn-outline-success border border-1">
        Back
      </button></router-link
    >
    <button class="btn btn-lg btn-outline-success border border-1">
      Submit
    </button>
  </div>
</template>

<script>
import HomeRedirect from "../components/HomeRedirect";

export default {
  name: "Register2",
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
        .createUserWithEmailAndPassword(
          this.email,
          this.password,
          this.name,
          this.number,
          this.country
        )
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
  position: relative;
  bottom: 50px;
}

form {
  background: darkgrey;
}
form:hover {
  opacity: 0.9;
}
</style>
