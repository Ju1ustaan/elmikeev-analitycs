<script setup lang="ts">
import { navbarModel } from '../model'
</script>

<template>
     <nav class="flex flex-col bg-blue-300 rounded overflow-hidden fixed z-120 w-full md:sticky top-0 -left-full duration-300  h-screen group p-2">
    <RouterLink
      v-for="link in navbarModel"
      :key="link.to"
      :to="link.to"
      class="flex items-center gap-3 px-4 py-2 rounded-md text-left text-blue-900 transition-all group duration-300 ease-in-out
             hover:bg-blue-500 hover:text-white fill-blue-900 hover:fill-white"
    >
     <component :is="link.icon" v-if="link.icon" width="25" height="25" class=" fill-inherit" />
      {{ link.title }}
    </RouterLink>
  </nav>
</template>

<style scoped>
nav a.router-link-exact-active {
    color: white;
    fill: white;
    background: #193db8;
}
</style>