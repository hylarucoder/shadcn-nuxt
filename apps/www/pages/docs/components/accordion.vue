<template>
  <div class="flex-1">
    <div class="border-b">
      <div
        class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
      >
        <DocumentSidebar />
        <main
          class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"
        >
          <div class="mx-auto w-full min-w-0">
            <div
              class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground"
            >
              <div class="overflow-hidden text-ellipsis whitespace-nowrap">
                Docs
              </div>
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
              <div class="font-medium text-foreground">Accordion</div>
            </div>
            <div class="space-y-2">
              <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
                Accordion
              </h1>
              <p class="text-lg text-muted-foreground">
                <span
                  data-br=":r4g:"
                  data-brr="1"
                  style="
                    display: inline-block;
                    vertical-align: top;
                    text-decoration: inherit;
                    max-width: 398px;
                  "
                  >A vertically stacked set of interactive headings that each
                  reveal a section of content.</span
                >
              </p>
            </div>
            <div class="flex items-center space-x-2 pt-4">
              <a
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                href="https://www.radix-ui.com/docs/primitives/components/accordion"
              >
                <svg viewBox="0 0 25 25" fill="none" class="mr-1 h-3 w-3">
                  <path
                    d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
                    fill="currentcolor"
                  ></path>
                  <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
                  <path
                    d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
                    fill="currentcolor"
                  ></path>
                </svg>
                Radix UI</a
              ><a
                target="_blank"
                rel="noreferrer"
                class="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                href="https://www.radix-ui.com/docs/primitives/components/accordion#api-reference"
                >API Reference</a
              >
            </div>
            <div class="pb-12 pt-8">
              <div class="mdx">
                <div
                  class="group relative my-4 flex flex-col space-y-2 [&amp;_.preview>[data-orientation=vertical]]:sm:max-w-[70%]"
                >
                  <div
                    dir="ltr"
                    data-orientation="horizontal"
                    class="relative mr-auto w-full"
                  >
                    <div class="flex items-center justify-between pb-3">
                      <div
                        role="tablist"
                        aria-orientation="horizontal"
                        class="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0"
                        tabindex="0"
                        data-orientation="horizontal"
                        style="outline: none"
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected="true"
                          aria-controls="radix-:r4h:-content-preview"
                          data-state="active"
                          id="radix-:r4h:-trigger-preview"
                          class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                          tabindex="-1"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          Preview
                        </button>
                        <button
                          type="button"
                          role="tab"
                          aria-selected="false"
                          aria-controls="radix-:r4h:-content-code"
                          data-state="inactive"
                          id="radix-:r4h:-trigger-code"
                          class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                          tabindex="-1"
                          data-orientation="horizontal"
                          data-radix-collection-item=""
                        >
                          Code
                        </button>
                      </div>
                    </div>
                    <div
                      data-state="active"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:r4h:-trigger-preview"
                      id="radix-:r4h:-content-preview"
                      tabindex="0"
                      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                      style="animation-duration: 0s"
                    >
                      <div class="flex items-center justify-between p-4">
                        <button
                          type="button"
                          role="combobox"
                          aria-controls="radix-:r4k:"
                          aria-expanded="false"
                          aria-autocomplete="none"
                          dir="ltr"
                          data-state="closed"
                          class="flex items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                        >
                          <span class="text-muted-foreground">Style: </span
                          ><span style="pointer-events: none">Default</span>
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4 opacity-50"
                            aria-hidden="true"
                          >
                            <path
                              d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="theme-zinc w-full">
                        <div
                          class="preview flex min-h-[350px] w-full justify-center p-10 items-center"
                        >
                          <div class="w-full" data-orientation="vertical">
                            <div
                              data-state="closed"
                              data-orientation="vertical"
                              class="border-b"
                            >
                              <h3
                                data-orientation="vertical"
                                data-state="closed"
                                class="flex"
                              >
                                <button
                                  type="button"
                                  aria-controls="radix-:r4m:"
                                  aria-expanded="false"
                                  data-state="closed"
                                  data-orientation="vertical"
                                  id="radix-:r4l:"
                                  class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                                  data-radix-collection-item=""
                                >
                                  Is it accessible?
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
                                    class="h-4 w-4 transition-transform duration-200"
                                  >
                                    <polyline
                                      points="6 9 12 15 18 9"
                                    ></polyline>
                                  </svg>
                                </button>
                              </h3>
                              <div
                                data-state="closed"
                                id="radix-:r4m:"
                                hidden=""
                                role="region"
                                aria-labelledby="radix-:r4l:"
                                data-orientation="vertical"
                                class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                style="
                                  --radix-accordion-content-height: var(
                                    --radix-collapsible-content-height
                                  );
                                  --radix-accordion-content-width: var(
                                    --radix-collapsible-content-width
                                  );
                                "
                              ></div>
                            </div>
                            <div
                              data-state="closed"
                              data-orientation="vertical"
                              class="border-b"
                            >
                              <h3
                                data-orientation="vertical"
                                data-state="closed"
                                class="flex"
                              >
                                <button
                                  type="button"
                                  aria-controls="radix-:r4o:"
                                  aria-expanded="false"
                                  data-state="closed"
                                  data-orientation="vertical"
                                  id="radix-:r4n:"
                                  class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                                  data-radix-collection-item=""
                                >
                                  Is it styled?
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
                                    class="h-4 w-4 transition-transform duration-200"
                                  >
                                    <polyline
                                      points="6 9 12 15 18 9"
                                    ></polyline>
                                  </svg>
                                </button>
                              </h3>
                              <div
                                data-state="closed"
                                id="radix-:r4o:"
                                hidden=""
                                role="region"
                                aria-labelledby="radix-:r4n:"
                                data-orientation="vertical"
                                class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                style="
                                  --radix-accordion-content-height: var(
                                    --radix-collapsible-content-height
                                  );
                                  --radix-accordion-content-width: var(
                                    --radix-collapsible-content-width
                                  );
                                "
                              ></div>
                            </div>
                            <div
                              data-state="closed"
                              data-orientation="vertical"
                              class="border-b"
                            >
                              <h3
                                data-orientation="vertical"
                                data-state="closed"
                                class="flex"
                              >
                                <button
                                  type="button"
                                  aria-controls="radix-:r4q:"
                                  aria-expanded="false"
                                  data-state="closed"
                                  data-orientation="vertical"
                                  id="radix-:r4p:"
                                  class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                                  data-radix-collection-item=""
                                >
                                  Is it animated?
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
                                    class="h-4 w-4 transition-transform duration-200"
                                  >
                                    <polyline
                                      points="6 9 12 15 18 9"
                                    ></polyline>
                                  </svg>
                                </button>
                              </h3>
                              <div
                                data-state="closed"
                                id="radix-:r4q:"
                                hidden=""
                                role="region"
                                aria-labelledby="radix-:r4p:"
                                data-orientation="vertical"
                                class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                                style="
                                  --radix-accordion-content-height: var(
                                    --radix-collapsible-content-height
                                  );
                                  --radix-accordion-content-width: var(
                                    --radix-collapsible-content-width
                                  );
                                "
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-state="inactive"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:r4h:-trigger-code"
                      hidden=""
                      id="radix-:r4h:-content-code"
                      tabindex="0"
                      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    ></div>
                  </div>
                </div>
                <h2
                  class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
                  id="installation"
                >
                  <a
                    class="font-medium underline underline-offset-4 subheading-anchor"
                    aria-label="Link to section"
                    href="#installation"
                    ><span class="icon icon-link"></span></a
                  >Installation
                </h2>
                <div
                  dir="ltr"
                  data-orientation="horizontal"
                  class="relative mt-6 w-full"
                >
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    class="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0"
                    tabindex="0"
                    data-orientation="horizontal"
                    style="outline: none"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r4r:-content-cli"
                      data-state="active"
                      id="radix-:r4r:-trigger-cli"
                      class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      CLI
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r4r:-content-manual"
                      data-state="inactive"
                      id="radix-:r4r:-trigger-manual"
                      class="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      tabindex="-1"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Manual
                    </button>
                  </div>
                  <div
                    data-state="active"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r4r:-trigger-cli"
                    id="radix-:r4r:-content-cli"
                    tabindex="0"
                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-normal"
                    style="animation-duration: 0s"
                  >
                    <div
                      class="[&amp;>h3]:step mb-12 ml-4 border-l pl-8 [counter-reset:step]"
                    >
                      <h3
                        class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                      >
                        Run the following command:
                      </h3>
                      <div data-rehype-pretty-code-fragment="">
                        <pre
                          class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                          data-language="bash"
                          data-theme="default"
                        ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                                 data-language="bash" data-theme="default"
                          ><span class="line"><span style="color: rgb(255, 255, 255);">npx </span><span
                              style="color: rgba(255, 255, 255, 0.533);"
                          >shadcn-ui@latest</span><span style="color: rgb(255, 255, 255);"> </span><span
                              style="color: rgba(255, 255, 255, 0.533);"
                          >add</span><span style="color: rgb(255, 255, 255);"> </span><span
                              style="color: rgba(255, 255, 255, 0.533);"
                          >accordion</span></span></code></pre>
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                          type="button"
                          id="radix-:r4u:"
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
                            class="h-3 w-3"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path
                              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                            ></path>
                          </svg>
                          <span class="sr-only">Copy</span>
                        </button>
                      </div>
                      <h3
                        class="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                      >
                        Update
                        <code
                          class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                          >tailwind.config.js</code
                        >
                      </h3>
                      <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
                        Add the following animations to your
                        <code
                          class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                          >tailwind.config.js</code
                        >
                        file:
                      </p>
                      <div data-rehype-pretty-code-fragment="">
                        <div
                          data-rehype-pretty-code-title=""
                          data-language="js"
                          data-theme="default"
                        >
                          tailwind.config.js
                        </div>
                        <pre
                          class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                          data-language="js"
                          data-theme="default"
                        ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                               data-language="js" data-theme="default"
                        ><span class="line"><span style="color: rgba(255, 255, 255, 0.533);">/**</span><span
                            style="color: rgba(255, 255, 255, 0.267);"
                        > </span><span style="color: rgba(255, 255, 255, 0.533);">@type</span><span
                            style="color: rgba(255, 255, 255, 0.267);"
                        > </span><span style="color: rgba(255, 255, 255, 0.533); font-weight: bold;">{</span><span
                            style="color: rgb(255, 255, 255); font-weight: bold;"
                        >import('tailwindcss').Config</span><span
                            style="color: rgba(255, 255, 255, 0.533); font-weight: bold;"
                        >}</span><span style="color: rgba(255, 255, 255, 0.267);"> </span><span
                            style="color: rgba(255, 255, 255, 0.533);"
                        >*/</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">module</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>.</span><span style="color: rgb(255, 255, 255);">exports </span><span style="color: rgba(255, 255, 255, 0.533);"
