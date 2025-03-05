<script setup lang="ts">
import DataTable from "../components/DataTable.vue"
import FormInput from "../components/FormInput.vue"
import { ref } from "vue"

const productTitle = ref<string>('')
</script>

<template>
  <h1>{{ $t('Products Information') }}</h1>
  <DataTable>
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
            v-model:value="productTitle"/>
      </div>
    </div>
  </DataTable>
</template>

