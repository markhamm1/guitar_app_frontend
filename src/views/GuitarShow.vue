<template>
  <div class="home">
    <h1>{{ guitar.make }}</h1>
    <h2>{{ guitar.model }}</h2>
    <img v-bind:src=guitar.image_url style="width:600px;">
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
  },
};
</script>