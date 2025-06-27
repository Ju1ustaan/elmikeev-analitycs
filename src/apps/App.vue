<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/widgets/navbar/ui/Navbar.vue'
import Contacts from '@/shared/ui/Contacts.vue';
</script>

<template>
    <div class="grid grid-cols-12 gap-5">
      <div class="col-span-12 py-5 px-6 bg-blue-800">
        <Contacts/>
      </div>
      <div class="col-span-2">
        <Navbar/>
      </div>
      <div class="col-span-10">
      <RouterView />
      </div>
    </div>
</template>

<style scoped>




</style>
