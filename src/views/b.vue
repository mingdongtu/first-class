<template>
  <div>
    <div>Hello,我是页面B</div>
    <div style="color:red">{{msg}}</div>
    <div @click="onJumpC">不要拦住我，我要去见C</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: this.$route.query.msg
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    next();
  },
  methods: {
    onJumpC() {
      this.$router.replace({
        name: "c"
      });
    }
  },
  mounted() {}
};
</script>

<style  scoped>
</style>
