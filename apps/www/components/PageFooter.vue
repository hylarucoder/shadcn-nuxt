<script>
export default {
  name: "PageFooter",
};
</script>

<template>
  <footer class="border-t py-6 md:py-0">
    <div
      class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row"
    >
      <div
        class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hidden h-6 w-6 md:inline-block"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <p
          class="text-center text-sm leading-loose text-muted-foreground md:text-left"
        >
          Built by<!-- -->
          <a
            href="https://twitter.com/shadcn"
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
            >shadcn</a
          >. The source code is available on<!-- -->
          <a
            href="https://github.com/hylarucoder/shadcn-vue"
            target="_blank"
            rel="noreferrer"
            class="font-medium underline underline-offset-4"
            >GitHub</a
          >.
        </p>
      </div>
    </div>
  </footer>
</template>
