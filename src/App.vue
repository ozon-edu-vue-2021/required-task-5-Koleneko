<template>
  <div id="app">
    <div id="nav">
      <div id="home-link"><router-link to="/">Home</router-link></div>
      <div id="icons-container">
        <router-link to="favorite"><HeartIcon> </HeartIcon></router-link>
        <router-link to="basket"><BasketIcon /></router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BasketIcon from "@/components/icons/BasketIcon";
import HeartIcon from "@/components/icons/HeartIcon";

export default {
  methods: {
    ...mapActions(["setProducts"]),
  },
  mounted() {
    this.$store.dispatch("setProducts");
  },
  components: {
    BasketIcon,
    HeartIcon,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  display: flex;
  background: none;
  padding: 30px 15%;
  justify-content: space-between;
}

#nav a {
  font-size: xx-large;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#icons-container * {
  margin-left: 5px;
  min-width: 50px;
}
</style>
