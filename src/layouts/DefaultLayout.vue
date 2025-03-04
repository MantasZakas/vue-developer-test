<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <div class="page-wrap">
    <Sidebar/>
    <main class="page-content">
      <RouterView v-slot="{ Component }">
        <Component :is="Component"/>
      </RouterView>
    </main>
  </div>
</template>