<template>
  <div>
    <aside>
      <nav>
        <ul>
          <li v-for="link in links" :key="link.name">
            <RouterLink :to="link.path">{{ link.name }}</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
    <main>
      <RouterView v-slot="{ Component }">
        <Component :is="Component"/>
      </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const links = ref([
  {name: 'Home', path: '/'},
  {name: 'Product', path: '/product'},
]);
</script>