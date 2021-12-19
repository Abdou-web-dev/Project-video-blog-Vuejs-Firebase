<template>
  <button
    @click="onClick()"
    :style="{ background: color }"
    class="btn"
    id="btn1"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-click");
    },
  },
};
</script>

<style>
#btn1 {
  border-radius: 100px;
  position: relative;
  top: 100px;
}
#btn1:hover {
  border-radius: 50px;
  transform: scale(1.2);
}
</style>
