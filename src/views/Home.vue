<template>
  <div class="home">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    ProductCard,
  },
  computed: {
    ...mapState({ products: "products" }),
  },
  methods: {},
};
</script>

<style scoped>
.home {
  margin: 20px 10%;
  height: auto;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: minmax(100px, 1fr);
}
</style>
