<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import TopBar from "../components/TopBar.vue";
</script>

<template>
  <div class="page-wrap">
    <Sidebar/>
    <main class="page-content">
      <div class="container m-0 p-0">
        <TopBar/>
        <RouterView v-slot="{ Component }">
          <Component :is="Component"/>
        </RouterView>
      </div>
    </main>
  </div>
</template>