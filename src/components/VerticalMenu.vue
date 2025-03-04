<script setup lang="ts">
import { ERoute } from '../router/utils'
import logo from '../assets/images/logo.svg'
import dashboardIcon from '../assets/icons/dashboard.svg'
import labIcon from '../assets/icons/lab.svg'
import appointmentIcon from '../assets/icons/appointment.svg'
import medicineIcon from '../assets/icons/medicine.svg'
import messageIcon from '../assets/icons/message.svg'
import paymentIcon from '../assets/icons/payment.svg'
import settingsIcon from '../assets/icons/settings.svg'
import helpIcon from '../assets/icons/help.svg'
import { ref } from "vue";
import { INavigationItem } from "../interfaces/NavigationInterface";
import { useI18n } from 'vue-i18n'

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

