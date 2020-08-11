<template>
  <div class="home">
    <form v-on:submit.prevent="submit()">
      <h3>Update Guitar Info</h3>
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      <div class="form-group">
        <label>Make: </label>
        <input type="text" class="form-control" v-model="guitar.make">
      </div>
      <div class="form-group">
        <label>Model: </label>
        <input type="text" class="form-control" v-model="guitar.model">
      </div>
      <div class="form-group">
        <label>Image Url: </label>
        <input type="text" class="form-control" v-model="guitar.image_url">
      </div>
      <input type="submit" class="btn btn-primary" value ="Submit">
    </form>
    <p><button v-on:click="guitarDelete">Delete Guitar</button></p>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      guitar: {},
      errors: [],
    };
  },
  created: function () {
    this.guitarShow();
  },
  methods: {
    guitarShow: function () {
      console.log("showing more info");
      axios.get(`api/guitars/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.guitar = response.data;
      });
    },
    submit: function () {
      var params = {
        make: this.guitar.make,
        model: this.guitar.model,
        image_url: this.guitar.image_url,
      };
      console.log(params);
      axios
        .patch(`api/guitars/${this.$route.params.id}`, params)
        .then((response) => {
          console.log(response);
          this.$router.push("/guitars");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    guitarDelete: function () {
      console.log("deleting guitar...");
      axios.delete(`api/guitars/${this.$route.params.id}`).then((response) => {
        console.log(response);
        this.$router.push("/guitars");
      });
    },
  },
};
</script>