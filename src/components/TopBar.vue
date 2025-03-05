<script setup lang="ts">
import FormInput from "./FormInput.vue"
import {useRoute, useRouter} from 'vue-router'
import { ref, onMounted, watch  } from "vue"
import { debounce } from 'lodash'
import notificationIcon from '../assets/icons/notification.svg'
import avatarPlaceholder from '../assets/images/avatar-placeholder.jfif'

const route = useRoute();
const router = useRouter();
const showSearchBar = route.meta?.showSearch ?? false
const searchValue = ref<string>('')
const focusOnSearch = ref<boolean>(false)
const notificationActive = ref<boolean>(true)

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
    <div class="row justify-content-between">
      <div class="order-md-2 col-12 col-md flex-grow-0 flex-shrink-1 mb-34 mb-md-0">
        <div class="header-controls">
          <button class="button-icon"
                  :class="{'button-icon--notify': notificationActive}"
                  :aria-label="$t('Notification')">
            <img :src="notificationIcon" :alt="$t('Notification')"/>
          </button>
          <button class="button-avatar"
                  :aria-label="$t('Username')">
            <img :src="avatarPlaceholder" :alt="$t('Username')"/>
          </button>
          <slot name="burger"/>
        </div>
      </div>
      <div class="order-md-1 col-12 col-md-8 col-lg-7">
        <FormInput
            v-if="showSearchBar"
            :placeholder="$t('Search')"
            :is-search="true"
            :focus-on-load="focusOnSearch"
            v-model:value="searchValue"/>
      </div>
    </div>
  </header>
</template>

