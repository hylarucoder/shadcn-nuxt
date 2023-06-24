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
    <NavFooter />
  </div>
</template>
<script setup lang="ts">
import ExampleHero from "~/components/ExampleHero.vue";
import NavHeader from "~/components/NavHeader.vue";
import NavFooter from "~/components/PageFooter.vue";
import ExampleLinks from "~/pages/examples/components/ExampleLinks.vue";
</script>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlaygroundPage",
});
</script>
