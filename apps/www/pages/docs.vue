<template>
  <div class="flex-1">
    <div
      class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <DocumentSidebar />
      <main
        class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"
      >
        <NuxtPage />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import DocumentSidebar from "~/components/DocumentSidebar.vue";
</script>
