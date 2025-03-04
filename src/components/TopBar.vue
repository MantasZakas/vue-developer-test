<script setup lang="ts">
import FormInput from "./FormInput.vue"
import {useRoute, useRouter} from 'vue-router'
import { ref, onMounted, watch  } from "vue"
import { debounce } from 'lodash'

const route = useRoute();
const router = useRouter();
const showSearchBar = route.meta?.showSearch ?? false
const searchValue = ref<string>('')
const focusOnSearch = ref<boolean>(false)

onMounted(() => {
  searchValue.value = route.query.s as string | ''
  focusOnSearch.value = !!searchValue.value
})

const updateUrl = debounce((newValue: string) => {
  router.replace({
    path: route.path,
    query: { ...route.query, s: newValue || undefined }
  })
}, 500);

watch(searchValue, (newValue) => {
  updateUrl(newValue)
})
</script>

<template>
  <header class="header">
    <div class="flex-grow-1">
      <FormInput
          v-if="showSearchBar"
          :placeholder="$t('Search')"
          :is-search="true"
          :focus-on-load="focusOnSearch"
          v-model:value="searchValue"/>
    </div>
    <div>
      placeholder
    </div>
  </header>
</template>

