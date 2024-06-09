<template>
  <div class="w-[18.75rem] h-[100vh]">
    <div
      class="w-[18.75rem] h-full border-r border-b border-yellow800 flex flex-col justify-baseline items-baseline p-[3rem]"
    >
      <div class="w-full flex flex-row text-darkGrey text-[1.2rem] mt-[0.5rem]">
        <router-link to="/myCards" class='flex flex-row items-center'>
          <AkHomeAlt1 class="mr-[0.5rem]"/> Minhas cartas
        </router-link>
      </div>
      <div class="w-full flex flex-row text-darkGrey text-[1.2rem] mt-[1rem]">
        <router-link to="/allCards" class='flex flex-row items-center'>
          <FlPlayingCards class="mr-[0.5rem]"/> Cartas para troca
        </router-link>
      </div>
      <div class="w-full flex flex-row text-darkGrey text-[1.2rem] mt-[1rem]">
        <router-link to="/" class='flex flex-row items-center'>
          <FlWindowMultipleSwap class="mr-[0.5rem]"/> Trocas ativas
        </router-link>
      </div>
      <div class="w-full flex flex-row text-darkGrey text-[1.2rem] mt-[1rem]">
        <router-link to="/shop" class='flex flex-row items-center'>
          <BxShoppingBag  class="mr-[0.5rem]"/> Loja
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { AkHomeAlt1, FlPlayingCards, FlWindowMultipleSwap, BxShoppingBag  } from "@kalimahapps/vue-icons";
</script>
<style>
</style>
