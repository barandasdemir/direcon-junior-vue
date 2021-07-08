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
                <input class="input" type="email" placeholder="foo@bar.com" />
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
                <input class="input" type="password" placeholder="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button is-primary is-size-4">Submit</button>

    <p class="subtitle mt-6">Scratch that, lets <a href="/">go back</a></p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
