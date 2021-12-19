<template>
  <router-link to="/">
    <div class="mb-5 border border-2 rounded p-2 w-25 text-center div-home">
      <img src="../assets/play.png" alt="" />
      <img src="../assets/logo.png" alt="" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HomeRedirect",
};
</script>

<style scoped>
img {
  width: 80x;
  height: 80px;
}

.div-home:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>
