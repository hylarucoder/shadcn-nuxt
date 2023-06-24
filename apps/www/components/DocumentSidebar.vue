<template>
  <aside
    class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block"
  >
    <div
      dir="ltr"
      class="relative overflow-hidden h-full py-6 pl-8 pr-6 lg:py-8"
      style="
        position: relative;
        --radix-scroll-area-corner-width: 0px;
        --radix-scroll-area-corner-height: 0px;
      "
    >
      <div
        data-radix-scroll-area-viewport=""
        class="h-full w-full rounded-[inherit]"
        style="overflow: hidden scroll"
      >
        <div style="min-width: 100%; display: table">
          <div class="w-full">
            <div class="pb-4" v-for="group in groups">
              <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                {{ group.name }}
              </h4>
              <div
                class="grid grid-flow-row auto-rows-max text-sm"
                v-for="child in group.children"
              >
                <NuxtLink
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  :to="child.link"
                >
                  {{ child.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

defineComponent({
  name: "DocumentSidebar",
});
</script>

<script lang="ts" setup>
let groups = [
  {
    name: "Getting Started",
    children: [
      {
        name: "Introduction",
        link: "/docs",
      },
      {
        name: "Installation",
        link: "/docs/installation",
      },
      {
        name: "Theming",
        link: "/docs/theming",
      },
      {
        name: "Dark mode",
        link: "/docs/dark-mode",
      },
      {
        name: "CLI",
        link: "/docs/cli",
      },
      {
        name: "Typography",
        link: "/docs/components/typography",
      },
      {
        name: "Changelog",
        link: "/docs/changelog",
      },
    ],
  },
  {
    name: "Community",
    children: [
      {
        name: "Figma",
        link: "/docs/figma",
      },
    ],
  },
  {
    name: "Components",
    children: [
      {
        name: "Accordion",
        link: "/docs/components/accordion",
      },
      {
        name: "Alert",
        link: "/docs/components/alert",
      },
      {
        name: "Alert Dialog",
        link: "/docs/components/alert-dialog",
      },
      {
        name: "Aspect Ratio",
        link: "/docs/components/aspect-ratio",
      },
      {
        name: "Avatar",
        link: "/docs/components/avatar",
      },
      {
        name: "Badge",
        link: "/docs/components/badge",
      },
      {
        name: "Button",
        link: "/docs/components/button",
      },
      {
        name: "Calendar",
        link: "/docs/components/calendar",
      },
      {
        name: "Card",
        link: "/docs/components/card",
      },
      {
        name: "Checkbox",
        link: "/docs/components/checkbox",
      },
      {
        name: "Collapsible",
        link: "/docs/components/collapsible",
      },
      {
        name: "Combobox",
        link: "/docs/components/combobox",
      },
      {
        name: "Command",
        link: "/docs/components/command",
      },
      {
        name: "Context Menu",
        link: "/docs/components/context-menu",
      },
      {
        name: "Data Table",
        link: "/docs/components/data-table",
      },
      {
        name: "Date Picker",
        link: "/docs/components/date-picker",
      },
      {
        name: "Dialog",
        link: "/docs/components/dialog",
      },
      {
        name: "Dropdown Menu",
        link: "/docs/components/dropdown-menu",
      },
      {
        name: "Form",
        link: "/docs/components/form",
      },
      {
        name: "Hover Card",
        link: "/docs/components/hover-card",
      },
      {
        name: "Input",
        link: "/docs/components/input",
      },
      {
        name: "Label",
        link: "/docs/components/label",
      },
      {
        name: "Menubar",
        link: "/docs/components/menubar",
      },
      {
        name: "Navigation Menu",
        link: "/docs/components/navigation-menu",
      },
      {
        name: "Popover",
        link: "/docs/components/popover",
      },
      {
        name: "Progress",
        link: "/docs/components/progress",
      },
      {
        name: "Radio Group",
        link: "/docs/components/radio-group",
      },
      {
        name: "Scroll Area",
        link: "/docs/components/scroll-area",
      },
      {
        name: "Select",
        link: "/docs/components/select",
      },

      {
        name: "Separator",
        link: "/docs/components/separator",
      },
      {
        name: "Sheet",
        link: "/docs/components/sheet",
      },
      {
        name: "Skeleton",
        link: "/docs/components/skeleton",
      },
      {
        name: "Slider",
        link: "/docs/components/slider",
      },
      {
        name: "Switch",
        link: "/docs/components/switch",
      },
      {
        name: "Table",
        link: "/docs/components/table",
      },
      {
        name: "Tabs",
        link: "/docs/components/tabs",
      },
      {
        name: "Textarea",
        link: "/docs/components/textarea",
      },
      {
        name: "Toast",
        link: "/docs/components/toast",
      },
      {
        name: "Toggle",
        link: "/docs/components/toggle",
      },
      {
        name: "Tooltip",
        link: "/docs/components/tooltip",
      },
    ],
  },
];
</script>
