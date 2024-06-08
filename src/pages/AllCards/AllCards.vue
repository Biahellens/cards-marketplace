<template>
  <div class="w-[100vw] h-full">
    <Header />
    <div class="w-[100%] h-full flex flex-row">
      <Menu v-if="!isTabletOrMobile" />
      <div class="p-[3rem] w-[100%]">
        <div class="w-[100%] flex flex-row items-center justify-between">
          <div class="w-[50%] flex flex-row items-center">
            <p class="text-[2.5rem] font-bold text-darkGrey">Cartas para troca</p>
          </div>
        </div>
        <div class="flex flex-row flex-wrap">
          <template v-for="row in cards" :key="row.id">
            <div class="flex flex-col justify-center items-center mr-[3rem]" v-if="row.name.length > 0">
              <Card :name="row.name" :imageUrl="row.imageUrl" />
              <button @click="selectCard" class="flex flex-row justify-center items-center mt-[2rem] bg-darkGrey h-[3rem] w-[8rem] rounded-sm text-[1rem] text-white font-medium">
                <ChSwapHorizontal class="mr-[0.5rem]"/> Trocar
              </button>
            </div>
          </template>
        </div>
      </div>
      <div v-if="isModalOpen" class="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-50">
        <div class="flex items-center justify-center mt-[10%]">
          <div class="relative bg-white w-[50rem] min-h-[30rem] p-[3rem] rounded shadow-lg">
            <div class="absolute top-0 right-0 p-2">
              <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
                <ClCloseMd  />
              </button>
            </div>
            <div>
              <p class="text-[1.5rem] text-darkGrey font-medium" >Por qual carta você deseja trocar ?</p>
              <div class="mt-[2rem] flex flex-row flex-wrap">
                <template v-for="row in meCards" :key="row.id">
                  <div class="flex flex-col justify-center items-center mr-[3rem]" v-if="row.name.length > 0">
                    <div class="border border-darkGrey w-[13.7rem] h-[7.5rem] rounded-sm flex flex-col justify-center items-center">
                      <p>{{row.name}}</p>
                      <button class="flex flex-row justify-center items-center mt-[0.5rem] bg-darkGrey h-[3rem] w-[8rem] rounded-sm text-[1rem] text-white font-medium" >
                        <ChSwapHorizontal class="mr-[0.5rem]"/>
                        Trocar
                      </button>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
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
  import { CardService } from "@services/Card/userCard";
  import { ChSwapHorizontal, ClCloseMd  } from "@kalimahapps/vue-icons";

  const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
  const isModalOpen = ref(false);
  const selectedCard = ref<string>('');

  const cards = ref<ModelCard[]>([]);
  const meCards = ref<ModelCard[]>([]);

  const getCards = async () => {
    const result = await CardService.GetAll();
    if (result) {
      const meResult = await CardService.GetByUser();
      if (meResult) {
        meCards.value = meResult;
        cards.value = result.list.filter((card: ModelCard) => !meCards.value.some(meCard => meCard.id === card.id));
      } else {
        cards.value = result.list;
      }
    }
  }

  const selectCard = (cardId: string) => {
    selectedCard.value = cardId
    isModalOpen.value = true;
  }

  const closeModal = () => {
    isModalOpen.value = false;
  }

  watchEffect(() => {
    getCards();
  });

</script>

<style>
</style>
