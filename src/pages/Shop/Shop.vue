<template>
  <div class="w-[100vw] h-full">
    <Header />
    <div class="w-[100%] h-full flex flex-row">
      <Menu v-if="!isTabletOrMobile" />
      <div class="p-[3rem] w-[100%]">
        <div class="w-[100%] flex flex-row items-center justify-between">
          <div class="w-[50%] flex flex-row items-center">
            <p class="text-[2.5rem] font-bold text-darkGrey">Loja</p>
            <p class="ml-[2rem] text-[1.5rem] font-medium text-darkGrey">cartas selecionadas: {{ selectedCards.length }}</p>
          </div>
          <div>
            <button @click="handleBuyCards" class="flex flex-row items-center justify-center bg-yellow800 h-[3rem] w-[10rem] rounded-sm text-[1.2rem] text-white font-medium">
              <ClAddPlus class="mr-[0.5rem]"/>
              Adicionar
            </button>
          </div>
        </div>
        <div class="flex flex-row flex-wrap">
          <template v-for="row in cards" :key="row.id">
            <div class="flex flex-col justify-center items-center mr-[3rem]" v-if="row.name.length > 0">
              <Card :name="row.name" :imageUrl="row.imageUrl" />
              <button class="mt-[2rem] bg-darkGrey h-[3rem] w-[8rem] rounded-sm text-[1rem] text-white font-medium" @click="selectCard(row.id)">
                Selecionar
              </button>
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
  import { BuyCards, ModelCard } from "@models/Card";
  import { CardService } from "@services/Card/userCard";
  import { ClAddPlus } from "@kalimahapps/vue-icons";
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
  const cards = ref<ModelCard[]>([]);
  const selectedCards = ref<string[]>([]);

  const getCards = async () => {
    const result = await CardService.GetAll()
    if(result){
      cards.value = result.list
    }
  }

  const selectCard = (cardId: string) => {
    if (!selectedCards.value.includes(cardId)) {
      selectedCards.value.push(cardId);
    }
  }

  watchEffect(() => {
    getCards();
  });

  const handleBuyCards = async () => {
  if(selectedCards.value.length === 0) {
    toast.warn("Você precisa escolher uma carta", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
    return;
  }

  const cardsBody: BuyCards = {
    cardIds: selectedCards.value
  };

  try {
    await CardService.Post(cardsBody)

    toast.success("Carta(s) adicionada(s) com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });

  } catch(error){
    toast.error("Ocorreu um erro ao adicionar carta(s).", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
}
</script>

<style>
</style>
