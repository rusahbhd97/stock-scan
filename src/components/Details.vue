<template>
  <div class="body">
    <div class="phone-section">
      <div class="header-section">
        <div class="header">{{details.name}}</div>
        <div :class="'subtext '+details.color">{{details.tag}}</div>
      </div>
      <div class="body-section">
        <template v-for="(d,i) in details.criteria" :key="i">
          <div v-if="i >= 1" class="subtext m-10">and</div>
          <div v-html="getText(d)"></div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      details: {},
    }
  },
  created() {
    let tempParams = JSON.parse(this.$route.params.temp);
    this.details = tempParams;
  },
  methods: {
    getText(data) {
      if(data.type === 'plain_text') {
        return `<div class="m-10">${data.text}</div>`;
      } else {
        return `<div class="m-10">${this.getVariable(data)}</div>`;
      }
    },
    getVariable(data) {
      let vars = Object.keys(data.variable);
      var temp = data.text;
      vars.forEach((v) => {
        temp = temp.split(v).join(`<a href="${this.$route.path}_${v}">(${this.getValue(data.variable,v)})</a>`)
      });
      return temp;
    },
    getValue(values,v) {
      if(values[v].type === 'value') {
        return values[v].values[0];
      } else if(values[v].type === 'indicator') {
        return values[v].default_value;
      }
    },
  },
}
</script>
<style lang="scss">
.phone-section {
  width: 100%;
  max-width: 400px;
  min-height: 300px;
  padding: 15px;
  margin: auto;
  list-style: none;
  background-color: #01131B;
  text-align: left;
}
.header-section {
  height: 30px;
  background-color: #1686b0;
  padding: 10px;
}
.header {
  color: #fff;
  font-size: 14px;
  font-weight: 300px;
}
.subtext {
  font-size: 10px;
  &.green {
    color: #34B71F;
  }
  &.red {
    color: #F3392F;
  }
}
.body-section {
  padding: 10px;
  color: #fff;
  .m-10 {
    margin-bottom: 10px;
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
}
</style>