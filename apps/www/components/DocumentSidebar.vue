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
            <div class="pb-4">
              <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                Getting Started
              </h4>
              <div class="grid grid-flow-row auto-rows-max text-sm">
                <a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs"
                  >Introduction</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/installation"
                  >Installation</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/theming"
                  >Theming</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/dark-mode"
                  >Dark mode</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/cli"
                  >CLI</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/typography"
                  >Typography</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/changelog"
                  >Changelog</a
                >
              </div>
            </div>
            <div class="pb-4">
              <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                Community
              </h4>
              <div class="grid grid-flow-row auto-rows-max text-sm">
                <a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/figma"
                  >Figma</a
                >
              </div>
            </div>
            <div class="pb-4">
              <h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                Components
              </h4>
              <div class="grid grid-flow-row auto-rows-max text-sm">
                <a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline font-medium text-foreground"
                  target=""
                  rel=""
                  href="/docs/components/accordion"
                  >Accordion</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/alert"
                  >Alert</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/alert-dialog"
                  >Alert Dialog</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/aspect-ratio"
                  >Aspect Ratio</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/avatar"
                  >Avatar</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/badge"
                  >Badge</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/button"
                  >Button</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/calendar"
                  >Calendar</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/card"
                  >Card</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/checkbox"
                  >Checkbox</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/collapsible"
                  >Collapsible</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/combobox"
                  >Combobox</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/command"
                  >Command</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/context-menu"
                  >Context Menu</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/data-table"
                  >Data Table</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/date-picker"
                  >Date Picker</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/dialog"
                  >Dialog</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/dropdown-menu"
                  >Dropdown Menu</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/form"
                  >Form</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/hover-card"
                  >Hover Card</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/input"
                  >Input</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/label"
                  >Label</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/menubar"
                  >Menubar</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/navigation-menu"
                  >Navigation Menu</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/popover"
                  >Popover</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/progress"
                  >Progress</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/radio-group"
                  >Radio Group</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/scroll-area"
                  >Scroll Area</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/select"
                  >Select</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/separator"
                  >Separator</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/sheet"
                  >Sheet</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/skeleton"
                  >Skeleton</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/slider"
                  >Slider</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/switch"
                  >Switch</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/table"
                  >Table</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/tabs"
                  >Tabs</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/textarea"
                  >Textarea</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/toast"
                  >Toast</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/toggle"
                  >Toggle</a
                ><a
                  class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  target=""
                  rel=""
                  href="/docs/components/tooltip"
                  >Tooltip</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
<script>
export default {
  name: "DocumentSidebar",
};
</script>