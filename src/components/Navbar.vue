<template>
  <header style="padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #2a2a2a;">
    <h1 style="font-family: 'Playfair Display', serif; font-size: 1.2rem; letter-spacing: 1px;">
      Maya's <span style="color: var(--color-accent)">Portfolio</span>
    </h1>

    <nav style="display: flex; gap: 1.5rem; font-family: 'Inter', sans-serif; font-size: 0.95rem;">
      <RouterLink 
        to="/" 
        style="text-decoration: none; color: #f5f5f5;" 
        active-class="active-link"
      >
        Home
      </RouterLink>

      <RouterLink 
        to="/gallery" 
        style="text-decoration: none; color: #f5f5f5;" 
        active-class="active-link"
      >
        Gallery
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
.active-link {
  color: var(--color-accent);
  font-weight: 600;
}
</style>
