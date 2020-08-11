<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <!-- <p>{{ this.guitars }}</p> -->
    <hr>
    <div v-for="guitar in guitars">
      <p>Make: {{ guitar.make }}</p>
      <p>Model: {{ guitar.model }}</p>
      <p><img v-bind:src=guitar.image_url style="width:300px;"></p>
      <p><a v-bind:href="`/guitars/${guitar.id}`">More Info</a></p>
      <hr>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "All the GUITARS!",
      guitars: [],
    };
  },
  created: function () {
    this.guitarIndex();
  },
  methods: {
    guitarIndex: function () {
      axios.get("api/guitars").then((response) => {
        console.log(response.data);
        this.guitars = response.data;
      });
    },
  },
};
</script>