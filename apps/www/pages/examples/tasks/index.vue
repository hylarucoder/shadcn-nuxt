<template>
  <div class="relative flex min-h-screen flex-col">
    <NavHeader />
    <div class="flex-1">
      <div class="container relative pb-10">
        <ExampleHero />
        <section>
          <ExampleLinks />
          <div
            class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl"
          >
            <div class="md:hidden">
              <img
                alt="Playground"
                loading="lazy"
                width="1280"
                height="998"
                decoding="async"
                data-nimg="1"
                class="block dark:hidden"
                srcset="
                  /_next/image?url=%2Fexamples%2Ftasks-light.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Ftasks-light.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Ftasks-light.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              /><img
                alt="Playground"
                loading="lazy"
                width="1280"
                height="998"
                decoding="async"
                data-nimg="1"
                class="hidden dark:block"
                srcset="
                  /_next/image?url=%2Fexamples%2Ftasks-dark.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Ftasks-dark.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Ftasks-dark.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              />
            </div>
            <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
              <div class="flex items-center justify-between space-y-2">
                <div>
                  <h2 class="text-2xl font-bold tracking-tight">
                    Welcome back!
                  </h2>
                  <p class="text-muted-foreground">
                    Here's a list of your tasks for this month!
                  </p>
                </div>
                <div class="flex items-center space-x-2">
                  <button
                    class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground py-2 px-4 relative h-8 w-8 rounded-full"
                    type="button"
                    id="radix-:r6d:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <span
                      class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                      ><img
                        class="aspect-square h-full w-full"
                        alt="@shadcn"
                        src="/avatars/03.png"
                    /></span>
                  </button>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="flex flex-1 items-center space-x-2">
                    <input
                      class="flex rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-8 w-[150px] lg:w-[250px]"
                      placeholder="Filter tasks..."
                      value=""
                    />
                    <button
                      class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground px-3 rounded-md h-8 border-dashed"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r6f:"
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="16"></line>
                        <line x1="8" x2="16" y1="12" y2="12"></line>
                      </svg>
                      Status
                    </button>
                    <button
                      class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground px-3 rounded-md h-8 border-dashed"
                      type="button"
                      aria-haspopup="dialog"
                      aria-expanded="false"
                      aria-controls="radix-:r6g:"
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
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" x2="12" y1="8" y2="16"></line>
                        <line x1="8" x2="16" y1="12" y2="12"></line>
                      </svg>
                      Priority
                    </button>
                  </div>
                  <button
                    class="items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground px-3 rounded-md ml-auto hidden h-8 lg:flex"
                    type="button"
                    id="radix-:r6h:"
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
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                        >
                          <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select all"
                            ></button>
                          </th>
                          <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="">Task</div>
                          </th>
                          <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center space-x-2">
                              <button
                                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground px-3 rounded-md -ml-3 h-8 data-[state=open]:bg-accent"
                                type="button"
                                id="radix-:r6j:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                              >
                                <span>Title</span>
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
                                  class="ml-2 h-4 w-4"
                                >
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </button>
                            </div>
                          </th>
                          <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center space-x-2">
                              <button
                                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground px-3 rounded-md -ml-3 h-8 data-[state=open]:bg-accent"
                                type="button"
                                id="radix-:r6l:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                              >
                                <span>Status</span>
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
                                  class="ml-2 h-4 w-4"
                                >
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </button>
                            </div>
                          </th>
                          <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center space-x-2">
                              <button
                                class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground px-3 rounded-md -ml-3 h-8 data-[state=open]:bg-accent"
                                type="button"
                                id="radix-:r6n:"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                data-state="closed"
                              >
                                <span>Priority</span>
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
                                  class="ml-2 h-4 w-4"
                                >
                                  <path d="m7 15 5 5 5-5"></path>
                                  <path d="m7 9 5-5 5 5"></path>
                                </svg>
                              </button>
                            </div>
                          </th>
                          <th
                            class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0"
                          ></th>
                        </tr>
                      </thead>
                      <tbody class="[&amp;_tr:last-child]:border-0">
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-8782</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Documentation
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >You can't compress the program without
                                quantifying the open-source SSD pixel!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="16 12 12 8 8 12"></polyline>
                                <line x1="12" x2="12" y1="16" y2="8"></line>
                              </svg>
                              <span>In Progress</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="17" x2="3" y1="12" y2="12"></line>
                                <polyline points="11 18 17 12 11 6"></polyline>
                                <path d="M21 5v14"></path>
                              </svg>
                              <span>Medium</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r6p:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-7878</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Documentation
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >Try to calculate the EXE feed, maybe it will
                                index the multi-byte pixel!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path
                                  d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                ></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span>Backlog</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="17" x2="3" y1="12" y2="12"></line>
                                <polyline points="11 18 17 12 11 6"></polyline>
                                <path d="M21 5v14"></path>
                              </svg>
                              <span>Medium</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r6r:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-7839</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Bug
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >We need to bypass the neural TCP card!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              <span>Todo</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="12" x2="12" y1="7" y2="21"></line>
                                <polyline points="18 13 12 7 6 13"></polyline>
                                <path d="M5 3h14"></path>
                              </svg>
                              <span>High</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r6t:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-5562</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Feature
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >The SAS interface is down, bypass the
                                open-source pixel so we can back up the PNG
                                bandwidth!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <path
                                  d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
                                ></path>
                                <path d="M12 17h.01"></path>
                              </svg>
                              <span>Backlog</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="17" x2="3" y1="12" y2="12"></line>
                                <polyline points="11 18 17 12 11 6"></polyline>
                                <path d="M21 5v14"></path>
                              </svg>
                              <span>Medium</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r6v:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-8686</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Feature
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >I'll parse the wireless SSL protocol, that
                                should driver the API panel!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="15" x2="9" y1="9" y2="15"></line>
                                <line x1="9" x2="15" y1="9" y2="15"></line>
                              </svg>
                              <span>Canceled</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="17" x2="3" y1="12" y2="12"></line>
                                <polyline points="11 18 17 12 11 6"></polyline>
                                <path d="M21 5v14"></path>
                              </svg>
                              <span>Medium</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r71:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-1280</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Bug
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >Use the digital TLS panel, then you can
                                transmit the haptic system!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <path
                                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                ></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              <span>Done</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="12" x2="12" y1="7" y2="21"></line>
                                <polyline points="18 13 12 7 6 13"></polyline>
                                <path d="M5 3h14"></path>
                              </svg>
                              <span>High</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r73:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-7262</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Feature
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >The UTF8 application is down, parse the neural
                                bandwidth so we can back up the PNG
                                firewall!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <path
                                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                                ></path>
                                <path d="m9 12 2 2 4-4"></path>
                              </svg>
                              <span>Done</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="12" x2="12" y1="7" y2="21"></line>
                                <polyline points="18 13 12 7 6 13"></polyline>
                                <path d="M5 3h14"></path>
                              </svg>
                              <span>High</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r75:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-1138</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Feature
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >Generating the driver won't do anything, we
                                need to quantify the 1080p SMTP bandwidth!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="16 12 12 8 8 12"></polyline>
                                <line x1="12" x2="12" y1="16" y2="8"></line>
                              </svg>
                              <span>In Progress</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="17" x2="3" y1="12" y2="12"></line>
                                <polyline points="11 18 17 12 11 6"></polyline>
                                <path d="M21 5v14"></path>
                              </svg>
                              <span>Medium</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r77:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-7184</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Feature
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >We need to program the back-end THX
                                pixel!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                              <span>Todo</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="12" x2="12" y1="17" y2="3"></line>
                                <polyline points="6 11 12 17 18 11"></polyline>
                                <path d="M19 21H5"></path>
                              </svg>
                              <span>Low</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r79:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                        <tr
                          class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                          data-state="false"
                        >
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              type="button"
                              role="checkbox"
                              aria-checked="false"
                              data-state="unchecked"
                              value="on"
                              class="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground translate-y-[2px]"
                              aria-label="Select row"
                            ></button>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="w-[80px]">TASK-5160</div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex space-x-2">
                              <div
                                class="inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground"
                              >
                                Documentation
                              </div>
                              <span class="max-w-[500px] truncate font-medium"
                                >Calculating the bus won't do anything, we need
                                to navigate the back-end JSON protocol!</span
                              >
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex w-[100px] items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="16 12 12 8 8 12"></polyline>
                                <line x1="12" x2="12" y1="16" y2="8"></line>
                              </svg>
                              <span>In Progress</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <div class="flex items-center">
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
                                class="mr-2 h-4 w-4 text-muted-foreground"
                              >
                                <line x1="12" x2="12" y1="7" y2="21"></line>
                                <polyline points="18 13 12 7 6 13"></polyline>
                                <path d="M5 3h14"></path>
                              </svg>
                              <span>High</span>
                            </div>
                          </td>
                          <td
                            class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0"
                          >
                            <button
                              class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                              type="button"
                              id="radix-:r7b:"
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
                                class="h-4 w-4"
                              >
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              <span class="sr-only">Open menu</span>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="flex items-center justify-between px-2">
                  <div class="flex-1 text-sm text-muted-foreground">
                    0 of 100 row(s) selected.
                  </div>
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="flex items-center space-x-2">
                      <p class="text-sm font-medium">Rows per page</p>
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:r7d:"
                        aria-expanded="false"
                        aria-autocomplete="none"
                        dir="ltr"
                        data-state="closed"
                        class="flex items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 h-8 w-[70px]"
                      >
                        <span style="pointer-events: none">10</span>
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
                          class="h-4 w-4 opacity-50"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>
                    </div>
                    <div
                      class="flex w-[100px] items-center justify-center text-sm font-medium"
                    >
                      Page 1 of 10
                    </div>
                    <div class="flex items-center space-x-2">
                      <button
                        class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
                        disabled=""
                      >
                        <span class="sr-only">Go to first page</span>
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
                          <polyline points="11 17 6 12 11 7"></polyline>
                          <polyline points="18 17 13 12 18 7"></polyline>
                        </svg>
                      </button>
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                        disabled=""
                      >
                        <span class="sr-only">Go to previous page</span>
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
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </button>
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                      >
                        <span class="sr-only">Go to next page</span>
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
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </button>
                      <button
                        class="items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
                      >
                        <span class="sr-only">Go to last page</span>
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
    <PageFooter />
  </div>
</template>
<script setup lang="ts">
import ExampleHero from "~/components/ExampleHero.vue";
import NavHeader from "~/components/NavHeader.vue";
import PageFooter from "~/components/PageFooter.vue";
import ExampleLinks from "~/pages/examples/components/ExampleLinks.vue";
</script>
