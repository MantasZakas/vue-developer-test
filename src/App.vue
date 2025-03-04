<script setup lang="ts">
console.log()
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Component
        :is="Component"
        :key="route"
    />
  </RouterView>
</template>