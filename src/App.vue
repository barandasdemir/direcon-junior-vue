<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const user = localStorage.getItem('user');
    if (user) {
      store.dispatch('getAccountDetails', user);
    }
  },
};
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
