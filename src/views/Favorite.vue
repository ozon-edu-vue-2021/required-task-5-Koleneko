<template>
  <div id="favorites">
    <div v-if="notEmpty(favorites)">
      <h2>Ваши избранные товары :</h2>
      <ul v-for="item in favorites" :key="item.id">
        <li>
          {{ item.dish }}
        </li>
      </ul>
    </div>
    <h2 v-else>Вы не добавили ни одного товара в избранное</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Favorite",
  computed: {
    ...mapGetters({ favorites: "getFavorites" }),
  },
  methods: {
    notEmpty(obj) {
      return !(
        obj &&
        obj.constructor === Object &&
        Object.keys(obj).length === 0
      );
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
