<template>
  <div class="relative flex min-h-screen flex-col">
    <header
      class="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur"
    >
      <div class="container flex h-14 items-center">
        <div class="mr-4 hidden md:flex">
          <a class="mr-6 flex items-center space-x-2" href="/">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
            <span class="hidden font-bold sm:inline-block">shadcn/ui</span></a
          >
          <nav class="flex items-center space-x-6 text-sm font-medium">
            <a
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs"
              >Documentation</a
            ><a
              class="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/docs/components"
              >Components</a
            ><a
              class="transition-colors hover:text-foreground/80 text-foreground"
              href="/examples"
              >Examples</a
            ><a
              class="hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
              href="https://github.com/shadcn/ui"
              >GitHub</a
            >
          </nav>
        </div>
        <button
          class="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R15hja:"
          data-state="closed"
        >
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
            class="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
            <path d="M9 3v18"></path>
            <path d="m14 9 3 3-3 3"></path>
          </svg>
          <span class="sr-only">Toggle Menu</span>
        </button>
        <div
          class="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end"
        >
          <div class="w-full flex-1 md:w-auto md:flex-none">
            <button
              class="inline-flex items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
            >
              <span class="hidden lg:inline-flex">Search documentation...</span
              ><span class="inline-flex lg:hidden">Search...</span
              ><kbd
                class="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
                ><span class="text-xs">⌘</span>K</kbd
              >
            </button>
          </div>
          <nav class="flex items-center space-x-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/shadcn/ui"
            >
              <div
                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
              >
                <svg viewBox="0 0 438.549 438.549" class="h-5 w-5">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                  ></path>
                </svg>
                <span class="sr-only">GitHub</span>
              </div> </a
            ><a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/shadcn"
            >
              <div
                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
              >
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
                  class="h-5 w-5 fill-current"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                  ></path>
                </svg>
                <span class="sr-only">Twitter</span>
              </div>
            </a>
            <button
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md w-9 px-0"
              type="button"
              id="radix-:Rtlhja:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
            >
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
                class="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
              <span class="sr-only">Toggle theme</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
    <div class="flex-1">
      <div class="container relative pb-10">
        <section
          class="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 page-header"
        >
          <a
            class="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
            href="/docs/forms/react-hook-form"
            >🎉
            <div
              data-orientation="vertical"
              role="none"
              class="shrink-0 bg-border w-[1px] mx-2 h-4"
            ></div>
            Building forms with React Hook Form and Zod
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
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </a>
          <h1
            class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block"
          >
            Check out some examples.
          </h1>
          <h1
            class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] md:hidden"
          >
            Examples
          </h1>
          <span
            class="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
            data-br=":r1g:"
            data-brr="1"
            style="
              display: inline-block;
              vertical-align: top;
              text-decoration: inherit;
              max-width: 576px;
            "
            >Dashboard, cards, authentication. Some examples built using the
            components. Use this as a guide to build your own.</span
          >
          <section
            class="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10"
          >
            <a
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 rounded-[6px]"
              href="/docs"
              >Get Started</a
            ><a
              class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 rounded-[6px]"
              href="/components"
              >Components</a
            >
          </section>
        </section>
        <section>
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
                    <a
                      class="flex items-center px-4 font-medium text-muted-foreground"
                      href="/examples/dashboard"
                      >Dashboard </a
                    ><a
                      class="flex items-center px-4 font-medium text-muted-foreground"
                      href="/examples/cards"
                      >Cards </a
                    ><a
                      class="flex items-center px-4 font-medium text-muted-foreground"
                      href="/examples/tasks"
                      >Tasks
                      <span
                        class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
                        >New</span
                      ></a
                    ><a
                      class="flex items-center px-4 font-bold text-primary"
                      href="/examples/playground"
                      >Playground </a
                    ><a
                      class="flex items-center px-4 font-medium text-muted-foreground"
                      href="/examples/forms"
                      >Forms
                      <span
                        class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
                        >New</span
                      ></a
                    ><a
                      class="flex items-center px-4 font-medium text-muted-foreground"
                      href="/examples/music"
                      >Music </a
                    ><a
                      class="flex items-center px-4 font-medium text-muted-foreground"
                      href="/examples/authentication"
                      >Authentication
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              target="_blank"
              rel="nofollow"
              class="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
              href="https://github.com/shadcn/ui/tree/main/apps/www/app/examples/playground"
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
          <div
            class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl"
          >
            <div class="md:hidden">
              <img
                alt="Playground"
                loading="lazy"
                width="1280"
                height="916"
                decoding="async"
                data-nimg="1"
                class="block dark:hidden"
                srcset="
                  /_next/image?url=%2Fexamples%2Fplayground-light.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Fplayground-light.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Fplayground-light.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              /><img
                alt="Playground"
                loading="lazy"
                width="1280"
                height="916"
                decoding="async"
                data-nimg="1"
                class="hidden dark:block"
                srcset="
                  /_next/image?url=%2Fexamples%2Fplayground-dark.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Fplayground-dark.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Fplayground-dark.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              />
            </div>
            <div class="hidden h-full flex-col md:flex">
              <div
                class="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16"
              >
                <h2 class="text-lg font-semibold">Playground</h2>
                <div class="ml-auto flex w-full space-x-2 sm:justify-end">
                  <button
                    class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 flex-1 justify-between md:max-w-[200px] lg:max-w-[300px]"
                    role="combobox"
                    aria-label="Load a preset..."
                    aria-expanded="false"
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="radix-:r7j:"
                    data-state="closed"
                  >
                    Load a preset...
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
                      class="ml-2 h-4 w-4 shrink-0 opacity-50"
                    >
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </button>
                  <button
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:r7k:"
                    data-state="closed"
                  >
                    Save
                  </button>
                  <div class="hidden space-x-2 md:flex">
                    <button
                      class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r7n:"
                      data-state="closed"
                    >
                      View code
                    </button>
                    <button
                      class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r7q:"
                      data-state="closed"
                    >
                      Share
                    </button>
                  </div>
                  <button
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
                    type="button"
                    id="radix-:r7r:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <span class="sr-only">Actions</span>
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
                      class="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                data-orientation="horizontal"
                role="none"
                class="shrink-0 bg-border h-[1px] w-full"
              ></div>
              <div dir="ltr" data-orientation="horizontal" class="flex-1">
                <div class="container h-full py-6">
                  <div
                    class="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]"
                  >
                    <div class="hidden flex-col space-y-4 sm:flex md:order-2">
                      <div class="grid gap-2">
                        <span
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          data-state="closed"
                          >Mode</span
                        >
                        <div
                          role="tablist"
                          aria-orientation="horizontal"
                          class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid grid-cols-3"
                          tabindex="0"
                          data-orientation="horizontal"
                          style="outline: none"
                        >
                          <button
                            type="button"
                            role="tab"
                            aria-selected="true"
                            aria-controls="radix-:r83:-content-complete"
                            data-state="active"
                            id="radix-:r83:-trigger-complete"
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                            tabindex="-1"
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            <span class="sr-only">Complete</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="none"
                              class="h-5 w-5"
                            >
                              <rect
                                x="4"
                                y="3"
                                width="12"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="4"
                                y="7"
                                width="12"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="4"
                                y="11"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="4"
                                y="15"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="8.5"
                                y="11"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="8.5"
                                y="15"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="13"
                                y="11"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                            </svg>
                          </button>
                          <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:r83:-content-insert"
                            data-state="inactive"
                            id="radix-:r83:-trigger-insert"
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                            tabindex="-1"
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            <span class="sr-only">Insert</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="none"
                              class="h-5 w-5"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
                                fill="currentColor"
                              ></path>
                              <rect
                                x="4"
                                y="15"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="8.5"
                                y="15"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="13"
                                y="15"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                            </svg>
                          </button>
                          <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:r83:-content-edit"
                            data-state="inactive"
                            id="radix-:r83:-trigger-edit"
                            class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                            tabindex="-1"
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            <span class="sr-only">Edit</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="none"
                              class="h-5 w-5"
                            >
                              <rect
                                x="4"
                                y="3"
                                width="12"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="4"
                                y="7"
                                width="12"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="4"
                                y="11"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="4"
                                y="15"
                                width="4"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <rect
                                x="8.5"
                                y="11"
                                width="3"
                                height="2"
                                rx="1"
                                fill="currentColor"
                              ></rect>
                              <path
                                d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="model"
                          data-state="closed"
                          >Model</label
                        >
                        <button
                          class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full justify-between"
                          role="combobox"
                          aria-expanded="false"
                          aria-label="Select a model"
                          type="button"
                          aria-haspopup="dialog"
                          aria-controls="radix-:r87:"
                          data-state="closed"
                        >
                          text-davinci-003
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
                            class="ml-2 h-4 w-4 shrink-0 opacity-50"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path>
                          </svg>
                        </button>
                      </div>
                      <div class="grid gap-2 pt-2">
                        <div class="grid gap-4" data-state="closed">
                          <div class="flex items-center justify-between">
                            <label
                              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              for="temperature"
                              >Temperature</label
                            ><span
                              class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                              >0.56</span
                            >
                          </div>
                          <span
                            dir="ltr"
                            data-orientation="horizontal"
                            aria-disabled="false"
                            class="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4"
                            id="temperature"
                            aria-label="Temperature"
                            style="
                              --radix-slider-thumb-transform: translateX(-50%);
                            "
                            ><span
                              data-orientation="horizontal"
                              class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
                              ><span
                                data-orientation="horizontal"
                                class="absolute h-full bg-primary"
                                style="left: 0%; right: 44%"
                              ></span></span
                            ><span
                              style="
                                transform: var(--radix-slider-thumb-transform);
                                position: absolute;
                                left: calc(56% + -0.96px);
                              "
                              ><span
                                role="slider"
                                aria-valuemin="0"
                                aria-valuemax="1"
                                aria-orientation="horizontal"
                                data-orientation="horizontal"
                                tabindex="0"
                                class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                data-radix-collection-item=""
                                aria-valuenow="0.56"
                                style=""
                              ></span></span
                          ></span>
                        </div>
                      </div>
                      <div class="grid gap-2 pt-2">
                        <div class="grid gap-4" data-state="closed">
                          <div class="flex items-center justify-between">
                            <label
                              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              for="maxlength"
                              >Maximum Length</label
                            ><span
                              class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                              >256</span
                            >
                          </div>
                          <span
                            dir="ltr"
                            data-orientation="horizontal"
                            aria-disabled="false"
                            class="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4"
                            id="maxlength"
                            aria-label="Maximum Length"
                            style="
                              --radix-slider-thumb-transform: translateX(-50%);
                            "
                            ><span
                              data-orientation="horizontal"
                              class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
                              ><span
                                data-orientation="horizontal"
                                class="absolute h-full bg-primary"
                                style="left: 0%; right: 93.6%"
                              ></span></span
                            ><span
                              style="
                                transform: var(--radix-slider-thumb-transform);
                                position: absolute;
                                left: calc(6.4% + 6.976px);
                              "
                              ><span
                                role="slider"
                                aria-valuemin="0"
                                aria-valuemax="4000"
                                aria-orientation="horizontal"
                                data-orientation="horizontal"
                                tabindex="0"
                                class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                data-radix-collection-item=""
                                aria-valuenow="256"
                                style=""
                              ></span></span
                          ></span>
                        </div>
                      </div>
                      <div class="grid gap-2 pt-2">
                        <div class="grid gap-4" data-state="closed">
                          <div class="flex items-center justify-between">
                            <label
                              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              for="top-p"
                              >Top P</label
                            ><span
                              class="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border"
                              >0.9</span
                            >
                          </div>
                          <span
                            dir="ltr"
                            data-orientation="horizontal"
                            aria-disabled="false"
                            class="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4"
                            id="top-p"
                            aria-label="Top P"
                            style="
                              --radix-slider-thumb-transform: translateX(-50%);
                            "
                            ><span
                              data-orientation="horizontal"
                              class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary"
                              ><span
                                data-orientation="horizontal"
                                class="absolute h-full bg-primary"
                                style="left: 0%; right: 10%"
                              ></span></span
                            ><span
                              style="
                                transform: var(--radix-slider-thumb-transform);
                                position: absolute;
                                left: calc(90% + -6.4px);
                              "
                              ><span
                                role="slider"
                                aria-valuemin="0"
                                aria-valuemax="1"
                                aria-orientation="horizontal"
                                data-orientation="horizontal"
                                tabindex="0"
                                class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                data-radix-collection-item=""
                                aria-valuenow="0.9"
                                style=""
                              ></span></span
                          ></span>
                        </div>
                      </div>
                    </div>
                    <div class="md:order-1">
                      <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r83:-trigger-complete"
                        id="radix-:r83:-content-complete"
                        tabindex="0"
                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"
                        style="animation-duration: 0s"
                      >
                        <div class="flex h-full flex-col space-y-4">
                          <textarea
                            class="flex w-full rounded-md border border-input bg-transparent text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
                            placeholder="Write a tagline for an ice cream shop"
                          ></textarea>
                          <div class="flex items-center space-x-2">
                            <button
                              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                            >
                              Submit
                            </button>
                            <button
                              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4"
                            >
                              <span class="sr-only">Show history</span>
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
                                class="h-4 w-4"
                              >
                                <path d="M3 3v5h5"></path>
                                <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path>
                                <path d="M12 7v5l4 2"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r83:-trigger-insert"
                        hidden=""
                        id="radix-:r83:-content-insert"
                        tabindex="0"
                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"
                      ></div>
                      <div
                        data-state="inactive"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:r83:-trigger-edit"
                        hidden=""
                        id="radix-:r83:-content-edit"
                        tabindex="0"
                        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <PageFooter />
  </div>
</template>
<script setup lang="ts">
import PageFooter from "~/components/PageFooter.vue";
</script>
