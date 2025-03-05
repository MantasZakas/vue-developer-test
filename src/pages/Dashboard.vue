<script setup lang="ts">
import DataTable from "../components/DataTable.vue"
import FormInput from "../components/FormInput.vue"
import { ref } from "vue"
import { Product } from "../models/Product"
import ProductsService from "../services/products.api"
import { useI18n } from "vue-i18n"
import type { IDataTableColumn } from "../interfaces/DataTableInterface"
import { AxiosError } from "axios"
import { ERoute } from '../router/utils'

const { t } = useI18n()
const productTitle = ref<string>('')
const productBrand = ref<string>('')
const columns: IDataTableColumn[] = [
  { title: t('Title'), key: "title" },
  { title: t('Category'), key: "category" },
  { title: t('Brand'), key: "brand" },
  { title: t('Price'), key: "price" },
  { title: t('Stock'), key: "stock" },
  { title: t('Rating'), key: "rating" }
]

async function fetchProducts():Promise<Product[]> {
  try {
    const response = await ProductsService.getProducts()
    return response.products.map(
        (productResponseItem) => new Product(productResponseItem)
    )
  } catch (error: unknown) {
    let errorMessage = t('Error occurred')
    if (error instanceof AxiosError && error?.response?.data?.message) {
      errorMessage = error.response.data.message
    }
    console.log(errorMessage)
    throw (error)
  }
}
</script>

<template>
  <h1>{{ $t('Products Information') }}</h1>
  <DataTable
      :columns="columns"
      :fetch-callback="fetchProducts">
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
    <template #title="{ item }">
      <RouterLink :to="{ name: ERoute.product, params: { id: item.id } }">
        {{ item.title }}
      </RouterLink>
    </template>
  </DataTable>
</template>

