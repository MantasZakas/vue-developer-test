<script setup lang="ts">
import { INavigationItem } from "../interfaces/NavigationInterface"

const props = defineProps<Props>()

interface Props {
  menuItems: INavigationItem[]
  menuLabel: string
}
</script>

<template>
    <nav class="sidebar-nav" :aria-label="props.menuLabel">
      <ul>
        <li v-for="menuItem in props.menuItems" :key="menuItem.name">
          <RouterLink :to="{name: menuItem.route}">
            <img :src="menuItem.icon" :alt="menuItem.name"/>
            {{ menuItem.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
</template>

