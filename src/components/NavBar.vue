<template>
  <nav class="navbar is-transparent mt-3">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <p class="is-size-3">🦕</p>
      </a>
      <div class="navbar-burger" data-target="navbar-top">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar-top" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item" href="/"> Home </a>
        <a class="navbar-item" @click.prevent="scrollToPricing"> Pricing </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <Link v-if="!user" to="/register">
                <button class="button is-primary">Register</button>
              </Link>
              <button v-else class="button is-danger" @click="logout">Logout</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Link from '@/components/Link.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  components: {
    Link,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.details);

    const scrollToPricing = () => {
      const elem = document.querySelector('#pricing');
      window.scrollTo(0, elem.offsetTop);
      store.dispatch('logEvent', 'navbarClick');
    };

    const logout = () => {
      store.commit('logout');
    };

    return {
      scrollToPricing,
      user,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
#navbar-top > div.navbar-start > a {
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #3e8ed0;
  }
}
</style>