>=</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);"
>{</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  theme</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);"
>{</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">    extend</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);"
>{</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">      keyframes</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);"
>{</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">        </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>"accordion-down"</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span
    style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">{</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">          from</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);">{</span><span
    style="color: rgb(255, 255, 255);"
> height</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">0</span><span style="color: rgb(255, 255, 255);"> </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">          to</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);">{</span><span
    style="color: rgb(255, 255, 255);"
> height</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">"var(--radix-accordion-content-height)"</span><span
    style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">        </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">        </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>"accordion-up"</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">{</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">          from</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);">{</span><span
    style="color: rgb(255, 255, 255);"
> height</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">"var(--radix-accordion-content-height)"</span><span
    style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">          to</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);">{</span><span
    style="color: rgb(255, 255, 255);"
> height</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">0</span><span style="color: rgb(255, 255, 255);"> </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">        </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">      </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">      animation</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>:</span><span style="color: rgb(255, 255, 255);"> </span><span style="color: rgba(255, 255, 255, 0.533);"
>{</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">        </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>"accordion-down"</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span
    style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">"accordion-down 0.2s ease-out"</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>,</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">        </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>"accordion-up"</span><span style="color: rgba(255, 255, 255, 0.533);">:</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">"accordion-up 0.2s ease-out"</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>,</span></span>
<span class="line line--highlighted"><span style="color: rgb(255, 255, 255);">      </span><span
    style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">    </span><span style="color: rgba(255, 255, 255, 0.533);">},</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  </span><span style="color: rgba(255, 255, 255, 0.533);"
>},</span></span>
<span class="line"><span style="color: rgba(255, 255, 255, 0.533);">}</span></span></code></pre>
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16"
                        >
                          <span class="sr-only">Copy</span>
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
                            class="h-3 w-3"
                          >
                            <rect
                              width="14"
                              height="14"
                              x="8"
                              y="8"
                              rx="2"
                              ry="2"
                            ></rect>
                            <path
                              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    data-state="inactive"
                    data-orientation="horizontal"
                    role="tabpanel"
                    aria-labelledby="radix-:r4r:-trigger-manual"
                    hidden=""
                    id="radix-:r4r:-content-manual"
                    tabindex="0"
                    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-normal"
                  ></div>
                </div>
                <h2
                  class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
                  id="usage"
                >
                  <a
                    class="font-medium underline underline-offset-4 subheading-anchor"
                    aria-label="Link to section"
                    href="#usage"
                    ><span class="icon icon-link"></span></a
                  >Usage
                </h2>
                <div data-rehype-pretty-code-fragment="">
                  <pre
                    class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                    data-language="tsx"
                    data-theme="default"
                  ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                           data-language="tsx"
                           data-theme="default"
                    ><span class="line"><span style="color: rgba(255, 255, 255, 0.533);">import</span><span
                        style="color: rgb(255, 255, 255);"
                    > </span><span style="color: rgba(255, 255, 255, 0.533);">{</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  Accordion</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>,</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  AccordionContent</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>,</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  AccordionItem</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>,</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  AccordionTrigger</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>,</span></span>
<span class="line"><span style="color: rgba(255, 255, 255, 0.533);">}</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">from</span><span style="color: rgb(255, 255, 255);"
> </span><span style="color: rgba(255, 255, 255, 0.533);">"@/components/ui/accordion"</span></span></code></pre>
                  <button
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                  >
                    <span class="sr-only">Copy</span>
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
                      class="h-3 w-3"
                    >
                      <rect
                        width="14"
                        height="14"
                        x="8"
                        y="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path
                        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div data-rehype-pretty-code-fragment="">
                  <pre
                    class="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                    data-language="tsx"
                    data-theme="default"
                  ><code class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                           data-language="tsx"
                           data-theme="default"
                    ><span class="line"><span style="color: rgba(255, 255, 255, 0.533);">&lt;</span><span
                        style="color: rgb(255, 255, 255);"
                    >Accordion type</span><span style="color: rgba(255, 255, 255, 0.533);">=</span><span
                        style="color: rgba(255, 255, 255, 0.533);"
                    >"single"</span><span style="color: rgb(255, 255, 255);"> collapsible</span><span
                        style="color: rgba(255, 255, 255, 0.533);"
                    >&gt;</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  </span><span style="color: rgba(255, 255, 255, 0.533);">&lt;</span><span
    style="color: rgb(255, 255, 255);"
