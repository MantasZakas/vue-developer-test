<script setup lang="ts">
import type {IDataTableColumn} from "../interfaces/DataTableInterface"
import { onMounted, ref, computed } from "vue"
import { get } from 'lodash'
import FormCheckbox from "./FormCheckbox.vue"
import { useRoute, useRouter } from "vue-router"

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  selectableRows: false
})

interface Props {
  columns: IDataTableColumn[]
  fetchCallback: () => Promise<object[]>
  selectableRows: boolean
}

const route = useRoute();
const router = useRouter();
const items = ref<any[]>([])
const isLoading = ref<boolean>(false)

// TODO array of selected ids, for implementing other features
// const selectedItems = computed(() => {
//   return items.value
//       .filter(item => item.isSelected)
//       .map(item => item.id)
// });

const allItemsSelected = computed(() => {
  if (!props.selectableRows || items.value.length === 0) {
    return false
  }
  return items.value.every(item => item.isSelected)
});

function fetchData() {
  isLoading.value = true
  items.value = []
  props.fetchCallback().then(response => {
    items.value = response.map(item => ({
      ...item,
      isSelected: false
    }))
  }).finally(() => {
    isLoading.value = false
  })
}

function toggleSelectAll() {
  const newStatus = !allItemsSelected.value
  items.value.forEach(item => {
    item.isSelected = newStatus
  });
}

function sortItems(key: string) {
  if (route.query.sort !== key) {
    router.replace({
      path: route.path,
      query: { ...route.query, sort: key, order: 'asc' }
    })
    return
  }
  if (route.query.order === 'asc') {
    router.replace({
      path: route.path,
      query: { ...route.query, sort: key, order: 'desc' }
    })
    return;
  }
  router.replace({
    path: route.path,
    query: { ...route.query, sort: undefined, order: undefined }
  })
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <slot/>
  <div class="table-responsive datatable">
    <table class="table">
      <thead>
      <tr>
        <th class="checkbox" v-if="props.selectableRows">
          <button
              class="button-checkbox"
              :class="{'button-checkbox--selected': allItemsSelected}"
              @click="toggleSelectAll"
              :aria-label="$t('Select all')"/>
        </th>
        <th v-for="(column, index) in columns" :key="index">
          <div class="d-flex align-items-center gap-1">
            {{ column.title }}
            <button
                class="button-sort"
                :class="{
                   'button-sort--up': route.query.sort === column.key && route.query.order === 'asc',
                   'button-sort--down': route.query.sort === column.key && route.query.order === 'desc',
                }"
                :aria-label="$t('Sort')"
                @click="sortItems(column.key)"
                v-if="column.sortable"/>
          </div>
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-if="isLoading">
        <tr>
          <td :colspan="columns.length + Number(props.selectableRows)" class="text-center">
            {{ $t('Loading') }}
          </td>
        </tr>
      </template>
      <template v-else-if="items && !items.length">
        <tr>
          <td :colspan="columns.length + Number(props.selectableRows)" class="text-center">
            {{ $t('No results were found') }}
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(item, rowIndex) in items"
            :key="rowIndex">
          <td class="checkbox" v-if="props.selectableRows">
            <FormCheckbox v-model:value="item.isSelected"/>
          </td>
          <td v-for="(column, columnIndex) in columns"
              :key="columnIndex">
            <slot
                :name="column.key"
                :item="item"
            />
            <span v-if="!$slots[column.key]">{{ get(item, column.key) }}</span>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

