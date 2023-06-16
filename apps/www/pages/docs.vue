<template>
  <div class="relative flex min-h-screen flex-col">
    <header
        class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur"
    >
      <div class="container flex h-14 items-center">
        <div class="mr-4 hidden md:flex"><a class="mr-6 flex items-center space-x-2" href="/">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span class="hidden font-bold sm:inline-block">shadcn/ui</span></a>
          <nav class="flex items-center space-x-6 text-sm font-medium"><a
              class="transition-colors hover:text-foreground/80 text-foreground" href="/docs"
          >Documentation</a><a class="transition-colors hover:text-foreground/80 text-foreground/60"
                               href="/docs/components"
          >Components</a><a class="transition-colors hover:text-foreground/80 text-foreground/60" href="/examples">Examples</a><a
              class="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
              href="https://github.com/shadcn/ui"
          >GitHub</a></nav>
        </div>
        <button
            class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R15hja:"
            data-state="closed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M9 3v18"></path>
            <path d="m14 9 3 3-3 3"></path>
          </svg>
          <span class="sr-only">Toggle Menu</span></button>
        <div class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button
                class="inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
            ><span class="hidden lg:inline-flex">Search documentation...</span><span class="inline-flex lg:hidden">Search...</span><kbd
                class="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
            ><span class="text-xs">⌘</span>K</kbd></button>
          </div>
          <nav class="flex items-center space-x-1"><a target="_blank" rel="noreferrer"
                                                      href="https://github.com/shadcn/ui"
          >
            <div
                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
            >
              <svg viewBox="0 0 438.549 438.549" class="h-5 w-5">
                <path fill="currentColor"
                      d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                ></path>
              </svg>
              <span class="sr-only">GitHub</span></div>
          </a><a target="_blank" rel="noreferrer" href="https://twitter.com/shadcn">
            <div
                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="h-5 w-5 fill-current"
              >
                <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                ></path>
              </svg>
              <span class="sr-only">Twitter</span></div>
          </a>
            <button
                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
                type="button" id="radix-:Rtlhja:" aria-haspopup="menu" aria-expanded="false" data-state="closed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 3v1"></path>
                <path d="M12 20v1"></path>
                <path d="M3 12h1"></path>
                <path d="M20 12h1"></path>
                <path d="m18.364 5.636-.707.707"></path>
                <path d="m6.343 17.657-.707.707"></path>
                <path d="m5.636 5.636.707.707"></path>
                <path d="m17.657 17.657.707.707"></path>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <span class="sr-only">Toggle theme</span></button>
          </nav>
        </div>
      </div>
    </header>
    <div class="flex-1">
      <div
          class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
      >
        <aside
            class="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block"
        >
          <div dir="ltr" class="relative overflow-hidden py-6 pr-6 lg:py-8"
               style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
          >
            <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]"
                 style="overflow: hidden scroll;"
            >
              <div style="min-width: 100%; display: table;">
                <div class="w-full">
                  <div class="pb-4"><h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Getting Started</h4>
                    <div class="grid grid-flow-row auto-rows-max text-sm"><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline font-medium text-foreground"
                        target="" rel="" href="/docs"
                    >Introduction</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/installation"
                    >Installation</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/theming"
                    >Theming</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/cli"
                    >CLI</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/typography"
                    >Typography</a></div>
                  </div>
                  <div class="pb-4"><h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Community</h4>
                    <div class="grid grid-flow-row auto-rows-max text-sm"><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/figma"
                    >Figma</a></div>
                  </div>
                  <div class="pb-4"><h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Forms</h4>
                    <div class="grid grid-flow-row auto-rows-max text-sm"><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/forms/react-hook-form"
                    >React Hook Form<span
                        class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
                    >New</span></a><span
                        class="flex w-full items-center rounded-md p-2 text-muted-foreground hover:underline cursor-not-allowed opacity-60"
                    >TanStack Form<span
                        class="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline"
                    >Soon</span></span></div>
                  </div>
                  <div class="pb-4"><h4 class="mb-1 rounded-md px-2 py-1 text-sm font-semibold">Components</h4>
                    <div class="grid grid-flow-row auto-rows-max text-sm"><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/accordion"
                    >Accordion</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/alert"
                    >Alert</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/alert-dialog"
                    >Alert Dialog</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/aspect-ratio"
                    >Aspect Ratio</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/avatar"
                    >Avatar</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/badge"
                    >Badge</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/button"
                    >Button</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/calendar"
                    >Calendar</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/card"
                    >Card</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/checkbox"
                    >Checkbox</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/collapsible"
                    >Collapsible</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/combobox"
                    >Combobox</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/command"
                    >Command</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/context-menu"
                    >Context Menu</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/data-table"
                    >Data Table<span
                        class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
                    >New</span></a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/date-picker"
                    >Date Picker</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/dialog"
                    >Dialog</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/dropdown-menu"
                    >Dropdown Menu</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/hover-card"
                    >Hover Card</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/input"
                    >Input</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/label"
                    >Label</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/menubar"
                    >Menubar</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/navigation-menu"
                    >Navigation Menu</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/popover"
                    >Popover</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/progress"
                    >Progress</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/radio-group"
                    >Radio Group</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/scroll-area"
                    >Scroll Area</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/select"
                    >Select</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/separator"
                    >Separator</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/sheet"
                    >Sheet</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/skeleton"
                    >Skeleton</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/slider"
                    >Slider</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/switch"
                    >Switch</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/table"
                    >Table<span
                        class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline"
                    >New</span></a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/tabs"
                    >Tabs</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/textarea"
                    >Textarea</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/toast"
                    >Toast</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/toggle"
                    >Toggle</a><a
                        class="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                        target="" rel="" href="/docs/components/tooltip"
                    >Tooltip</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div class="mx-auto w-full min-w-0">
            <div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
              <div class="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
              <div class="font-medium text-foreground">Introduction</div>
            </div>
            <div class="space-y-2"><h1 class="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
              <p class="text-lg text-muted-foreground"><span data-br=":r0:" data-brr="1"
                                                             style="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 522px;"
              >Re-usable components built using Radix UI and Tailwind CSS.</span>
              </p>
            </div>
            <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-4 md:my-6"></div>
            <div class="mdx"><p class="leading-7 [&amp;:not(:first-child)]:mt-6">This is <strong>NOT</strong> a
              component library. It's a collection of re-usable components that you can copy and paste into your apps.
            </p>
              <p class="leading-7 [&amp;:not(:first-child)]:mt-6"><strong>What do you mean by not a component
                library?</strong></p>
              <p class="leading-7 [&amp;:not(:first-child)]:mt-6">I mean you do not install it as a dependency. It is
                not available or distributed via npm. I have no plans to publish it as an npm package (for now).</p>
              <p class="leading-7 [&amp;:not(:first-child)]:mt-6">Pick the components you need. Copy and paste the code
                into your project and customize to your needs. The code is yours.</p>
              <p class="leading-7 [&amp;:not(:first-child)]:mt-6"><em>Use this as a reference to build your own
                component libraries.</em></p>
              <h2 class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
                  id="faq"
              ><a class="font-medium underline underline-offset-4 subheading-anchor" aria-label="Link to section"
                  href="#faq"
              ><span class="icon icon-link"></span></a>FAQ</h2>
              <div data-orientation="vertical">
                <div data-state="closed" data-orientation="vertical" class="border-b">
                  <h3 data-orientation="vertical" data-state="closed" class="flex">
                    <button type="button" aria-controls="radix-:r2:" aria-expanded="false" data-state="closed"
                            data-orientation="vertical" id="radix-:r1:"
                            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                            data-radix-collection-item=""
                    ><p class="leading-7 [&amp;:not(:first-child)]:mt-6">Why copy/paste and not packaged as a
                      dependency?</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="h-4 w-4 transition-transform duration-200"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </h3>
                  <div data-state="closed" id="radix-:r2:" hidden="" role="region" aria-labelledby="radix-:r1:"
                       data-orientation="vertical"
                       class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
                <div data-state="closed" data-orientation="vertical" class="border-b">
                  <h3 data-orientation="vertical" data-state="closed" class="flex">
                    <button type="button" aria-controls="radix-:r4:" aria-expanded="false" data-state="closed"
                            data-orientation="vertical" id="radix-:r3:"
                            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                            data-radix-collection-item=""
                    ><p class="leading-7 [&amp;:not(:first-child)]:mt-6">Which frameworks are supported?</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="h-4 w-4 transition-transform duration-200"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </h3>
                  <div data-state="closed" id="radix-:r4:" hidden="" role="region" aria-labelledby="radix-:r3:"
                       data-orientation="vertical"
                       class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
                <div data-state="closed" data-orientation="vertical" class="border-b">
                  <h3 data-orientation="vertical" data-state="closed" class="flex">
                    <button type="button" aria-controls="radix-:r6:" aria-expanded="false" data-state="closed"
                            data-orientation="vertical" id="radix-:r5:"
                            class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                            data-radix-collection-item=""
                    ><p class="leading-7 [&amp;:not(:first-child)]:mt-6">Can I use this in my project?</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="h-4 w-4 transition-transform duration-200"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  </h3>
                  <div data-state="closed" id="radix-:r6:" hidden="" role="region" aria-labelledby="radix-:r5:"
                       data-orientation="vertical"
                       class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
              </div>
              <h2 class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
                  id="credits"
              ><a class="font-medium underline underline-offset-4 subheading-anchor" aria-label="Link to section"
                  href="#credits"
              ><span class="icon icon-link"></span></a>Credits</h2>
              <ul class="my-6 ml-6 list-disc">
                <li class="mt-2"><a class="font-medium underline underline-offset-4" href="https://radix-ui.com">Radix
                  UI</a> - For the primitives.
                </li>
                <li class="mt-2"><a class="font-medium underline underline-offset-4" href="https://vercel.com"
                >Vercel</a> - Where I host all my projects.
                </li>
                <li class="mt-2"><a class="font-medium underline underline-offset-4" href="https://shud.in">Shu Ding</a>
                  - The typography style is adapted from his work on Nextra.
                </li>
                <li class="mt-2"><a class="font-medium underline underline-offset-4" href="https://cal.com">Cal</a> -
                  Where I copied the styles for the first component: the <code
                      class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  >Button</code>.
                </li>
                <li class="mt-2"><a class="font-medium underline underline-offset-4" href="https://cmdk.paco.me"
                >cmdk</a> - For the <code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">&lt;Command
                  /&gt;</code> component.
                </li>
              </ul>
            </div>
            <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-4 md:my-6"></div>
            <div class="flex flex-row items-center justify-between"><a
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                href="/docs/installation"
            >Installation
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="ml-2 h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </a></div>
          </div>
          <div class="hidden text-sm xl:block">
            <div class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6">
              <div dir="ltr" class="relative overflow-hidden pb-10"
                   style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
              >
                <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]"
                     style="overflow: hidden scroll;"
                >
                  <div style="min-width: 100%; display: table;">
                    <div class="space-y-2"><p class="font-medium">On This Page</p>
                      <ul class="m-0 list-none">
                        <li class="mt-0 pt-2"><a href="#faq"
                                                 class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                        >FAQ</a></li>
                        <li class="mt-0 pt-2"><a href="#credits"
                                                 class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                        >Credits</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <footer class="border-t py-6 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round" class="hidden h-6 w-6 md:inline-block"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">Built by<!-- --> <a
              href="https://twitter.com/shadcn" target="_blank" rel="noreferrer"
              class="font-medium underline underline-offset-4"
          >shadcn</a>. The source code is available on<!-- --> <a href="https://github.com/shadcn/ui" target="_blank"
                                                                  rel="noreferrer"
                                                                  class="font-medium underline underline-offset-4"
          >GitHub</a>.</p></div>
      </div>
    </footer>
  </div>

</template>
