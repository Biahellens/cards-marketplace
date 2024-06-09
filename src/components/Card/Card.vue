<template>
  <div class="w-[20rem] h-[26.25rem] border-2 border-darkGrey rounded-lg">
    <div
      class="h-[21.25rem]  flex flex-col justify-center items-center"
    >
      <img :src="imageUrl" class="h-[20rem]"/>
    </div>
    <div class="bg-darkGrey h-[5rem] rounded-b-lg flex items-center" >
      <p class="text-white text-[1.1rem] ml-[1rem]" >{{ name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';
  import { ModelCard } from '@models/Card';

  const props = defineProps<Pick<ModelCard, 'name' | 'imageUrl'>>();

  const { name, imageUrl } = props;

</script>

<style>
</style>
