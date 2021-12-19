
<template>
  <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Full name :</label>
      <input
        type="text"
        v-model="name"
        placeholder="Enter your full name :"
      />
      <label>Subject of the post :</label>
      <input type="text" v-model="text" name="text" placeholder="Subject :" />
    </div>
    <div class="form-control">
      <label>Post :</label>
      <textarea
        type="text"
        v-model="day"
        name="day"
        placeholder="Type your post here"
      />
      <label>Day & time :</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Enter the day and the time :"
      />
    </div>
    <div>
  <VideoPreview />
    </div>
    

    <input type="submit" value="Save the post" class="btn btn-primary" />
  </form>
</template>

<script>
      import VideoPreview from "../components/VideoPreview";

export default {
  name: 'AddPost',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    }
  },
  components: {
    VideoPreview,
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if (!this.text) {
        alert('Please type a post first !')
        return
      }

      const newPost = {
        // id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }

      this.$emit('add-post', newPost)

      this.text = ''
      this.day = ''
      this.reminder = false
    },
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control textarea {
  width: 100%;
  height: 350px;
  margin: 5px;
  padding: 3px 7px;
  /* font-size: 17px; */
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>
