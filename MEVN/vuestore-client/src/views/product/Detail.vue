<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img :src="product.imageUrl" :alt="product.name">
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp.{{ product.price }}</h3>
        <p>Avarage Rating: {{ product.averageRating }}</p>
        <button id="add-to-cart">
          Add to Cart
        </button>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <NotFound v-else />
</template>

<script>
import { products } from '../../data-seed';
import NotFound from '../errors/404.vue';

export default {
  components: {
    NotFound
  },
  data() {
    return {
      products
    }
  },
  computed: {
    product() {
      return this.products.find((p) => {
        return p.id === this.$route.params.id
      })
    }
  },
  mounted() {
    console.log(this.product)
  }
}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>