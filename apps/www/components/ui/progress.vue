<template>
  <div
    aria-valuemax="100"
    aria-valuemin="0"
    role="progressbar"
    data-state="indeterminate"
    data-max="100"
    class="relative h-2 overflow-hidden rounded-full bg-primary/20 w-[60%]"
  >
    <div
      data-state="indeterminate"
      data-max="100"
      class="h-full w-full flex-1 bg-primary transition-all"
      style="transform: translateX(-34%)"
    ></div>
  </div>
</template>
