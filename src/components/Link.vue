<template>
  <router-link :to="to" v-slot="{ href, navigate, isActive }" custom>
    <a :class="{ 'is-outlined': isActive }" @click="navigate" :href="href">
      <slot />
    </a>
  </router-link>
</template>

<script>
export default {
  props: ['to'],
};
</script>

<style lang="scss" scoped>
</style>
