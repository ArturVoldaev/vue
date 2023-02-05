<template>
  <ul class="catalog__list">
    <li class="catalog__item" v-for="(product, index) in products" :key="index">
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