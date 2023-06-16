<template>
  <main>
    <slot/>
    <!--    <Footer />-->
    <!--    <div class="mx-auto mt-5 text-center text-sm opacity-25">-->
    <!--      [Default Layout]-->
    <!--    </div>-->
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
