<template>
  <section class="hero is-warning is-fullheight">
    <div class="hero-head">
      <NavBar />
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="is-size-3">Ready to start? <span class="has-text-info">It's free!</span></p>
        <Link to="/register">
          <button class="mt-5 button is-size-3 is-primary is-rounded">Register Now!</button>
        </Link>
      </div>
    </div>
  </section>

  <section class="section is-medium">
    <h1 class="title">Hipster ipsum</h1>
    <h2 class="subtitle">
      I'm baby venmo etsy PBR&B bespoke. Snackwave marfa helvetica forage. Post-ironic ramps marfa
      everyday carry lomo swag. Authentic hexagon cardigan, tumeric DIY jianbing brooklyn craft
      beer. Unicorn subway tile blog typewriter truffaut, fam pitchfork portland street art seitan
      messenger bag. Poutine cred vinyl tacos tote bag leggings. Portland beard banjo flexitarian
      man braid XOXO seitan. Dummy text? More like dummy thicc text, amirite?
    </h2>
  </section>

  <section class="section has-background-info has-text-right">
    <h1 class="title has-text-info-light">Some more hipster ipsum</h1>
    <h2 class="subtitle has-text-info-light">
      I'm baby unicorn fingerstache vaporware, mixtape photo booth hexagon tattooed polaroid bicycle
      rights lyft kombucha actually chambray. Austin live-edge drinking vinegar, godard activated
      charcoal lo-fi palo santo cornhole street art listicle slow-carb. Umami distillery woke 8-bit,
      twee dreamcatcher chartreuse vape street art cronut deep v snackwave put a bird on it.
      Aesthetic stumptown prism green juice banjo iPhone venmo. Pork belly shoreditch cred tumblr,
      normcore kogi activated charcoal pug readymade. Dummy text? More like dummy thicc text,
      amirite?
    </h2>
  </section>

  <PricingTable />

  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Some landing page</strong> by <a href="https://barandasdemir.github.io">Baran Dasdemir</a>. The source code is
        licensed <a href="https://opensource.org/licenses/GPL-3.0">GPLv3</a>. The website
        content is licensed
        <a href="http://creativecommons.org/licenses/by-sa/4.0/">CC BY SA 4.0</a>.
      </p>
    </div>
  </footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Link from '@/components/Link.vue';
import PricingTable from '@/components/PricingTable.vue';

export default {
  components: {
    NavBar,
    Link,
    PricingTable,
  },
};
</script>

<style lang="scss">
</style>
