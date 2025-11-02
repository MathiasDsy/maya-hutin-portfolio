<template>
  <Navbar />
  <RouterView />
  <FooterBar />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterBar from './components/Footerbar.vue'
</script>
