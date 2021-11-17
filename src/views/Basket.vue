<template>
  <div id="basket-root">
    <div v-if="totalPrice">
      <div
        id="basket-wrapper"
        v-for="(quantity, uid) in basketItems"
        :key="uid"
      >
        <div id="basket-product" v-if="quantity">
          <span>{{ products[uid].dish }} </span>
          <span> </span>
          <span>Количество: {{ basketItems[uid] }}</span>
          <span>Цена: {{ products[uid].price }} ₽</span>
          <button class="basket-button" @click="add(uid)">Добавить</button>
          <button class="basket-button" @click="remove(uid)">Убрать</button>
        </div>
      </div>
      <button class="basket-button" @click="checkout">Оформить</button
      ><span>{{ totalPrice }} ₽</span>
    </div>
    <h2 v-else>Вы пока не выбрали товары</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "basket",
  computed: {
    ...mapGetters({
      basketItems: "getBasket",
      products: "getProducts",
      totalPrice: "getTotalPrice",
    }),
  },
  methods: {
    remove(id) {
      this.$store.commit("removeFromBasket", id);
    },
    add(id) {
      this.$store.commit("addToBasket", id);
    },
    checkout() {
      const res = {};
      for (const uid in this.basketItems) {
        console.log(this.products[uid].dish, this.basketItems[uid]);
        res[this.products[uid].dish] = this.basketItems[uid];
      }
      alert(Object.entries(res));
    },
  },
};
</script>

<style scoped>
#basket-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 10%;
}
#basket-product {
  min-width: 100%;
  height: 80px;
  display: flex;
  gap: 20px;
  align-items: center;
  border-block-end: solid;
  margin-bottom: 20px;
}
.basket-button {
  grid-area: button;
  box-sizing: border-box;
  border: none;
  background-color: #0066ff;
  color: white;
  max-height: 40px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 15px;
  min-height: 40px;
  justify-self: flex-end;
}
span {
  white-space: nowrap;
}
</style>
