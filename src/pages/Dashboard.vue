<script setup lang="ts">
import DataTable from "../components/DataTable.vue"
import FormInput from "../components/FormInput.vue"
import { ref, onMounted } from "vue"
import { Product } from "../models/Product"
import ProductsService from "../services/products.api"

const productTitle = ref<string>('')
const productBrand = ref<string>('')
const products = ref<Product[] | null>(null)

function fetchProducts() {
  products.value = []
  ProductsService.getProducts().then(response => {
    response.products.forEach(productResponseItem => {
      products.value.push(new Product(productResponseItem))
    })
  })
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <h1>{{ $t('Products Information') }}</h1>
  <pre>{{products}}</pre>
  <DataTable v-if="products">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-3 mb-34">
        <FormInput
            :label="$t('Title')"
            :placeholder="$t('Enter Title')"
            v-model:value="productTitle"/>
      </div>
      <div class="col-12 col-md-6 col-lg-3 mb-34">
        <FormInput
            :label="$t('Brand')"
            :placeholder="$t('Enter Brand')"
            v-model:value="productBrand"/>
      </div>
    </div>
  </DataTable>
</template>

