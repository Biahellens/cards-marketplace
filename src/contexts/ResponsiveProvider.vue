<template>
  <slot />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, provide } from "vue";

const isTabletOrMobile = ref(false);

const updateIsTabletOrMobile = (matches: boolean) => {
  isTabletOrMobile.value = matches;
};

onMounted(() => {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  updateIsTabletOrMobile(mediaQuery.matches);
  const handler = (e: MediaQueryListEvent) => updateIsTabletOrMobile(e.matches);
  mediaQuery.addListener(handler);
  onUnmounted(() => {
    mediaQuery.removeListener(handler);
  });
});

provide("isTabletOrMobile", isTabletOrMobile);
</script>
