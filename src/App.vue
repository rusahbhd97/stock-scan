<template>
  <Stocks
    v-if="mainData.length !== 0" 
    v-bind:mainData="mainData"
  />
</template>

<script>
import Stocks from './components/Stocks.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    Stocks
  },
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
      this.mainData = data;
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
