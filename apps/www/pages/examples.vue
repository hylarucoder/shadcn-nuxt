<template>
  <div class="flex-1">
    <div class="container relative pb-10">
      <ExampleHero />
      <section>
        <ExampleLinks />
        <NuxtPage />
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import ExampleHero from "~/components/ExampleHero.vue";
import ExampleLinks from "~/pages/examples/components/ExampleLinks.vue";
</script>
