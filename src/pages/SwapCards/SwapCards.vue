<template>
  <div class="w-[100vw] h-full">
    <Header />
    <div class="w-[100%] h-full flex flex-row">
      <Menu v-if="!isTabletOrMobile" />
      <div class="p-[3rem] w-[100%]">
        <div class="w-[100%] flex flex-row items-center justify-between">
          <div class="w-[50%] flex flex-row items-center">
            <p class="text-[2.5rem] font-bold text-darkGrey">Trocas Ativas</p>
          </div>
        </div>
        <div class="w-full flex flex-row flex-wrap">
          <template v-for="card in cards" :key="card.id">
            <div
              class="flex flex-col justify-center items-center mr-[3rem] mt-[3rem] border border-darkGrey rounded-sm px-[1rem] py-[2rem]"
            >
              <div class="w-full flex flex-row justify-between items-center">
                <div
                  v-for="(tradeCard, index) in card.tradeCards"
                  :key="index"
                  class="flex flex-row"
                >
                  <div
                    v-if="tradeCard.type === 'OFFERING'"
                    class="ml-[0.5rem] mr-[0.5rem]"
                  >
                    <div v-if="tradeCard.card.name.length > 0">
                      <Card
                        :name="tradeCard.card.name"
                        :imageUrl="tradeCard.card.imageUrl"
                      />
                    </div>
                  </div>
                  <div
                    v-else-if="tradeCard.type === 'RECEIVING'"
                    class="mr-[0.5rem] ml-[0.5rem]"
                  >
                    <div v-if="tradeCard.card.name.length > 0">
                      <Card
                        :name="tradeCard.card.name"
                        :imageUrl="tradeCard.card.imageUrl"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-[2rem]" v-if="card.userId === userId">
                <button
                  @click="selectCard(card.id)"
                  class="flex flex-row items-center justify-center bg-darkGrey h-[3rem] w-[8rem] rounded-sm text-[1rem] text-white font-medium"
                >
                  <ChSwapHorizontal class="mr-[0.5rem]" /> Desfazer
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div
        v-if="isModalOpen"
        class="fixed z-10 inset-0 overflow-y-auto bg-gray-800 bg-opacity-50"
      >
        <div class="flex items-center justify-center mt-[10%]">
          <div
            class="relative bg-white w-[50rem] min-h-[30rem] p-[3rem] rounded shadow-lg"
          >
            <div class="absolute top-0 right-0 p-2">
              <button
                @click="closeModal"
                class="text-gray-500 hover:text-gray-700"
              >
                <ClCloseMd />
              </button>
            </div>
            <div>
              <p class="text-[1.5rem] text-darkGrey font-medium">
                Você realmente deseja desfazer a troca ?
              </p>
              <div class="mt-[2rem] flex flex-row flex-wrap">
                <button
                  @click="closeModal"
                  class="flex flex-row justify-center items-center bg-darkGrey h-[3rem] w-[8rem] rounded-sm text-[1rem] text-white font-medium"
                >
                  Cancelar
                </button>
                <button
                  @click="deleteSwap(selectedCard)"
                  class="flex flex-row justify-center items-center bg-darkGrey h-[3rem] w-[8rem] rounded-sm text-[1rem] text-white font-medium"
                >
                  Desfazer
                </button>
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
import Header from "@components/Header/Header.vue";
import Menu from "@components/Menu/Menu.vue";
import Card from "@components/Card/Card.vue";
import { ChSwapHorizontal, ClCloseMd } from "@kalimahapps/vue-icons";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Swap } from "@models/Swap";
import { SwapService } from "@services/Swap/swapService";
import { useUserContext } from "@contexts/userContext/UserContext.vue";

const isTabletOrMobile = inject("isTabletOrMobile", ref(false));
const isModalOpen = ref(false);
const selectedCard = ref<string>("");

const { user } = useUserContext();
const userId = user ? user.value.id : "erro";

const cards = ref<Swap[]>([]);

const getCards = async () => {
  const result = await SwapService.Get();
  if (result) {
    cards.value = result.list;
  }
};

const deleteSwap = async (tradeId: string) => {
  try {
    await SwapService.Delete(tradeId);
    toast.success("Troca esfeita com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  } catch (error) {
    toast.error("Ocorreu um erro ao desfazer troca.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }
};

const selectCard = (cardId: string) => {
  selectedCard.value = cardId;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

watchEffect(() => {
  getCards();
});
</script>

<style></style>
