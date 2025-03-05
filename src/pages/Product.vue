<script setup lang="ts">
import ProductsService from "../services/products.api"
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"
import type { IProductResponseItem } from "../interfaces/ProductInterface";

const route = useRoute()
const productData = ref<IProductResponseItem | null>(null)

function fetchProduct() {
  productData.value = null
  ProductsService.getProduct(Number(route.params.id)).then(response => {
    productData.value = response
  })
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <pre v-if="productData">
    {{ productData }}
  </pre>
</template>