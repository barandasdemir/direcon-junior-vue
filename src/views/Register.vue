<template>
  <div class="container has-text-centered mt-6 pt-6">
    <p class="title pb-3">Time to register!</p>
    <p class="subtitle">We'd like to know your</p>

    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">E-Mail</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" v-model="email" type="email" placeholder="foo@bar.com" />
              </p>
            </div>
          </div>
        </div>

        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Password</label>
          </div>
          <div class="field-body">
            <div class="field">
              <p class="control">
                <input class="input" v-model="password" type="password" placeholder="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button is-primary is-size-4" @click="submitForm">Submit</button>

    <p v-if="err" class="subtitle has-text-danger mt-3">{{ err }}</p>

    <p class="subtitle mt-6">Scratch that, lets <a href="/">go back</a></p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const email = ref('');
    const password = ref('');
    const err = ref(null);

    const submitForm = () => {
      store
        .dispatch('register', {
          email: email.value,
          password: password.value,
        })
        .then(() => {
          const { error } = store.state;
          if (error === '') {
            router.push('/');
          } else {
            err.value = 'E-mail already in use 😟';
          }
        });
    };

    return {
      email,
      password,
      submitForm,
      err,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
