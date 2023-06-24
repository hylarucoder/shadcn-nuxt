<template>
  <div class="relative">
    <div
        dir="ltr"
        class="relative overflow-hidden max-w-[600px] lg:max-w-none"
        style="
        position: relative;
        --radix-scroll-area-corner-width: 0px;
        --radix-scroll-area-corner-height: 0px;
      "
    >
      <div
          data-radix-scroll-area-viewport=""
          class="h-full w-full rounded-[inherit]"
          style="overflow: scroll"
      >
        <div style="min-width: 100%; display: table">
          <div class="mb-4 flex items-center">
            <NuxtLink
                v-for="link in navlinks"
                class="flex items-center px-4 font-medium text-muted-foreground"
                activeClass="flex items-center px-4 font-bold text-primary"
                :to="link.path"
            >
              {{ link.name }}
              <span
                  v-if="link.isNew"
                  class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
              >New</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <a
        target="_blank"
        rel="nofollow"
        class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
        href="https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks"
    >View code
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
          class="ml-1 h-4 w-4"
      >
        <line x1="5" x2="19" y1="12" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    </a>
  </div>
</template>
<script setup lang="ts">
let navlinks = [
  {
    name: "Dashboard",
    path: "/examples/dashboard",
  },
  {
    name: "Cards",
    path: "/examples/cards",
    isNew: true,
  },
  {
    name: "Tasks",
    path: "/examples/tasks",
  },
  {
    name: "Playground",
    path: "/examples/playground",
  },
  {
    name: "Forms",
    path: "/examples/forms",
  },
  {
    name: "Music",
    path: "/examples/music",
  },
  {
    name: "Authentication",
    path: "/examples/authentication",
  },
];
</script>
