<template>
  <div class="flex-1">
    <div
      class="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10"
    >
      <DocumentSidebar />
      <main
        class="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]"
      >
        <div class="mx-auto w-full min-w-0">
          <DocBreadcumb />
          <div class="space-y-2">
            <h1 class="scroll-m-20 text-4xl font-bold tracking-tight">
              Introduction
            </h1>
            <p class="text-lg text-muted-foreground">
              <span
                data-br=":r0:"
                data-brr="1"
                style="
                  display: inline-block;
                  vertical-align: top;
                  text-decoration: inherit;
                  max-width: 522px;
                "
                >Re-usable components built using Radix UI and Tailwind
                CSS.</span
              >
            </p>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 bg-border h-[1px] w-full my-4 md:my-6"
          ></div>
          <div class="mdx">
            <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
              This is <strong>NOT</strong> a component library. It's a
              collection of re-usable components that you can copy and paste
              into your apps.
            </p>
            <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
              <strong>What do you mean by not a component library?</strong>
            </p>
            <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
              I mean you do not install it as a dependency. It is not available
              or distributed via npm. I have no plans to publish it as an npm
              package (for now).
            </p>
            <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
              Pick the components you need. Copy and paste the code into your
              project and customize to your needs. The code is yours.
            </p>
            <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
              <em
                >Use this as a reference to build your own component
                libraries.</em
              >
            </p>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="faq"
            >
              <a
                class="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#faq"
                ><span class="icon icon-link"></span></a
              >FAQ
            </h2>
            <div data-orientation="vertical">
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
                    aria-controls="radix-:r2:"
                    aria-expanded="false"
                    data-state="closed"
                    data-orientation="vertical"
                    id="radix-:r1:"
                    class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                    data-radix-collection-item=""
                  >
                    <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
                      Why copy/paste and not packaged as a dependency?
                    </p>
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed"
                  id="radix-:r2:"
                  hidden=""
                  role="region"
                  aria-labelledby="radix-:r1:"
                  data-orientation="vertical"
                  class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
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
                    aria-controls="radix-:r4:"
                    aria-expanded="false"
                    data-state="closed"
                    data-orientation="vertical"
                    id="radix-:r3:"
                    class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                    data-radix-collection-item=""
                  >
                    <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
                      Which frameworks are supported?
                    </p>
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed"
                  id="radix-:r4:"
                  hidden=""
                  role="region"
                  aria-labelledby="radix-:r3:"
                  data-orientation="vertical"
                  class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
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
                    aria-controls="radix-:r6:"
                    aria-expanded="false"
                    data-state="closed"
                    data-orientation="vertical"
                    id="radix-:r5:"
                    class="flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                    data-radix-collection-item=""
                  >
                    <p class="leading-7 [&amp;:not(:first-child)]:mt-6">
                      Can I use this in my project?
                    </p>
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
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </h3>
                <div
                  data-state="closed"
                  id="radix-:r6:"
                  hidden=""
                  role="region"
                  aria-labelledby="radix-:r5:"
                  data-orientation="vertical"
                  class="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                ></div>
              </div>
            </div>
            <h2
              class="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="credits"
            >
              <a
                class="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#credits"
                ><span class="icon icon-link"></span></a
              >Credits
            </h2>
            <ul class="my-6 ml-6 list-disc">
              <li class="mt-2">
                <a
                  class="font-medium underline underline-offset-4"
                  href="https://radix-ui.com"
                  >Radix UI</a
                >
                - For the primitives.
              </li>
              <li class="mt-2">
                <a
                  class="font-medium underline underline-offset-4"
                  href="https://vercel.com"
                  >Vercel</a
                >
                - Where I host all my projects.
              </li>
              <li class="mt-2">
                <a
                  class="font-medium underline underline-offset-4"
                  href="https://shud.in"
                  >Shu Ding</a
                >
                - The typography style is adapted from his work on Nextra.
              </li>
              <li class="mt-2">
                <a
                  class="font-medium underline underline-offset-4"
                  href="https://cal.com"
                  >Cal</a
                >
                - Where I copied the styles for the first component: the
                <code
                  class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  >Button</code
                >.
              </li>
              <li class="mt-2">
                <a
                  class="font-medium underline underline-offset-4"
                  href="https://cmdk.paco.me"
                  >cmdk</a
                >
                - For the
                <code
                  class="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  >&lt;Command /&gt;</code
                >
                component.
              </li>
            </ul>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            class="shrink-0 bg-border h-[1px] w-full my-4 md:my-6"
          ></div>
          <div class="flex flex-row items-center justify-between">
            <a
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
              href="/docs/installation"
              >Installation
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
                          href="#faq"
                          class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                          >FAQ</a
                        >
                      </li>
                      <li class="mt-0 pt-2">
                        <a
                          href="#credits"
                          class="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                          >Credits</a
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
</template>
<script setup lang="ts">
import DocumentSidebar from "~/components/DocumentSidebar.vue";
import DocBreadcumb from "~/components/DocBreadcumb.vue";
</script>