>AccordionItem value</span><span style="color: rgba(255, 255, 255, 0.533);">=</span><span
    style="color: rgba(255, 255, 255, 0.533);"
>"item-1"</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">    </span><span style="color: rgba(255, 255, 255, 0.533);">&lt;</span><span
    style="color: rgb(255, 255, 255);"
>AccordionTrigger</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span><span
    style="color: rgb(255, 255, 255);"
>Is it accessible?</span><span style="color: rgba(255, 255, 255, 0.533);">&lt;/</span><span
    style="color: rgb(255, 255, 255);"
>AccordionTrigger</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">    </span><span style="color: rgba(255, 255, 255, 0.533);">&lt;</span><span
    style="color: rgb(255, 255, 255);"
>AccordionContent</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">      Yes. It adheres to the WAI-ARIA design pattern.</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">    </span><span style="color: rgba(255, 255, 255, 0.533);">&lt;/</span><span
    style="color: rgb(255, 255, 255);"
>AccordionContent</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span></span>
<span class="line"><span style="color: rgb(255, 255, 255);">  </span><span style="color: rgba(255, 255, 255, 0.533);">&lt;/</span><span
    style="color: rgb(255, 255, 255);"
>AccordionItem</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span></span>
<span class="line"><span style="color: rgba(255, 255, 255, 0.533);">&lt;/</span><span
    style="color: rgb(255, 255, 255);"
>Accordion</span><span style="color: rgba(255, 255, 255, 0.533);">&gt;</span></span></code></pre>
                  <button
                    class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                  >
                    <span class="sr-only">Copy</span>
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
                      class="h-3 w-3"
                    >
                      <rect
                        width="14"
                        height="14"
                        x="8"
                        y="8"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path
                        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center justify-between">
              <a
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                href="/docs/figma"
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
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
                Figma</a
              ><a
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
                href="/docs/components/alert"
                >Alert
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
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          <div class="hidden text-sm xl:block">
            <div
              class="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] overflow-hidden pt-6"
            >
              <div
                dir="ltr"
                class="relative overflow-hidden pb-10"
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
                    <div class="space-y-2">
                      <p class="font-medium">On This Page</p>
                      <ul class="m-0 list-none">
                        <li class="mt-0 pt-2">
                          <a
                            href="#installation"
                            class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                            >Installation</a
                          >
                        </li>
                        <li class="mt-0 pt-2">
                          <a
                            href="#usage"
                            class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                            >Usage</a
                          >
                        </li>
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
  </div>
</template>
<script setup lang="ts">
import DocumentSidebar from "~/components/DocumentSidebar.vue";
</script>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "PageAccordion",
});
</script>
