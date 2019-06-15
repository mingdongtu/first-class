<template>
  <div>
    <h1>{{title}}</h1>
    <div>Hello,我是页面A</div>
    <div style="color:red">{{msg}}</div>
    <div @click="onJumpB">我要去见B页面</div>
    <h3>{{title2}}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      msg: this.$route.params.msg
      // title1: ""
    };
  },
  computed: {
    ...mapState("a", {
      title: state => state.title
    }),

    title1() {
      return this.$store.state.a.title;
    }
  },
  methods: {
    ...mapMutations("a", ["setTitle"]),
    onJumpB() {
      this.$router.push({
        name: "b"
      });
    }
  },
  mounted() {
    console.log(this.$store);
    // this.title1 = this.$store.state.a.title;
    this.$store.commit("b/setTitle", "我来看你");
  }
};
</script>

<style  scoped>
</style>
