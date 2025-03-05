<script setup lang="ts">

const props = withDefaults(defineProps<Props>(), {
  value: false,
  label: '',
})

interface Props {
  value?: boolean
  label?: string
}

const emit = defineEmits(['update:value'])

</script>

<template>
  <div class="form-item">
    <label class="d-flex">
      <input
          :aria-label="props.label"
          type="checkbox"
          :checked="props.value"
          @input="$emit('update:value', ($event.target as HTMLInputElement).checked)">
      <i/>
    </label>
  </div>
</template>

