<template>
  <div>
    <a class="catalog__pic" href="#">
      <img :src="image" :alt="title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ price }} ₽
    </span>

    <ul class="colors colors--black">
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" value="#73B6EA" checked="">
          <span class="colors__value" style="background-color: #73B6EA;">
          </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" value="#8BE000">
          <span class="colors__value" style="background-color: #8BE000;">
          </span>
        </label>
      </li>
      <li class="colors__item">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1" value="#222">
          <span class="colors__value" style="background-color: #222;">
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['image', 'title', 'price']
}
</script>