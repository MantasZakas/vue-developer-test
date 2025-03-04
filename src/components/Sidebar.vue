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
import { ref } from "vue"
import { INavigationItem } from "../interfaces/NavigationInterface"
import { useI18n } from 'vue-i18n'
import VerticalMenu from "./VerticalMenu.vue"

const { t } = useI18n()
const links = ref<INavigationItem[]>([
  { name: t('Dashboard'), route: ERoute.dashboard, icon: dashboardIcon },
  { name: t('Lab Test'), route: ERoute.labTest, icon: labIcon },
  { name: t('Appointment'), route: ERoute.appointment, icon: appointmentIcon },
  { name: t('Medicine Order'), route: ERoute.medicineOrder, icon: medicineIcon },
  { name: t('Message'), route: ERoute.message, icon: messageIcon },
  { name: t('Payment'), route: ERoute.payment, icon: paymentIcon },
  { name: t('Settings'), route: ERoute.settings, icon: settingsIcon },
]);

const bottomLinks = ref<INavigationItem[]>([
  { name: t('Help'), route: ERoute.help, icon: helpIcon }
])
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-top">
      <RouterLink
          class="sidebar-top__logo"
          :to="{name: ERoute.dashboard}"
          :aria-label="$t('Home')" >
        <img :src="logo" :alt="$t('Sales')"/>
      </RouterLink>
    </div>
    <div class="sidebar-body">
      <VerticalMenu :menu-items="links" :menu-label="$t('Primary navigation')"/>
    </div>
    <div class="sidebar-bottom">
      <VerticalMenu :menu-items="bottomLinks" :menu-label="$t('Bottom navigation')"/>
    </div>
  </aside>
</template>

