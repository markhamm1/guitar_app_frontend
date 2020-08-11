<template>
  <div class="home">
    <form v-on:submit.prevent="submit()">
      <h3>New Guitar</h3>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Make: </label>
        <input type="text" class="form-control" v-model="make">
      </div>
      <div class="form-group">
        <label>Model: </label>
        <input type="text" class="form-control" v-model="model">
      </div>
      <div class="form-group">
        <label>Image Url: </label>
        <input type="text" class="form-control" v-model="imageUrl">
      </div>
      <input type="submit" class="btn btn-primary" value ="Submit">
    </form>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      make: "",
      model: "",
      imageUrl: "",
      errors: [],
    };
  },
  created: function () {},
  methods: {
    submit: function () {
      var params = {
        make: this.make,
        model: this.model,
        image_url: this.imageUrl,
      };
      console.log(params);
      axios
        .post(`api/guitars`, params)
        .then((response) => {
          console.log(response);
          this.$router.push("/guitars");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>