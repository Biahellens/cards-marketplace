<script setup lang="ts">
  import ResponsiveProvider from '@contexts/ResponsiveProvider.vue';
</script>
<template>
  <div>
    <ResponsiveProvider>
      <router-view/>
    </ResponsiveProvider>
  </div>
</template>
