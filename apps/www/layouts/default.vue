<template>
  <div class="relative flex min-h-screen flex-col">
    <NavHeader />
    <slot />
    <NavFooter />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import NavHeader from "~/components/NavHeader.vue";
import NavFooter from "~/components/PageFooter.vue";

useHead({
  bodyAttrs: {
    class: "min-h-screen bg-background font-sans antialiased",
  },
  htmlAttrs: {
    style: "color-scheme: light;",
  },
});

export default defineComponent({
  components: {
    NavFooter,
    NavHeader,
  },
});
</script>
