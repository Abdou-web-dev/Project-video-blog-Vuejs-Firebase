<template>
  <div>
    <h3>
      {{ post.text }}
      <i @click="$emit('delete-post', post.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ post.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
};
</script>

<style scope>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
