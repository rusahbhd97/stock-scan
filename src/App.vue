<template>
  <router-view 
    v-if="mainData.length !== 0" 
    v-bind:mainData="mainData"
  >
  </router-view>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      mainData: [],
    }
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      axios.get('https://mobile-app-challenge.herokuapp.com/data')
      .then(({ data }) => {
        this.setData(data);
      });
    },
    setData(data) {
      this.mainData = JSON.parse(JSON.stringify(data));
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
