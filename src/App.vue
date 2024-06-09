<script setup lang="ts">
  import ResponsiveProvider from '@contexts/ResponsiveProvider.vue';
  import UserContextProvider from '@contexts/userContext/UserContext.vue'
</script>
<template>
  <div>
    <UserContextProvider>
      <ResponsiveProvider>
        <router-view/>
      </ResponsiveProvider>
    </UserContextProvider>
  </div>
</template>
