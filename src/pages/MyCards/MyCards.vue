<template>
  <div class="w-[100vw] h-full">
    <Header />
    <div class="w-[100%] h-full flex flex-row">
      <Menu v-if="!isTabletOrMobile" />
      <div class="p-[3rem] w-[100%]">
        <div class="w-[100%] flex flex-row justify-between items-center">
          <p class="text-[2.5rem] font-bold text-darkGrey" >Minhas Cartas</p>
        </div>
        <div class="mt-[4rem]" >
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, inject } from "vue";

  import Header from '@components/Header/Header.vue'
  import Menu from '@components/Menu/Menu.vue'
  import Card from '@components/Card/Card.vue'

  const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
</script>

<style>
</style>
