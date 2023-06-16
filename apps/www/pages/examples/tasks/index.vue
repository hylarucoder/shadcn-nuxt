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
              class="transition-colors hover:text-foreground/80 text-foreground/60" href="/docs"
          >Documentation</a><a class="transition-colors hover:text-foreground/80 text-foreground/60"
                               href="/docs/components"
          >Components</a><a class="transition-colors hover:text-foreground/80 text-foreground" href="/examples"
          >Examples</a><a class="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
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
      <div class="container relative pb-10">
        <section class="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 page-header"><a
            class="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
            href="/docs/forms/react-hook-form"
        >🎉
          <div data-orientation="vertical" role="none" class="shrink-0 bg-border w-[1px] mx-2 h-4"></div>
          Building forms with React Hook Form and Zod
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               class="ml-1 h-4 w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </a>
          <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block">
            Check out some examples.</h1>
          <h1 class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] md:hidden">
            Examples</h1><span class="max-w-[750px] text-lg text-muted-foreground sm:text-xl" data-br=":r1g:"
                               data-brr="1"
                               style="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 576px;"
          >Dashboard, cards, authentication. Some examples built using the components. Use this as a guide to build your own.</span>
          <section class="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10"><a
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 rounded-[6px]"
              href="/docs"
          >Get Started</a><a
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 rounded-[6px]"
              href="/components"
          >Components</a></section>
        </section>
        <section>
          <div class="relative">
            <div dir="ltr" class="relative overflow-hidden max-w-[600px] lg:max-w-none"
                 style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
            >
              <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]" style="overflow: scroll;">
                <div style="min-width: 100%; display: table;">
                  <div class="mb-4 flex items-center"><a
                      class="flex items-center px-4 font-medium text-muted-foreground" href="/examples/dashboard"
                  >Dashboard </a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                    href="/examples/cards"
                  >Cards </a><a class="flex items-center px-4 font-bold text-primary" href="/examples/tasks">Tasks <span
                      class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
                  >New</span></a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                    href="/examples/playground"
                  >Playground </a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                     href="/examples/forms"
                  >Forms <span
                      class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
                  >New</span></a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                    href="/examples/music"
                  >Music </a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                href="/examples/authentication"
                  >Authentication </a></div>
                </div>
              </div>
            </div>
            <a target="_blank" rel="nofollow"
               class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
               href="https://github.com/shadcn/ui/tree/main/apps/www/app/examples/tasks"
            >View code
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                   class="ml-1 h-4 w-4"
              >
                <line x1="5" x2="19" y1="12" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a></div>
          <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
            <div class="md:hidden"><img alt="Playground" loading="lazy" width="1280" height="998" decoding="async"
                                        data-nimg="1" class="block dark:hidden"
                                        srcset="/_next/image?url=%2Fexamples%2Ftasks-light.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Ftasks-light.png&amp;w=3840&amp;q=75 2x"
                                        src="/_next/image?url=%2Fexamples%2Ftasks-light.png&amp;w=3840&amp;q=75"
                                        style="color: transparent;"
            ><img alt="Playground" loading="lazy" width="1280" height="998" decoding="async" data-nimg="1"
                  class="hidden dark:block"
                  srcset="/_next/image?url=%2Fexamples%2Ftasks-dark.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Ftasks-dark.png&amp;w=3840&amp;q=75 2x"
                  src="/_next/image?url=%2Fexamples%2Ftasks-dark.png&amp;w=3840&amp;q=75" style="color: transparent;"
            ></div>
            <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div class="flex items-center justify-between space-y-2">
                <div><h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
                  <p class="text-muted-foreground">Here's a list of your tasks for this month!</p></div>
                <div class="flex items-center space-x-2">
                  <button
                      class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-8 w-8 rounded-full"
                      type="button" id="radix-:r6d:" aria-haspopup="menu" aria-expanded="false" data-state="closed"
                  ><span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"><img
                      class="aspect-square h-full w-full" alt="@shadcn" src="/avatars/03.png"
                  ></span></button>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex flex-1 items-center space-x-2"><input
                      class="flex rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-8 w-[150px] lg:w-[250px]"
                      placeholder="Filter tasks..." value=""
                  >
                    <button
                        class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground px-3 rounded-md h-8 border-dashed"
                        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r6f:"
                        data-state="closed"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="mr-2 h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="16"></line>
                        <line x1="8" x2="16" y1="12" y2="12"></line>
                      </svg>
                      Status
                    </button>
                    <button
                        class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground px-3 rounded-md h-8 border-dashed"
                        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r6g:"
                        data-state="closed"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                           class="mr-2 h-4 w-4"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="16"></line>
                        <line x1="8" x2="16" y1="12" y2="12"></line>
                      </svg>
                      Priority
                    </button>
                  </div>
                  <button
                      class="items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground px-3 rounded-md ml-auto hidden h-8 lg:flex"
                      type="button" id="radix-:r6h:" aria-haspopup="menu" aria-expanded="false" data-state="closed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         class="mr-2 h-4 w-4"
                    >
                      <line x1="21" x2="14" y1="4" y2="4"></line>
                      <line x1="10" x2="3" y1="4" y2="4"></line>
                      <line x1="21" x2="12" y1="12" y2="12"></line>
                      <line x1="8" x2="3" y1="12" y2="12"></line>
                      <line x1="21" x2="16" y1="20" y2="20"></line>
                      <line x1="12" x2="3" y1="20" y2="20"></line>
                      <line x1="14" x2="14" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="10" y2="14"></line>
                      <line x1="16" x2="16" y1="18" y2="22"></line>
                    </svg>
                    View
                  </button>
                </div>
                <div class="rounded-md border">
                  <div class="w-full overflow-auto">
                    <table class="w-full caption-bottom text-sm">
                      <thead class="[&amp;_tr]:border-b">
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select all"
                          ></button>
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          <div class="">Task</div>
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center space-x-2">
                            <button
                                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground px-3 rounded-md -ml-3 h-8 data-[state=open]:bg-accent"
                                type="button" id="radix-:r6j:" aria-haspopup="menu" aria-expanded="false"
                                data-state="closed"
                            ><span>Title</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="ml-2 h-4 w-4"
                              >
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center space-x-2">
                            <button
                                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground px-3 rounded-md -ml-3 h-8 data-[state=open]:bg-accent"
                                type="button" id="radix-:r6l:" aria-haspopup="menu" aria-expanded="false"
                                data-state="closed"
                            ><span>Status</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="ml-2 h-4 w-4"
                              >
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center space-x-2">
                            <button
                                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground px-3 rounded-md -ml-3 h-8 data-[state=open]:bg-accent"
                                type="button" id="radix-:r6n:" aria-haspopup="menu" aria-expanded="false"
                                data-state="closed"
                            ><span>Priority</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="ml-2 h-4 w-4"
                              >
                                <path d="m7 15 5 5 5-5"></path>
                                <path d="m7 9 5-5 5 5"></path>
                              </svg>
                            </button>
                          </div>
                        </th>
                        <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"></th>
                      </tr>
                      </thead>
                      <tbody class="[&amp;_tr:last-child]:border-0">
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-8782</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Documentation
                            </div>
                            <span class="max-w-[500px] truncate font-medium">You can't compress the program without quantifying the open-source SSD pixel!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="16 12 12 8 8 12"></polyline>
                              <line x1="12" x2="12" y1="16" y2="8"></line>
                            </svg>
                            <span>In Progress</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="17" x2="3" y1="12" y2="12"></line>
                              <polyline points="11 18 17 12 11 6"></polyline>
                              <path d="M21 5v14"></path>
                            </svg>
                            <span>Medium</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r6p:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-7878</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Documentation
                            </div>
                            <span class="max-w-[500px] truncate font-medium">Try to calculate the EXE feed, maybe it will index the multi-byte pixel!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                            <span>Backlog</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="17" x2="3" y1="12" y2="12"></line>
                              <polyline points="11 18 17 12 11 6"></polyline>
                              <path d="M21 5v14"></path>
                            </svg>
                            <span>Medium</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r6r:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-7839</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Bug
                            </div>
                            <span class="max-w-[500px] truncate font-medium"
                            >We need to bypass the neural TCP card!</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span>Todo</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="12" x2="12" y1="7" y2="21"></line>
                              <polyline points="18 13 12 7 6 13"></polyline>
                              <path d="M5 3h14"></path>
                            </svg>
                            <span>High</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r6t:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-5562</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Feature
                            </div>
                            <span class="max-w-[500px] truncate font-medium">The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                              <path d="M12 17h.01"></path>
                            </svg>
                            <span>Backlog</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="17" x2="3" y1="12" y2="12"></line>
                              <polyline points="11 18 17 12 11 6"></polyline>
                              <path d="M21 5v14"></path>
                            </svg>
                            <span>Medium</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r6v:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-8686</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Feature
                            </div>
                            <span class="max-w-[500px] truncate font-medium">I'll parse the wireless SSL protocol, that should driver the API panel!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="15" x2="9" y1="9" y2="15"></line>
                              <line x1="9" x2="15" y1="9" y2="15"></line>
                            </svg>
                            <span>Canceled</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="17" x2="3" y1="12" y2="12"></line>
                              <polyline points="11 18 17 12 11 6"></polyline>
                              <path d="M21 5v14"></path>
                            </svg>
                            <span>Medium</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r71:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-1280</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Bug
                            </div>
                            <span class="max-w-[500px] truncate font-medium">Use the digital TLS panel, then you can transmit the haptic system!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span>Done</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="12" x2="12" y1="7" y2="21"></line>
                              <polyline points="18 13 12 7 6 13"></polyline>
                              <path d="M5 3h14"></path>
                            </svg>
                            <span>High</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r73:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-7262</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Feature
                            </div>
                            <span class="max-w-[500px] truncate font-medium">The UTF8 application is down, parse the neural bandwidth so we can back up the PNG firewall!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                              <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span>Done</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="12" x2="12" y1="7" y2="21"></line>
                              <polyline points="18 13 12 7 6 13"></polyline>
                              <path d="M5 3h14"></path>
                            </svg>
                            <span>High</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r75:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-1138</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Feature
                            </div>
                            <span class="max-w-[500px] truncate font-medium">Generating the driver won't do anything, we need to quantify the 1080p SMTP bandwidth!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="16 12 12 8 8 12"></polyline>
                              <line x1="12" x2="12" y1="16" y2="8"></line>
                            </svg>
                            <span>In Progress</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="17" x2="3" y1="12" y2="12"></line>
                              <polyline points="11 18 17 12 11 6"></polyline>
                              <path d="M21 5v14"></path>
                            </svg>
                            <span>Medium</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r77:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-7184</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Feature
                            </div>
                            <span class="max-w-[500px] truncate font-medium"
                            >We need to program the back-end THX pixel!</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            <span>Todo</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="12" x2="12" y1="17" y2="3"></line>
                              <polyline points="6 11 12 17 18 11"></polyline>
                              <path d="M19 21H5"></path>
                            </svg>
                            <span>Low</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r79:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                      >
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button type="button" role="checkbox" aria-checked="false" data-state="unchecked" value="on"
                                  class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                                  aria-label="Select row"
                          ></button>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="w-[80px]">TASK-5160</div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex space-x-2">
                            <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                            >Documentation
                            </div>
                            <span class="max-w-[500px] truncate font-medium">Calculating the bus won't do anything, we need to navigate the back-end JSON protocol!</span>
                          </div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex w-[100px] items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="16 12 12 8 8 12"></polyline>
                              <line x1="12" x2="12" y1="16" y2="8"></line>
                            </svg>
                            <span>In Progress</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="mr-2 h-4 w-4 text-muted-foreground"
                            >
                              <line x1="12" x2="12" y1="7" y2="21"></line>
                              <polyline points="18 13 12 7 6 13"></polyline>
                              <path d="M5 3h14"></path>
                            </svg>
                            <span>High</span></div>
                        </td>
                        <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                          <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button" id="radix-:r7b:" aria-haspopup="menu" aria-expanded="false"
                              data-state="closed"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                 stroke-linejoin="round" class="h-4 w-4"
                            >
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            <span class="sr-only">Open menu</span></button>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="flex items-center justify-between px-2">
                  <div class="flex-1 text-sm text-muted-foreground">0 of 100 row(s) selected.</div>
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="flex items-center space-x-2"><p class="text-sm font-medium">Rows per page</p>
                      <button type="button" role="combobox" aria-controls="radix-:r7d:" aria-expanded="false"
                              aria-autocomplete="none" dir="ltr" data-state="closed"
                              class="flex items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-8 w-[70px]"
                      ><span style="pointer-events: none;">10</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="h-4 w-4 opacity-50" aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div class="flex w-[100px] items-center justify-center text-sm font-medium">Page 1 of 10</div>
                    <div class="flex items-center space-x-2">
                      <button
                          class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
                          disabled=""
                      ><span class="sr-only">Go to first page</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="h-4 w-4"
                        >
                          <polyline points="11 17 6 12 11 7"></polyline>
                          <polyline points="18 17 13 12 18 7"></polyline>
                        </svg>
                      </button>
                      <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                          disabled=""
                      ><span class="sr-only">Go to previous page</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="h-4 w-4"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                      ><span class="sr-only">Go to next page</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="h-4 w-4"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                      <button
                          class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
                      ><span class="sr-only">Go to last page</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                             class="h-4 w-4"
                        >
                          <polyline points="13 17 18 12 13 7"></polyline>
                          <polyline points="6 17 11 12 6 7"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
