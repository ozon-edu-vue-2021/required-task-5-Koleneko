import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const imagePaths = [
  require("@/assets/images/6123150777.webp"),
  require("@/assets/images/6126039472.webp"),
  require("@/assets/images/6126040354.webp"),
  require("@/assets/images/6128597660.webp"),
  require("@/assets/images/6134992334.webp"),
  require("@/assets/images/6136170572.webp"),
  require("@/assets/images/6136172483.webp"),
  require("@/assets/images/6140906765.webp"),
  require("@/assets/images/6142673815.webp"),
  require("@/assets/images/6142681673.webp"),
  require("@/assets/images/6142683276.webp"),
  require("@/assets/images/6148226736.webp"),
];
const url = "https://random-data-api.com/api/food/random_food?size=30";

export default new Vuex.Store({
  state: {
    products: {},
    favorites: {},
    basket: {},
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    toggleFavorites(state, payload) {
      state.products[payload].isFavorite = !state.products[payload].isFavorite;
      if (!state.products[payload].isFavorite) {
        delete state.favorites[payload];
      } else {
        Vue.set(state.favorites, payload, state.products[payload]);
      }
    },
    addToBasket(state, payload) {
      state.basket[payload]
        ? Vue.set(state.basket, payload, ++state.basket[payload])
        : Vue.set(state.basket, payload, 1);
    },
    removeFromBasket(state, payload) {
      state.basket[payload] === 1 && Vue.set(state.basket, payload, null);
      state.basket[payload] > 1 &&
        Vue.set(state.basket, payload, --state.basket[payload]);
    },
  },
  actions: {
    async setProducts(state) {
      const res = {};
      const products = await fetch(url);
      const productsJson = await products.json();
      productsJson.forEach((obj) => {
        obj.image = imagePaths[(Math.random() * imagePaths.length) | 0];
        obj.price = Math.floor(Math.random() * 1000);
        obj.isFavorite = false;
      });
      productsJson.forEach((el) => {
        res[el.uid] = el;
        res[el.uid].image = imagePaths[(Math.random() * imagePaths.length) | 0];
        res[el.uid].price = Math.floor(Math.random() * 1000);
        res[el.uid].isFavorite = false;
      });

      state.commit("setProducts", res);
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getFavorites: (state) => state.favorites,
    getBasket: (state) => state.basket,
    getTotalPrice: (state) => {
      let sum = 0;
      for (const uid in state.basket) {
        sum += state.products[uid].price * state.basket[uid];
      }
      return sum;
    },
  },
  modules: {},
});
