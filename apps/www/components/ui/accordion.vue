<template>
  <div class="w-full" data-orientation="vertical">
    <div data-state="open" data-orientation="vertical" class="border-b">
      <h3 data-orientation="vertical" data-state="open" class="flex">
        <button
          type="button"
          aria-controls="radix-:r1q:"
          aria-expanded="true"
          data-state="open"
          data-orientation="vertical"
          id="radix-:r1p:"
          class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
          data-radix-collection-item=""
        >
          Is it accessible?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 transition-transform duration-200"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </h3>
      <div
        data-state="open"
        id="radix-:r1q:"
        role="region"
        aria-labelledby="radix-:r1p:"
        data-orientation="vertical"
        class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        style="
          --radix-accordion-content-height: var(
            --radix-collapsible-content-height
          );
          --radix-accordion-content-width: var(
            --radix-collapsible-content-width
          );
          --radix-collapsible-content-height: 36px;
          --radix-collapsible-content-width: 443.796875px;
        "
      >
        <div class="pb-4 pt-0">
          Yes. It adheres to the WAI-ARIA design pattern.
        </div>
      </div>
    </div>
    <div data-state="closed" data-orientation="vertical" class="border-b">
      <h3 data-orientation="vertical" data-state="closed" class="flex">
        <button
          type="button"
          aria-controls="radix-:r1s:"
          aria-expanded="false"
          data-state="closed"
          data-orientation="vertical"
          id="radix-:r1r:"
          class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
          data-radix-collection-item=""
        >
          Is it styled?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 transition-transform duration-200"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </h3>
      <div
        data-state="closed"
        id="radix-:r1s:"
        role="region"
        aria-labelledby="radix-:r1r:"
        data-orientation="vertical"
        class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        style="
          --radix-accordion-content-height: var(
            --radix-collapsible-content-height
          );
          --radix-accordion-content-width: var(
            --radix-collapsible-content-width
          );
          --radix-collapsible-content-height: 56px;
          --radix-collapsible-content-width: 443.796875px;
        "
        hidden=""
      ></div>
    </div>
    <div data-state="closed" data-orientation="vertical" class="border-b">
      <h3 data-orientation="vertical" data-state="closed" class="flex">
        <button
          type="button"
          aria-controls="radix-:r1u:"
          aria-expanded="false"
          data-state="closed"
          data-orientation="vertical"
          id="radix-:r1t:"
          class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
          data-radix-collection-item=""
        >
          Is it animated?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-4 w-4 transition-transform duration-200"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </h3>
      <div
        data-state="closed"
        id="radix-:r1u:"
        role="region"
        aria-labelledby="radix-:r1t:"
        data-orientation="vertical"
        class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        style="
          --radix-accordion-content-height: var(
            --radix-collapsible-content-height
          );
          --radix-accordion-content-width: var(
            --radix-collapsible-content-width
          );
          --radix-collapsible-content-height: 36px;
          --radix-collapsible-content-width: 443.796875px;
        "
        hidden=""
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";

defineComponent({
  name: "Accordion",
});
</script>
