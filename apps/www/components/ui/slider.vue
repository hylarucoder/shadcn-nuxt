<template>
  <span
    dir="ltr"
    data-orientation="horizontal"
    aria-disabled="false"
    class="relative flex touch-none select-none items-center w-[60%]"
    style="--radix-slider-thumb-transform: translateX(-50%)"
    ><span data-orientation="horizontal" class="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
      ><span data-orientation="horizontal" class="absolute h-full bg-primary" style="left: 0%; right: 67%"></span></span
    ><span style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(33% + 2.72px)"
      ><span
        role="slider"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-orientation="horizontal"
        data-orientation="horizontal"
        tabindex="0"
        class="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        data-radix-collection-item=""
        aria-valuenow="33"
        style=""
      ></span></span
  ></span>
</template>
