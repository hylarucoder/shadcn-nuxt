<template>
  <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
    <div class="md:hidden">
      <img
        alt="Music"
        loading="lazy"
        width="1280"
        height="1114"
        decoding="async"
        data-nimg="1"
        class="block dark:hidden"
        srcset="
          /_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=1920&amp;q=75 1x,
          /_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=3840&amp;q=75 2x
        "
        src="/_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=3840&amp;q=75"
        style="color: transparent"
      /><img
        alt="Music"
        loading="lazy"
        width="1280"
        height="1114"
        decoding="async"
        data-nimg="1"
        class="hidden dark:block"
        srcset="
          /_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=1920&amp;q=75 1x,
          /_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=3840&amp;q=75 2x
        "
        src="/_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=3840&amp;q=75"
        style="color: transparent"
      />
    </div>
    <div class="hidden md:block">
      <div
        role="menubar"
        class="flex h-10 items-center space-x-1 border bg-background p-1 rounded-none border-b border-none px-2 lg:px-4"
        tabindex="0"
        data-orientation="horizontal"
        style="outline: none"
      >
        <button
          type="button"
          role="menuitem"
          id="radix-:r8i:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-bold"
          tabindex="-1"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          Music
        </button>
        <button
          type="button"
          role="menuitem"
          id="radix-:r8m:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative"
          tabindex="-1"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          File
        </button>
        <button
          type="button"
          role="menuitem"
          id="radix-:r8q:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
          tabindex="-1"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          Edit
        </button>
        <button
          type="button"
          role="menuitem"
          id="radix-:r8u:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
          tabindex="-1"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          View
        </button>
        <button
          type="button"
          role="menuitem"
          id="radix-:r92:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
          class="cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hidden md:block"
          tabindex="-1"
          data-orientation="horizontal"
          data-radix-collection-item=""
        >
          Account
        </button>
      </div>
      <div class="border-t">
        <div class="bg-background">
          <div class="grid lg:grid-cols-5">
            <div class="pb-12 hidden lg:block">
              <div class="space-y-4 py-4">
                <div class="px-4 py-2">
                  <h2 class="mb-2 px-2 text-lg font-semibold tracking-tight">Discover</h2>
                  <div class="space-y-1">
                    <button
                      class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-3 rounded-md w-full justify-start"
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                      Listen Now
                    </button>
                    <button
                      class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
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
                <div class="px-4 py-2">
                  <h2 class="mb-2 px-2 text-lg font-semibold tracking-tight">Library</h2>
                  <div class="space-y-1">
                    <button
                      class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
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
                        <circle cx="8" cy="18" r="4"></circle>
                        <path d="M12 18V2l7 4"></path>
                      </svg>
                      Songs
                    </button>
                    <button
                      class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      Made for You
                    </button>
                    <button
                      class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
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
                        <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                        <circle cx="17" cy="7" r="5"></circle>
                      </svg>
                      Artists
                    </button>
                    <button
                      class="inline-flex items-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start"
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
                        <path d="m16 6 4 14"></path>
                        <path d="M12 6v14"></path>
                        <path d="M8 8v12"></path>
                        <path d="M4 4v16"></path>
                      </svg>
                      Albums
                    </button>
                  </div>
                </div>
                <div class="py-2">
                  <h2 class="relative px-6 text-lg font-semibold tracking-tight">Playlists</h2>
                  <div
                    dir="ltr"
                    class="relative overflow-hidden h-[300px] px-2"
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
                        <div class="space-y-1 p-2">
                          <button
                            class="inline-flex items-center text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-9 px-3 rounded-md w-full justify-start font-normal"
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
                        aria-controls="radix-:r95:-content-music"
                        data-state="active"
                        id="radix-:r95:-trigger-music"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm relative"
                        tabindex="-1"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Music
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="radix-:r95:-content-podcasts"
                        data-state="inactive"
                        id="radix-:r95:-trigger-podcasts"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                        tabindex="-1"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Podcasts
                      </button>
                      <button
                        type="button"
                        role="tab"
                        aria-selected="false"
                        aria-controls="radix-:r95:-content-live"
                        data-state="inactive"
                        data-disabled=""
                        disabled=""
                        id="radix-:r95:-trigger-live"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm"
                        tabindex="-1"
                        data-orientation="horizontal"
                        data-radix-collection-item=""
                      >
                        Live
                      </button>
                    </div>
                    <div class="ml-auto mr-4">
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
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
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" x2="12" y1="8" y2="16"></line>
                          <line x1="8" x2="16" y1="12" y2="12"></line>
                        </svg>
                        Add music
                      </button>
                    </div>
                  </div>
                  <div
                    data-state="active"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r95:-trigger-music"
                    id="radix-:r95:-content-music"
                    tabindex="0"
                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-none p-0 outline-none"
                    style="animation-duration: 0s"
                  >
                    <div class="flex items-center justify-between">
                      <div class="space-y-1">
                        <h2 class="text-2xl font-semibold tracking-tight">Listen Now</h2>
                        <p class="text-sm text-muted-foreground">Top picks for you. Updated daily.</p>
                      </div>
                    </div>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-4"></div>
                    <div class="relative">
                      <div
                        dir="ltr"
                        class="relative overflow-hidden"
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
                            <div class="flex space-x-4 pb-4">
                              <div class="space-y-3 w-[250px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="React Rendezvous"
                                      loading="lazy"
                                      width="250"
                                      height="330"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[250px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="Async Awakenings"
                                      loading="lazy"
                                      width="250"
                                      height="330"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">Async Awakenings</h3>
                                  <p class="text-xs text-muted-foreground">Nina Netcode</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[250px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="The Art of Reusability"
                                      loading="lazy"
                                      width="250"
                                      height="330"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">The Art of Reusability</h3>
                                  <p class="text-xs text-muted-foreground">Lena Logic</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[250px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="Stateful Symphony"
                                      loading="lazy"
                                      width="250"
                                      height="330"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">Stateful Symphony</h3>
                                  <p class="text-xs text-muted-foreground">Beth Binary</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 space-y-1">
                      <h2 class="text-2xl font-semibold tracking-tight">Made for You</h2>
                      <p class="text-sm text-muted-foreground">Your personal playlists. Updated daily.</p>
                    </div>
                    <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-4"></div>
                    <div class="relative">
                      <div
                        dir="ltr"
                        class="relative overflow-hidden"
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
                            <div class="flex space-x-4 pb-4">
                              <div class="space-y-3 w-[150px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="Thinking Components"
                                      loading="lazy"
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">Thinking Components</h3>
                                  <p class="text-xs text-muted-foreground">Lena Logic</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[150px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="Functional Fury"
                                      loading="lazy"
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">Functional Fury</h3>
                                  <p class="text-xs text-muted-foreground">Beth Binary</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[150px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="React Rendezvous"
                                      loading="lazy"
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">React Rendezvous</h3>
                                  <p class="text-xs text-muted-foreground">Ethan Byte</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[150px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="Stateful Symphony"
                                      loading="lazy"
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">Stateful Symphony</h3>
                                  <p class="text-xs text-muted-foreground">Beth Binary</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[150px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="Async Awakenings"
                                      loading="lazy"
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">Async Awakenings</h3>
                                  <p class="text-xs text-muted-foreground">Nina Netcode</p>
                                </div>
                              </div>
                              <div class="space-y-3 w-[150px]">
                                <span data-state="closed"
                                  ><div class="overflow-hidden rounded-md">
                                    <img
                                      alt="The Art of Reusability"
                                      loading="lazy"
                                      width="150"
                                      height="150"
                                      decoding="async"
                                      data-nimg="1"
                                      class="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                      srcset="
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=256&amp;q=75 1x,
                                        /_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75 2x
                                      "
                                      src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      style="color: transparent"
                                    /></div
                                ></span>
                                <div class="space-y-1 text-sm">
                                  <h3 class="font-medium leading-none">The Art of Reusability</h3>
                                  <p class="text-xs text-muted-foreground">Lena Logic</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-state="inactive"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r95:-trigger-podcasts"
                    hidden=""
                    id="radix-:r95:-content-podcasts"
                    tabindex="0"
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
</template>
<script setup lang="ts">
import ExampleHero from "~/components/ExampleHero.vue"
import NavHeader from "~/components/NavHeader.vue"
import NavFooter from "~/components/PageFooter.vue"
import ExampleLinks from "~/pages/examples/components/ExampleLinks.vue"
</script>
