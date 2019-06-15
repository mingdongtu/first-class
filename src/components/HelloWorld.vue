<template>
  <div>
    <div class="hello" @click="onJumpA">跳转到A页面</div>
    <div class="hello" @click="onJumpB">跳转到B页面</div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    onJumpA() {
      this.$router.push({
        name: "a",
        params: {
          msg: "A你好，我是来自上个页面的问候！"
        }
      });
    },
    onJumpB() {
      this.$router.push({
        path: "/b",
        query: {
          msg: "B你好，我也来问候一下你！"
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
