<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="product in products" :key="product.id">
      <ProductItem
        :image="product.image"
        :title="product.title"
        :price="product.price"
      />
    </li>
  </ul>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
  export default {
    props: ['products'],
    components:{ProductItem},
  }
</script>