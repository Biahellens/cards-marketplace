<script setup lang="ts">
  import { ref, inject } from "vue";

  import Header from '@components/Header/Header.vue'
  import Menu from '@components/Menu/Menu.vue'

  const isTabletOrMobile = inject("isTabletOrMobile", ref(false));

</script>

<template>
  <div class="w-[100vw] h-full">
    <Header />
    <div class="w-[100vw] h-full flex flex-row">
      <Menu v-if="!isTabletOrMobile" />
      <div class="p-[3rem]">
        <p>Todas as cartas</p>
      </div>
    </div>
  </div>
</template>

<style>
</style>
