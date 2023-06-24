<script setup lang="ts">
import ExampleHero from "~/components/ExampleHero.vue"
import ExampleLinks from "~/pages/examples/components/ExampleLinks.vue"
import PlaygroundPage from "~/pages/examples/playground/index.vue"

const online = useOnline()
</script>

<template>
  <div class="flex-1">
    <div class="container relative pb-10">
      <ExampleHero />
      <section>
        <ExampleLinks />
        <PlaygroundPage />
      </section>
    </div>
  </div>
</template>
