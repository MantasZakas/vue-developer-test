<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import TopBar from "../components/TopBar.vue";
</script>

<template>
  <div class="page-wrap">
    <Sidebar/>
    <main class="page-content">
      <TopBar/>
      <RouterView v-slot="{ Component }">
        <Component :is="Component"/>
      </RouterView>
    </main>
  </div>
</template>