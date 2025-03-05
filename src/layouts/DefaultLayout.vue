<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue"
import TopBar from "../components/TopBar.vue"
import { ref } from "vue"

const burgerActive = ref<boolean>(false)
</script>

<template>
  <div class="page-wrap">
    <Sidebar :class="{'sidebar-wrap--active': burgerActive}"/>
    <main class="page-content">
      <div class="container m-lg-0 p-0">
        <TopBar>
          <template #burger>
            <button
                class="header-burger"
                :class="{'header-burger--active': burgerActive}"
                @click="burgerActive = !burgerActive">
              <span/><span/><span/>
            </button>
          </template>
        </TopBar>
        <RouterView v-slot="{ Component }">
          <Component :is="Component"/>
        </RouterView>
      </div>
    </main>
  </div>
</template>