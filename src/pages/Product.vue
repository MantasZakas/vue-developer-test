<script setup lang="ts">
import ProductsService from "../services/products.api"
import { useRoute } from "vue-router"
import { onMounted, ref } from "vue"
import { Product } from "../models/Product"
import { useI18n } from "vue-i18n"

const route = useRoute()
const productData = ref<Product | null>(null)
const { t } = useI18n()
const productTitle = ref<string>(t('Loading'))

function fetchProduct() {
  productData.value = null
  ProductsService.getProduct(Number(route.params.id)).then(response => {
    productTitle.value = response.title
    productData.value = new Product(response)
  }).catch(() => {
    productTitle.value = t('Error occurred')
  })
}

onMounted(() => {
  fetchProduct()
})
</script>

<template>
  <h1>{{ productTitle }}</h1>
  <div v-if="productData" class="row">
    <div class="order-lg-2 col-12 col-lg-6">
      <p>{{ productData.description }}</p>
      <p v-for="(image, imageIndex) in productData.images" :key="imageIndex">
        <img :src="image" :alt="productData.title" class="w-100">
      </p>
      <p v-if="productData.meta.qrCode">
        <img :src="productData.meta.qrCode" :alt="productData.title" class="w-100">
      </p>
    </div>
    <div class="order-lg-1 col-12 col-lg-6">
      <p><small><b>{{ t('Created') }}: </b> {{ productData.meta.createdAt }}</small> <small><b>{{ t('Updated') }}: </b> {{ productData.meta.updatedAt }}</small></p>
      <p class="mb-0"><b>{{ t('ID') }}:</b> {{ productData.id }}</p>
      <p class="mb-0"><b>{{ t('SKU') }}:</b> {{ productData.sku }}</p>
      <p class="mb-0"><b>{{ t('Barcode') }}:</b> {{ productData.meta.barcode }}</p>
      <p class="mb-0"><b>{{ t('Category') }}:</b> {{ productData.category }}</p>
      <p class="mb-0"><b>{{ t('Tags') }}:</b> {{ productData.tags }}</p>
      <p class="mb-0"><b>{{ t('Brand') }}:</b> {{ productData.brand }}</p>
      <p class="mb-0"><b>{{ t('Price') }}:</b> {{ productData.price }}</p>
      <p class="mb-0"><b>{{ t('Stock') }}:</b> {{ productData.stock }}</p>
      <p class="mb-0"><b>{{ t('Availability') }}:</b> {{ productData.availabilityStatus }}</p>
      <p class="mb-0"><b>{{ t('Rating') }}:</b> {{ productData.rating }}</p>
      <p class="mb-0"><b>{{ t('Discount') }}:</b> {{ productData.discountPercentage }}</p>
      <p class="mb-0"><b>{{ t('Weight') }}:</b> {{ productData.weight }}</p>
      <p class="mb-0"><b>{{ t('Dimensions') }}:</b> {{ productData.dimensions }}</p>
      <p class="mb-0"><b>{{ t('Minimum order') }}:</b> {{ productData.minimumOrderQuantity }}</p>
      <p class="mb-0"><b>{{ t('Warranty information') }}:</b> {{ productData.warrantyInformation }}</p>
      <p class="mb-0"><b>{{ t('Shipping information') }}:</b> {{ productData.shippingInformation }}</p>
      <p><b>{{ t('Returns policy') }}:</b> {{ productData.returnPolicy }}</p>
      <p v-if="productData.reviews.length"><b>{{ t('Reviews') }}</b>:</p>
      <div v-for="(review, reviewIndex) in productData.reviews" :key="reviewIndex">
        <p class="mb-0">{{ review.reviewerName }} (<a :href="`mailto:${review.reviewerEmail}`">{{ review.reviewerEmail }}</a>)</p>
        <p class="mb-0">{{ review.date }}</p>
        <p><b>{{ review.rating }}:</b> {{ review.comment }}</p>
      </div>
    </div>
  </div>
</template>