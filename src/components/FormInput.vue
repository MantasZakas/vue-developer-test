<script setup lang="ts">
import { watch, ref } from 'vue'

const props = withDefaults(defineProps<Props>(), {
  value: '',
  isSearch: false,
  placeholder: '',
  label: '',
  focusOnLoad: false
})

interface Props {
  value?: string | number
  isSearch: boolean
  placeholder: string
  label?: string
  focusOnLoad?: boolean
}

const emit = defineEmits(['update:value'])
const inputRef = ref<HTMLInputElement | null>(null)

watch(() => props.focusOnLoad, (newVal) => {
  if (newVal && inputRef.value) {
    inputRef.value?.focus()
  }
})
</script>

<template>
  <div class="form-item" :class="{'form-item--search': props.isSearch}">
    <label>
      <span v-if="props.label">
        {{ props.label }}
      </span>
      <input
          ref="inputRef"
          type="text"
          :placeholder="props.placeholder"
          :value="props.value"
          @input="$emit('update:value', ($event.target as HTMLInputElement).value)">
    </label>
  </div>
</template>

