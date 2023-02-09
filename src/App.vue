<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :color="filterColor"
      />

      <section class="catalog">
        <ProductList :products="products" />

        <BasePagination
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import products from "./data/products.js";
import ProductList from "./components/ProductList.vue";
import BasePagination from "./components/BasePagination.vue";
import ProductFilter from "./components/ProductFilter.vue";

export default {
  name: "App",
  components: { ProductList, BasePagination, ProductFilter },
  data() {
    return {
      page: 1,
      productsPerPage: 3,

      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: "",
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price > this.filterPriceFrom
        );
      }

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price < this.filterPriceTo
        );
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(
          (product) => product.categoryId == this.filterCategoryId
        );
      }

      if (this.filterColor) {
        let tempArr = [];
        filteredProducts.forEach((itemArr) => {
          itemArr.color.forEach((el) => {
            if (el == this.filterColor) {
              tempArr.push(itemArr);
            }
          });
        });
        filteredProducts = tempArr;
      }

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
