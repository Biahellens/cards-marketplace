<script setup lang="ts">
import { AkHomeAlt1, FlPlayingCards, FlWindowMultipleSwap, ByMenu, CaCloseLarge } from "@kalimahapps/vue-icons";
import { ref, inject } from "vue";

const isTabletOrMobile = inject("isTabletOrMobile", ref(false));

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="w-full flex flex-col">
    <div
      class="w-[100vw] h-[5rem] bg-yellow800 flex justify-center items-center"
    >
      <div v-if="isTabletOrMobile" class="flex w-full justify-end px-[2rem]">
        <button @click="openModal">
          <ByMenu class="text-[3rem] text-white font-[800]"/>
        </button>
      </div>
    </div>
    <div v-if="isModalOpen" class="w-full h-[100vh] flex">
      <div class="w-full p-[1.5rem]">
        <div class="w-full flex justify-end">
          <button @click="closeModal">
            <CaCloseLarge  class="text-[3rem] text-darkGrey"/>
          </button>
        </div>
        <div class="w-full flex flex-col py-[3rem] px-[1rem]">
          <div class="w-full flex flex-row text-darkGrey text-[1.5rem]">
            <router-link to="/home" class='flex flex-row items-center'>
              <AkHomeAlt1 class="mr-[0.5rem]"/> Minhas cartas
            </router-link>
          </div>
          <div class="w-full flex flex-row text-darkGrey text-[1.5rem] mt-[1rem]">
            <router-link to="/allCards" class='flex flex-row items-center'>
              <FlPlayingCards class="mr-[0.5rem]"/> Cartas
            </router-link>
          </div>
          <div class="w-full flex flex-row text-darkGrey text-[1.5rem] mt-[1rem]">
            <router-link to="/" class='flex flex-row items-center'>
              <FlWindowMultipleSwap class="text-[1.25rem] mr-[0.5rem]"/> Trocas ativas
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
