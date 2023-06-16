<template>
  <main>
    <slot/>
  </main>
</template>

<script lang="ts">
useHead({
  bodyAttrs: {
    class: 'min-h-screen bg-background font-sans antialiased'
  },
  htmlAttrs: {
    style: 'color-scheme: light;'
  }
})
</script>
