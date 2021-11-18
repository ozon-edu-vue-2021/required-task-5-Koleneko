<template>
  <div id="card">
    <img id="card-image" :src="product.image" alt="product.image" />
    <span id="card-title">{{ product.dish }}</span>
    <div @click="handleFavoriteClick" id="card-heart-container">
      <Heart id="card-heart" :need-fill="product.isFavorite" />
    </div>
    <span id="card-price">{{ product.price }} ₽</span>
    <button id="card-button" @click="handleAddClick">В корзину</button>
  </div>
</template>

<script>
import Heart from "@/components/icons/HeartIcon";
// import { mapMutations } from "vuex";

export default {
  name: "ProductCard",
  components: {
    Heart,
  },
  methods: {
    handleFavoriteClick() {
      this.$store.commit("toggleFavorites", this.$props.product.uid);
    },
    handleAddClick() {
      this.$store.commit("addToBasket", this.$props.product.uid);
    },
  },
  props: {
    product: {
      default: () => {},
    },
    imgPath: {
      default: "",
    },
  },
};
</script>

<style scoped>
#card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 10% 10% 20px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  gap: 10px;
  grid-template-areas:
    "image  image"
    "title ."
    "price  button"
    ". .";
}
#card-image {
  margin-bottom: 5px;
  grid-area: image;
  width: 100%;
  height: 100%;
  padding: 0;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
}
#card-button {
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
}
#card-title {
  grid-area: title;
  align-self: center;
  justify-self: start;
  padding-left: 10px;
  font-size: 1.25rem;
}

#card-price {
  grid-area: price;
  align-self: center;
  font-size: 1.5rem;
  font-weight: bold;
  justify-self: flex-start;
  padding-left: 20px;
}
#card-heart {
  justify-self: flex-end;
  padding-right: 20px;
  cursor: pointer;
  fill: #0066ff;
}
#card-heart-container {
  width: fit-content;
  height: fit-content;
  justify-self: flex-end;
}
</style>
