<template>
  <HomeRedirect class="position-logo" />
  <router-link to="login" class="position-absolute top-0 start-50">
    <span class="btn btnhome btn-lg btn-primary">Login</span>
  </router-link>

  <router-link to="register" class="position-absolute top-0 start-50">
    <span class="btn btnhome btn-lg btn-secondary">Register</span>
  </router-link>
  <AddPost v-show="showAddPost" @add-post="addPost" />
  <Posts
    @toggle-reminder="toggleReminder"
    @delete-post="deletePost"
    :posts="posts"
  />
</template>

<script>
import HomeRedirect from "../components/HomeRedirect";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";

export default {
  name: "Home",
  props: {
    showAddPost: Boolean,
  },
  components: {
    Posts,
    AddPost,
    HomeRedirect,
  },
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    async addPost(post) {
      const res = await fetch("api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(post),
      });

      const data = await res.json();

      this.posts = [...this.posts, data];
    },
    async deletePost(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`api/posts/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.posts = this.posts.filter((post) => post.id !== id))
          : alert("Error deleting post");
      }
    },
    async toggleReminder(id) {
      const postToToggle = await this.fetchPost(id);
      const updPost = { ...postToToggle, reminder: !postToToggle.reminder };

      const res = await fetch(`api/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updPost),
      });

      const data = await res.json();

      this.posts = this.posts.map((post) =>
        post.id === id ? { ...post, reminder: data.reminder } : post
      );
    },
    async fetchPosts() {
      const res = await fetch("api/posts");

      const data = await res.json();

      return data;
    },
    async fetchPost(id) {
      const res = await fetch(`api/posts/${id}`);

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.posts = await this.fetchPosts();
  },
};
</script>


<style scoped>
.position-logo{
  position: relative;
  bottom: 170px;
}
</style>