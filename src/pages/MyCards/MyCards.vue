<template>
  <div class="w-[100vw] h-full">
    <Header />
    <div class="w-[100%] h-full flex flex-row">
      <Menu v-if="!isTabletOrMobile" />
      <div class="p-[3rem] w-[100%]">
        <div class="w-[100%] flex flex-row items-center justify-between">
          <div class="w-[50%] flex flex-row items-center">
            <p class="text-[2.5rem] font-bold text-darkGrey">Minhas cartas</p>
          </div>
        </div>
        <div class="flex flex-row flex-wrap">
          <template v-for="row in cards" :key="row.id">
            <div class="flex flex-col justify-center items-center mr-[3rem] mt-[4rem]" v-if="row.name.length > 0">
              <Card :name="row.name" :imageUrl="row.imageUrl" />
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, inject, watchEffect } from "vue";
  import Header from '@components/Header/Header.vue'
  import Menu from '@components/Menu/Menu.vue'
  import Card from '@components/Card/Card.vue'
  import { ModelCard } from "@models/Card";
  import { CardService } from "@services/Card/cardService";

  const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
  const cards = ref<ModelCard[]>([]);

  const getCards = async () => {
    const result = await CardService.GetByUser();
    if (result) {
      cards.value = result;
    }
  }

  watchEffect(() => {
    getCards();
  });

</script>

<style>
</style>
