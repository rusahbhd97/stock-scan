<template>
  <div class="body">
    <div class="phone-section">
      <ul>
        <li v-for="(d,i) in stocks" :key="i">
          <a @click="sendView(d)">
            <div>{{d.name}}</div>
            <div :class="'subtext '+d.color">{{d.tag}}</div>
          </a>
        </li>
      </ul>	
    </div>
  </div>
</template>
<script>
export default {
  props: ['mainData'],
  data() {
    return {
      stocks: this.mainData,
    }
  },
  methods: {
    sendView(viewData) {
      let temp = JSON.stringify(JSON.parse(JSON.stringify(viewData)));
      this.$router.push({
        name: viewData.name,
        params: { temp },
      });
    }
  },
}
</script>
<style lang="scss">
.body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.phone-section {
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  padding: 15px;
  margin: auto;
  list-style: none;
  background-color: #01131B;
}
ul {
  text-align: left;
  padding-left: 5px;
  margin-top: 0;
  margin-bottom: 10px;
}
li {
  padding: 10px;
  border-bottom: 1px dotted #ececec;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  .subtext {
    font-size: 10px;
    &.green {
      color: #34B71F;
    }
    &.red {
      color: #F3392F;
    }
  }
}
</style>