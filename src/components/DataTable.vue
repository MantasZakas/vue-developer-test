<script setup lang="ts">
import type { IDataTableColumn } from "../interfaces/DataTableInterface"
import {onMounted, ref} from "vue"
import _, { get } from 'lodash'

const props = withDefaults(defineProps<Props>(), {
  columns: () => []
})

interface Props {
  columns: IDataTableColumn[]
  fetchCallback: () => Promise<[]>
}

const items = ref<any[]>([])
const isLoading = ref<boolean>(false)

function fetchData() {
  isLoading.value = true
  items.value = []
  props.fetchCallback().then(response => {
    items.value = response
  }).finally(() => {
    isLoading.value = false
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
        <th v-for="(column, index) in columns" :key="index">
          {{ column.title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <template v-if="isLoading">
        <tr>
          <td :colspan="columns.length" class="text-center">
            {{ $t('Loading') }}
          </td>
        </tr>
      </template>
      <template v-else-if="items && !items.length">
        <tr>
          <td :colspan="columns.length" class="text-center">
            {{ $t('No results were found') }}
          </td>
        </tr>
      </template>
      <template v-else>
        <tr v-for="(item, rowIndex) in items"
            :key="rowIndex">
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

