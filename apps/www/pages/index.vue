<script setup lang="ts">
definePageMeta({
  layout: "default",
});
import PlaygroundPage from "~/pages/examples/playground/index.vue";

const online = useOnline();
</script>

<template>
  <PlaygroundPage />
</template>
