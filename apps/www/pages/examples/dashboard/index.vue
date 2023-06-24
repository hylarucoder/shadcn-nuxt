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
                      class="flex items-center px-4 font-bold text-primary"
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
                      class="flex items-center px-4 font-medium text-muted-foreground"
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
              href="https://github.com/shadcn/ui/tree/main/apps/www/app/examples/dashboard"
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
                alt="Dashboard"
                loading="lazy"
                width="1280"
                height="866"
                decoding="async"
                data-nimg="1"
                class="block dark:hidden"
                srcset="
                  /_next/image?url=%2Fexamples%2Fdashboard-light.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Fdashboard-light.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Fdashboard-light.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              /><img
                alt="Dashboard"
                loading="lazy"
                width="1280"
                height="866"
                decoding="async"
                data-nimg="1"
                class="hidden dark:block"
                srcset="
                  /_next/image?url=%2Fexamples%2Fdashboard-dark.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Fdashboard-dark.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Fdashboard-dark.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              />
            </div>
            <div class="hidden flex-col md:flex">
              <div class="border-b">
                <div class="flex h-16 items-center px-4">
                  <button
                    class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-[200px] justify-between"
                    role="combobox"
                    aria-expanded="false"
                    aria-label="Select a team"
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="radix-:r1k:"
                    data-state="closed"
                  >
                    <span
                      class="relative flex shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5"
                      ><img
                        class="aspect-square h-full w-full"
                        alt="Alicia Koch"
                        src="https://avatar.vercel.sh/personal.png" /></span
                    >Alicia Koch
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
                      class="ml-auto h-4 w-4 shrink-0 opacity-50"
                    >
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </button>
                  <nav class="flex items-center space-x-4 lg:space-x-6 mx-6">
                    <a
                      class="text-sm font-medium transition-colors hover:text-primary"
                      href="/examples/dashboard"
                      >Overview</a
                    ><a
                      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      href="/examples/dashboard"
                      >Customers</a
                    ><a
                      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      href="/examples/dashboard"
                      >Products</a
                    ><a
                      class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      href="/examples/dashboard"
                      >Settings</a
                    >
                  </nav>
                  <div class="ml-auto flex items-center space-x-4">
                    <div>
                      <input
                        class="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-9 md:w-[100px] lg:w-[300px]"
                        placeholder="Search..."
                        type="search"
                      />
                    </div>
                    <button
                      class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-8 w-8 rounded-full"
                      type="button"
                      id="radix-:r1l:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-state="closed"
                    >
                      <span
                        class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8"
                        ><img
                          class="aspect-square h-full w-full"
                          alt="@shadcn"
                          src="/avatars/01.png"
                      /></span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="flex-1 space-y-4 p-8 pt-6">
                <div class="flex items-center justify-between space-y-2">
                  <h2 class="text-3xl font-bold tracking-tight">Dashboard</h2>
                  <div class="flex items-center space-x-2">
                    <div class="grid gap-2">
                      <button
                        class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-[240px] justify-start text-left font-normal"
                        id="date"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:r1n:"
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
                          class="mr-2 h-4 w-4"
                        >
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="4"
                            rx="2"
                            ry="2"
                          ></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                        Jan 20, 2023 - Feb 09, 2023
                      </button>
                    </div>
                    <button
                      class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-3 rounded-md"
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
                        class="mr-2 h-4 w-4"
                      >
                        <path
                          d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                        ></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                      </svg>
                      Download
                    </button>
                  </div>
                </div>
                <div dir="ltr" data-orientation="horizontal" class="space-y-4">
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
                    tabindex="0"
                    data-orientation="horizontal"
                    style="outline: none"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r1o:-content-overview"
                      data-state="active"
                      id="radix-:r1o:-trigger-overview"
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Overview
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r1o:-content-analytics"
                      data-state="inactive"
                      data-disabled=""
                      disabled=""
                      id="radix-:r1o:-trigger-analytics"
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Analytics
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r1o:-content-reports"
                      data-state="inactive"
                      data-disabled=""
                      disabled=""
                      id="radix-:r1o:-trigger-reports"
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Reports
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r1o:-content-notifications"
                      data-state="inactive"
                      data-disabled=""
                      disabled=""
                      id="radix-:r1o:-trigger-notifications"
                      class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Notifications
                    </button>
                  </div>
                  <div
                    data-state="active"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r1o:-trigger-overview"
                    id="radix-:r1o:-content-overview"
                    tabindex="0"
                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
                    style="animation-duration: 0s"
                  >
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div
                        class="rounded-lg border bg-card text-card-foreground shadow-sm"
                      >
                        <div
                          class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                          <h3 class="tracking-tight text-sm font-medium">
                            Total Revenue
                          </h3>
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
                            class="h-4 w-4 text-muted-foreground"
                          >
                            <line x1="12" x2="12" y1="2" y2="22"></line>
                            <path
                              d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                            ></path>
                          </svg>
                        </div>
                        <div class="p-6 pt-0">
                          <div class="text-2xl font-bold">$45,231.89</div>
                          <p class="text-xs text-muted-foreground">
                            +20.1% from last month
                          </p>
                        </div>
                      </div>
                      <div
                        class="rounded-lg border bg-card text-card-foreground shadow-sm"
                      >
                        <div
                          class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                          <h3 class="tracking-tight text-sm font-medium">
                            Subscriptions
                          </h3>
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
                            class="h-4 w-4 text-muted-foreground"
                          >
                            <path
                              d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
                            ></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <div class="p-6 pt-0">
                          <div class="text-2xl font-bold">+2350</div>
                          <p class="text-xs text-muted-foreground">
                            +180.1% from last month
                          </p>
                        </div>
                      </div>
                      <div
                        class="rounded-lg border bg-card text-card-foreground shadow-sm"
                      >
                        <div
                          class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                          <h3 class="tracking-tight text-sm font-medium">
                            Sales
                          </h3>
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
                            class="h-4 w-4 text-muted-foreground"
                          >
                            <rect
                              width="20"
                              height="14"
                              x="2"
                              y="5"
                              rx="2"
                            ></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                          </svg>
                        </div>
                        <div class="p-6 pt-0">
                          <div class="text-2xl font-bold">+12,234</div>
                          <p class="text-xs text-muted-foreground">
                            +19% from last month
                          </p>
                        </div>
                      </div>
                      <div
                        class="rounded-lg border bg-card text-card-foreground shadow-sm"
                      >
                        <div
                          class="p-6 flex flex-row items-center justify-between space-y-0 pb-2"
                        >
                          <h3 class="tracking-tight text-sm font-medium">
                            Active Now
                          </h3>
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
                            class="h-4 w-4 text-muted-foreground"
                          >
                            <polyline
                              points="22 12 18 12 15 21 9 3 6 12 2 12"
                            ></polyline>
                          </svg>
                        </div>
                        <div class="p-6 pt-0">
                          <div class="text-2xl font-bold">+573</div>
                          <p class="text-xs text-muted-foreground">
                            +201 since last hour
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                      <div
                        class="rounded-lg border bg-card text-card-foreground shadow-sm col-span-4"
                      >
                        <div class="flex flex-col space-y-1.5 p-6">
                          <h3
                            class="text-lg font-semibold leading-none tracking-tight"
                          >
                            Overview
                          </h3>
                        </div>
                        <div class="p-6 pt-0 pl-2">
                          <div
                            class="recharts-responsive-container"
                            style="width: 100%; height: 350px; min-width: 0px"
                            width="684.84375"
                            height="350"
                          >
                            <div
                              class="recharts-wrapper"
                              role="region"
                              style="
                                position: relative;
                                cursor: default;
                                width: 685px;
                                height: 350px;
                              "
                            >
                              <svg
                                class="recharts-surface"
                                width="685"
                                height="350"
                                viewBox="0 0 685 350"
                              >
                                <title></title>
                                <desc></desc>
                                <defs>
                                  <clipPath id="recharts4-clip">
                                    <rect
                                      x="65"
                                      y="5"
                                      height="310"
                                      width="615"
                                    ></rect>
                                  </clipPath>
                                </defs>
                                <g
                                  class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis"
                                >
                                  <g class="recharts-cartesian-axis-ticks">
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="90.625"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="90.625" dy="0.71em">
                                          Jan
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="141.875"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="141.875" dy="0.71em">
                                          Feb
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="193.125"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="193.125" dy="0.71em">
                                          Mar
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="244.375"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="244.375" dy="0.71em">
                                          Apr
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="295.625"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="295.625" dy="0.71em">
                                          May
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="346.875"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="346.875" dy="0.71em">
                                          Jun
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="398.125"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="398.125" dy="0.71em">
                                          Jul
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="449.375"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="449.375" dy="0.71em">
                                          Aug
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="500.625"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="500.625" dy="0.71em">
                                          Sep
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="551.875"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="551.875" dy="0.71em">
                                          Oct
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="603.125"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="603.125" dy="0.71em">
                                          Nov
                                        </tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="bottom"
                                        width="615"
                                        height="30"
                                        x="654.375"
                                        y="323"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="middle"
                                      >
                                        <tspan x="654.375" dy="0.71em">
                                          Dec
                                        </tspan>
                                      </text>
                                    </g>
                                  </g>
                                </g>
                                <g
                                  class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis"
                                >
                                  <g class="recharts-cartesian-axis-ticks">
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="left"
                                        width="60"
                                        height="310"
                                        x="57"
                                        y="315"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="end"
                                      >
                                        <tspan x="57" dy="0.355em">$0</tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="left"
                                        width="60"
                                        height="310"
                                        x="57"
                                        y="237.5"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="end"
                                      >
                                        <tspan x="57" dy="0.355em">$1500</tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="left"
                                        width="60"
                                        height="310"
                                        x="57"
                                        y="160"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="end"
                                      >
                                        <tspan x="57" dy="0.355em">$3000</tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="left"
                                        width="60"
                                        height="310"
                                        x="57"
                                        y="82.5"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="end"
                                      >
                                        <tspan x="57" dy="0.355em">$4500</tspan>
                                      </text>
                                    </g>
                                    <g
                                      class="recharts-layer recharts-cartesian-axis-tick"
                                    >
                                      <text
                                        stroke="none"
                                        font-size="12"
                                        orientation="left"
                                        width="60"
                                        height="310"
                                        x="57"
                                        y="9"
                                        fill="#888888"
                                        class="recharts-text recharts-cartesian-axis-tick-value"
                                        text-anchor="end"
                                      >
                                        <tspan x="57" dy="0.355em">$6000</tspan>
                                      </text>
                                    </g>
                                  </g>
                                </g>
                                <g class="recharts-layer recharts-bar">
                                  <g
                                    class="recharts-layer recharts-bar-rectangles"
                                  >
                                    <g class="recharts-layer">
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="269.75166666666667"
                                          name="Jan"
                                          x="70.125"
                                          y="45.248333333333335"
                                          class="recharts-rectangle"
                                          d="M70.125,49.248333333333335A 4,4,0,0,1,74.125,45.248333333333335L 107.125,45.248333333333335A 4,4,0,0,1,
        111.125,49.248333333333335L 111.125,315L 70.125,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="176.80333333333334"
                                          name="Feb"
                                          x="121.375"
                                          y="138.19666666666666"
                                          class="recharts-rectangle"
                                          d="M121.375,142.19666666666666A 4,4,0,0,1,125.375,138.19666666666666L 158.375,138.19666666666666A 4,4,0,0,1,
        162.375,142.19666666666666L 162.375,315L 121.375,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="136.76166666666666"
                                          name="Mar"
                                          x="172.625"
                                          y="178.23833333333334"
                                          class="recharts-rectangle"
                                          d="M172.625,182.23833333333334A 4,4,0,0,1,176.625,178.23833333333334L 209.625,178.23833333333334A 4,4,0,0,1,
        213.625,182.23833333333334L 213.625,315L 172.625,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="136.9683333333333"
                                          name="Apr"
                                          x="223.875"
                                          y="178.0316666666667"
                                          class="recharts-rectangle"
                                          d="M223.875,182.0316666666667A 4,4,0,0,1,227.875,178.0316666666667L 260.875,178.0316666666667A 4,4,0,0,1,
        264.875,182.0316666666667L 264.875,315L 223.875,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="291.14166666666665"
                                          name="May"
                                          x="275.125"
                                          y="23.85833333333335"
                                          class="recharts-rectangle"
                                          d="M275.125,27.85833333333335A 4,4,0,0,1,279.125,23.85833333333335L 312.125,23.85833333333335A 4,4,0,0,1,
        316.125,27.85833333333335L 316.125,315L 275.125,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="276.7266666666667"
                                          name="Jun"
                                          x="326.375"
                                          y="38.27333333333331"
                                          class="recharts-rectangle"
                                          d="M326.375,42.27333333333331A 4,4,0,0,1,330.375,38.27333333333331L 363.375,38.27333333333331A 4,4,0,0,1,
        367.375,42.27333333333331L 367.375,315L 326.375,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="260.6583333333333"
                                          name="Jul"
                                          x="377.625"
                                          y="54.3416666666667"
                                          class="recharts-rectangle"
                                          d="M377.625,58.3416666666667A 4,4,0,0,1,381.625,54.3416666666667L 414.625,54.3416666666667A 4,4,0,0,1,
        418.625,58.3416666666667L 418.625,315L 377.625,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="156.6533333333333"
                                          name="Aug"
                                          x="428.875"
                                          y="158.3466666666667"
                                          class="recharts-rectangle"
                                          d="M428.875,162.3466666666667A 4,4,0,0,1,432.875,158.3466666666667L 465.875,158.3466666666667A 4,4,0,0,1,
        469.875,162.3466666666667L 469.875,315L 428.875,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="56.316666666666606"
                                          name="Sep"
                                          x="480.125"
                                          y="258.6833333333334"
                                          class="recharts-rectangle"
                                          d="M480.125,262.6833333333334A 4,4,0,0,1,484.125,258.6833333333334L 517.125,258.6833333333334A 4,4,0,0,1,
        521.125,262.6833333333334L 521.125,315L 480.125,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="208.01"
                                          name="Oct"
                                          x="531.375"
                                          y="106.99000000000001"
                                          class="recharts-rectangle"
                                          d="M531.375,110.99000000000001A 4,4,0,0,1,535.375,106.99000000000001L 568.375,106.99000000000001A 4,4,0,0,1,
        572.375,110.99000000000001L 572.375,315L 531.375,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="231.93166666666667"
                                          name="Nov"
                                          x="582.625"
                                          y="83.06833333333333"
                                          class="recharts-rectangle"
                                          d="M582.625,87.06833333333333A 4,4,0,0,1,586.625,83.06833333333333L 619.625,83.06833333333333A 4,4,0,0,1,
        623.625,87.06833333333333L 623.625,315L 582.625,315Z"
                                        ></path>
                                      </g>
                                      <g
                                        class="recharts-layer recharts-bar-rectangle"
                                        role="img"
                                      >
                                        <path
                                          fill="#adfa1d"
                                          radius="4,4,0,0"
                                          width="41"
                                          height="277.45"
                                          name="Dec"
                                          x="633.875"
                                          y="37.55000000000001"
                                          class="recharts-rectangle"
                                          d="M633.875,41.55000000000001A 4,4,0,0,1,637.875,37.55000000000001L 670.875,37.55000000000001A 4,4,0,0,1,
        674.875,41.55000000000001L 674.875,315L 633.875,315Z"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                  <g class="recharts-layer"></g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="rounded-lg border bg-card text-card-foreground shadow-sm col-span-3"
                      >
                        <div class="flex flex-col space-y-1.5 p-6">
                          <h3
                            class="text-lg font-semibold leading-none tracking-tight"
                          >
                            Recent Sales
                          </h3>
                          <p class="text-sm text-muted-foreground">
                            You made 265 sales this month.
                          </p>
                        </div>
                        <div class="p-6 pt-0">
                          <div class="space-y-8">
                            <div class="flex items-center">
                              <span
                                class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                ><img
                                  class="aspect-square h-full w-full"
                                  alt="Avatar"
                                  src="/avatars/01.png"
                              /></span>
                              <div class="ml-4 space-y-1">
                                <p class="text-sm font-medium leading-none">
                                  Olivia Martin
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  olivia.martin@email.com
                                </p>
                              </div>
                              <div class="ml-auto font-medium">+$1,999.00</div>
                            </div>
                            <div class="flex items-center">
                              <span
                                class="relative shrink-0 overflow-hidden rounded-full flex h-9 w-9 items-center justify-center space-y-0 border"
                                ><img
                                  class="aspect-square h-full w-full"
                                  alt="Avatar"
                                  src="/avatars/02.png"
                              /></span>
                              <div class="ml-4 space-y-1">
                                <p class="text-sm font-medium leading-none">
                                  Jackson Lee
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  jackson.lee@email.com
                                </p>
                              </div>
                              <div class="ml-auto font-medium">+$39.00</div>
                            </div>
                            <div class="flex items-center">
                              <span
                                class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                ><img
                                  class="aspect-square h-full w-full"
                                  alt="Avatar"
                                  src="/avatars/03.png"
                              /></span>
                              <div class="ml-4 space-y-1">
                                <p class="text-sm font-medium leading-none">
                                  Isabella Nguyen
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  isabella.nguyen@email.com
                                </p>
                              </div>
                              <div class="ml-auto font-medium">+$299.00</div>
                            </div>
                            <div class="flex items-center">
                              <span
                                class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                ><img
                                  class="aspect-square h-full w-full"
                                  alt="Avatar"
                                  src="/avatars/04.png"
                              /></span>
                              <div class="ml-4 space-y-1">
                                <p class="text-sm font-medium leading-none">
                                  William Kim
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  will@email.com
                                </p>
                              </div>
                              <div class="ml-auto font-medium">+$99.00</div>
                            </div>
                            <div class="flex items-center">
                              <span
                                class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                                ><img
                                  class="aspect-square h-full w-full"
                                  alt="Avatar"
                                  src="/avatars/05.png"
                              /></span>
                              <div class="ml-4 space-y-1">
                                <p class="text-sm font-medium leading-none">
                                  Sofia Davis
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  sofia.davis@email.com
                                </p>
                              </div>
                              <div class="ml-auto font-medium">+$39.00</div>
                            </div>
                          </div>
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

    <PageFooter />
  </div>
</template>
<script setup lang="ts">
import PageFooter from "~/components/PageFooter.vue";
</script>
