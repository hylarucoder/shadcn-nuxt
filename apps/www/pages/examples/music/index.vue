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
                  >Cards </a><a class="flex items-center px-4 font-medium text-muted-foreground" href="/examples/tasks">Tasks
                    <span
                        class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
                    >New</span></a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                      href="/examples/playground"
                  >Playground </a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                     href="/examples/forms"
                  >Forms <span
                      class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
                  >New</span></a><a class="flex items-center px-4 font-bold text-primary" href="/examples/music"
                  >Music </a><a class="flex items-center px-4 font-medium text-muted-foreground"
                                href="/examples/authentication"
                  >Authentication </a></div>
                </div>
              </div>
            </div>
            <a target="_blank" rel="nofollow"
               class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
               href="https://github.com/shadcn/ui/tree/main/apps/www/app/examples/music"
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
            <div class="md:hidden"><img alt="Music" loading="lazy" width="1280" height="1114" decoding="async"
                                        data-nimg="1" class="block dark:hidden"
                                        srcset="/_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=3840&amp;q=75 2x"
                                        src="/_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=3840&amp;q=75"
                                        style="color: transparent;"
            ><img alt="Music" loading="lazy" width="1280" height="1114" decoding="async" data-nimg="1"
                  class="hidden dark:block"
                  srcset="/_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=3840&amp;q=75 2x"
                  src="/_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=3840&amp;q=75" style="color: transparent;"
            ></div>
            <div class="hidden md:block">
              <div role="menubar"
                   class="flex h-10 items-center space-x-1 border bg-background p-1 rounded-none border-b border-none px-2 lg:px-4"
                   tabindex="0" data-orientation="horizontal" style="outline: none;"
              >
                <button type="button" role="menuitem" id="radix-:r8i:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"
                        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-bold"
                        tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                >Music
                </button>
                <button type="button" role="menuitem" id="radix-:r8m:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"
                        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative"
                        tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                >File
                </button>
                <button type="button" role="menuitem" id="radix-:r8q:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"
                        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                        tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                >Edit
                </button>
                <button type="button" role="menuitem" id="radix-:r8u:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"
                        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
                        tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                >View
                </button>
                <button type="button" role="menuitem" id="radix-:r92:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"
                        class="cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hidden md:block"
                        tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                >Account
                </button>
              </div>
              <div class="border-t">
                <div class="bg-background">
                  <div class="grid lg:grid-cols-5">
                    <div class="pb-12 hidden lg:block">
                      <div class="space-y-4 py-4">
                        <div class="px-4 py-2"><h2 class="mb-2 px-2 text-lg font-semibold tracking-tight">Discover</h2>
                          <div class="space-y-1">
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="10 8 16 12 10 16 10 8"></polygon>
                              </svg>
                              Listen Now
                            </button>
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <rect width="7" height="7" x="3" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                                <rect width="7" height="7" x="14" y="14" rx="1"></rect>
                                <rect width="7" height="7" x="3" y="14" rx="1"></rect>
                              </svg>
                              Browse
                            </button>
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                                <circle cx="12" cy="12" r="2"></circle>
                                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                              </svg>
                              Radio
                            </button>
                          </div>
                        </div>
                        <div class="px-4 py-2"><h2 class="mb-2 px-2 text-lg font-semibold tracking-tight">Library</h2>
                          <div class="space-y-1">
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <path d="M21 15V6"></path>
                                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                <path d="M12 12H3"></path>
                                <path d="M16 6H3"></path>
                                <path d="M12 18H3"></path>
                              </svg>
                              Playlists
                            </button>
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <circle cx="8" cy="18" r="4"></circle>
                                <path d="M12 18V2l7 4"></path>
                              </svg>
                              Songs
                            </button>
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              Made for You
                            </button>
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                                <circle cx="17" cy="7" r="5"></circle>
                              </svg>
                              Artists
                            </button>
                            <button
                                class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                   fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="mr-2 h-4 w-4"
                              >
                                <path d="m16 6 4 14"></path>
                                <path d="M12 6v14"></path>
                                <path d="M8 8v12"></path>
                                <path d="M4 4v16"></path>
                              </svg>
                              Albums
                            </button>
                          </div>
                        </div>
                        <div class="py-2"><h2 class="relative px-6 text-lg font-semibold tracking-tight">Playlists</h2>
                          <div dir="ltr" class="relative overflow-hidden h-[300px] px-2"
                               style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                          >
                            <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]"
                                 style="overflow: hidden scroll;"
                            >
                              <div style="min-width: 100%; display: table;">
                                <div class="space-y-1 p-2">
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Recently Added
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Recently Played
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Top Songs
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Top Albums
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Top Artists
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Logic Discography
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Bedtime Beats
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Feeling Happy
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    I miss Y2K Pop
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Runtober
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Mellow Days
                                  </button>
                                  <button
                                      class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round" class="mr-2 h-4 w-4"
                                    >
                                      <path d="M21 15V6"></path>
                                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                      <path d="M12 12H3"></path>
                                      <path d="M16 6H3"></path>
                                      <path d="M12 18H3"></path>
                                    </svg>
                                    Eminem Essentials
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-span-3 lg:col-span-4 lg:border-l">
                      <div class="h-full px-4 py-6 lg:px-8">
                        <div dir="ltr" data-orientation="horizontal" class="h-full space-y-6">
                          <div class="space-between flex items-center">
                            <div role="tablist" aria-orientation="horizontal"
                                 class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
                                 tabindex="0" data-orientation="horizontal" style="outline: none;"
                            >
                              <button type="button" role="tab" aria-selected="true"
                                      aria-controls="radix-:r95:-content-music" data-state="active"
                                      id="radix-:r95:-trigger-music"
                                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm relative"
                                      tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                              >Music
                              </button>
                              <button type="button" role="tab" aria-selected="false"
                                      aria-controls="radix-:r95:-content-podcasts" data-state="inactive"
                                      id="radix-:r95:-trigger-podcasts"
                                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                      tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                              >Podcasts
                              </button>
                              <button type="button" role="tab" aria-selected="false"
                                      aria-controls="radix-:r95:-content-live" data-state="inactive" data-disabled=""
                                      disabled="" id="radix-:r95:-trigger-live"
                                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                                      tabindex="-1" data-orientation="horizontal" data-radix-collection-item=""
                              >Live
                              </button>
                            </div>
                            <div class="ml-auto mr-4">
                              <button
                                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                     stroke-linejoin="round" class="mr-2 h-4 w-4"
                                >
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="12" x2="12" y1="8" y2="16"></line>
                                  <line x1="8" x2="16" y1="12" y2="12"></line>
                                </svg>
                                Add music
                              </button>
                            </div>
                          </div>
                          <div data-state="active" data-orientation="horizontal" role="tabpanel"
                               aria-labelledby="radix-:r95:-trigger-music" id="radix-:r95:-content-music" tabindex="0"
                               class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-none p-0 outline-none"
                               style="animation-duration: 0s;"
                          >
                            <div class="flex items-center justify-between">
                              <div class="space-y-1"><h2 class="text-2xl font-semibold tracking-tight">Listen Now</h2>
                                <p class="text-sm text-muted-foreground">Top picks for you. Updated daily.</p></div>
                            </div>
                            <div data-orientation="horizontal" role="none"
                                 class="shrink-0 bg-border h-[1px] w-full my-4"
                            ></div>
                            <div class="relative">
                              <div dir="ltr" class="relative overflow-hidden"
                                   style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                              >
                                <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]"
                                     style="overflow: scroll;"
                                >
                                  <div style="min-width: 100%; display: table;">
                                    <div class="flex space-x-4 pb-4">
                                      <div class="space-y-3 w-[250px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="React Rendezvous" loading="lazy" width="250" height="330"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">React
                                          Rendezvous</h3>
                                          <p class="text-xs text-muted-foreground">Ethan Byte</p></div>
                                      </div>
                                      <div class="space-y-3 w-[250px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="Async Awakenings" loading="lazy" width="250" height="330"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">Async
                                          Awakenings</h3>
                                          <p class="text-xs text-muted-foreground">Nina Netcode</p></div>
                                      </div>
                                      <div class="space-y-3 w-[250px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="The Art of Reusability" loading="lazy" width="250" height="330"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">The Art of
                                          Reusability</h3>
                                          <p class="text-xs text-muted-foreground">Lena Logic</p></div>
                                      </div>
                                      <div class="space-y-3 w-[250px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="Stateful Symphony" loading="lazy" width="250" height="330"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">Stateful
                                          Symphony</h3>
                                          <p class="text-xs text-muted-foreground">Beth Binary</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="mt-6 space-y-1"><h2 class="text-2xl font-semibold tracking-tight">Made for
                              You</h2>
                              <p class="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p></div>
                            <div data-orientation="horizontal" role="none"
                                 class="shrink-0 bg-border h-[1px] w-full my-4"
                            ></div>
                            <div class="relative">
                              <div dir="ltr" class="relative overflow-hidden"
                                   style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                              >
                                <div data-radix-scroll-area-viewport="" class="h-full w-full rounded-[inherit]"
                                     style="overflow: scroll;"
                                >
                                  <div style="min-width: 100%; display: table;">
                                    <div class="flex space-x-4 pb-4">
                                      <div class="space-y-3 w-[150px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="Thinking Components" loading="lazy" width="150" height="150"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">Thinking
                                          Components</h3>
                                          <p class="text-xs text-muted-foreground">Lena Logic</p></div>
                                      </div>
                                      <div class="space-y-3 w-[150px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="Functional Fury" loading="lazy" width="150" height="150"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">Functional
                                          Fury</h3>
                                          <p class="text-xs text-muted-foreground">Beth Binary</p></div>
                                      </div>
                                      <div class="space-y-3 w-[150px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="React Rendezvous" loading="lazy" width="150" height="150"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">React
                                          Rendezvous</h3>
                                          <p class="text-xs text-muted-foreground">Ethan Byte</p></div>
                                      </div>
                                      <div class="space-y-3 w-[150px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="Stateful Symphony" loading="lazy" width="150" height="150"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">Stateful
                                          Symphony</h3>
                                          <p class="text-xs text-muted-foreground">Beth Binary</p></div>
                                      </div>
                                      <div class="space-y-3 w-[150px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="Async Awakenings" loading="lazy" width="150" height="150"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">Async
                                          Awakenings</h3>
                                          <p class="text-xs text-muted-foreground">Nina Netcode</p></div>
                                      </div>
                                      <div class="space-y-3 w-[150px]"><span data-state="closed"><div
                                          class="overflow-hidden rounded-md"
                                      ><img alt="The Art of Reusability" loading="lazy" width="150" height="150"
                                            decoding="async" data-nimg="1"
                                            class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                            srcset="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x"
                                            src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                            style="color: transparent;"
                                      ></div></span>
                                        <div class="space-y-1 text-sm"><h3 class="font-medium leading-none">The Art of
                                          Reusability</h3>
                                          <p class="text-xs text-muted-foreground">Lena Logic</p></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-state="inactive" data-orientation="horizontal" role="tabpanel"
                               aria-labelledby="radix-:r95:-trigger-podcasts" hidden=""
                               id="radix-:r95:-content-podcasts" tabindex="0"
                               class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full flex-col border-none p-0 data-[state=active]:flex"
                          ></div>
                        </div>
                      </div>
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
