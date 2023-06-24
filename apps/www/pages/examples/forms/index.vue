<template>
  <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow-xl">
    <div class="md:hidden">
      <img
        alt="Forms"
        loading="lazy"
        width="1280"
        height="791"
        decoding="async"
        data-nimg="1"
        class="block dark:hidden"
        srcset="
          /_next/image?url=%2Fexamples%2Fforms-light.png&amp;w=1920&amp;q=75 1x,
          /_next/image?url=%2Fexamples%2Fforms-light.png&amp;w=3840&amp;q=75 2x
        "
        src="/_next/image?url=%2Fexamples%2Fforms-light.png&amp;w=3840&amp;q=75"
        style="color: transparent"
      /><img
        alt="Forms"
        loading="lazy"
        width="1280"
        height="791"
        decoding="async"
        data-nimg="1"
        class="hidden dark:block"
        srcset="
          /_next/image?url=%2Fexamples%2Fforms-dark.png&amp;w=1920&amp;q=75 1x,
          /_next/image?url=%2Fexamples%2Fforms-dark.png&amp;w=3840&amp;q=75 2x
        "
        src="/_next/image?url=%2Fexamples%2Fforms-dark.png&amp;w=3840&amp;q=75"
        style="color: transparent"
      />
    </div>
    <div class="hidden space-y-6 p-10 pb-16 md:block">
      <div class="space-y-0.5">
        <h2 class="text-2xl font-bold tracking-tight">Settings</h2>
        <p class="text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
      </div>
      <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div>
      <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside class="-mx-4 lg:w-1/5">
          <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            <a
              class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-4 bg-muted hover:bg-muted justify-start"
              href="/examples/forms"
              >Profile</a
            ><a
              class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-4 hover:bg-transparent hover:underline justify-start"
              href="/examples/forms/account"
              >Account</a
            ><a
              class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-4 hover:bg-transparent hover:underline justify-start"
              href="/examples/forms/appearance"
              >Appearance</a
            ><a
              class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-4 hover:bg-transparent hover:underline justify-start"
              href="/examples/forms/notifications"
              >Notifications</a
            ><a
              class="inline-flex items-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground h-10 py-2 px-4 hover:bg-transparent hover:underline justify-start"
              href="/examples/forms/display"
              >Display</a
            >
          </nav>
        </aside>
        <div class="flex-1 lg:max-w-2xl">
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-medium">Profile</h3>
              <p class="text-sm text-muted-foreground">This is how others will see you on the site.</p>
            </div>
            <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full"></div>
            <form class="space-y-8">
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for=":r88:-form-item"
                  >Username</label
                ><input
                  class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="shadcn"
                  id=":r88:-form-item"
                  aria-describedby=":r88:-form-item-description"
                  aria-invalid="false"
                  name="username"
                />
                <p id=":r88:-form-item-description" class="text-sm text-muted-foreground">
                  This is your public display name. It can be your real name or a pseudonym. You can only change this
                  once every 30 days.
                </p>
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for=":r89:-form-item"
                  >Email</label
                >
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r8a:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  data-placeholder=""
                  class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id=":r89:-form-item"
                  aria-describedby=":r89:-form-item-description"
                  aria-invalid="false"
                >
                  <span style="pointer-events: none">Select a verified email to display</span>
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
                <select
                  aria-hidden="true"
                  tabindex="-1"
                  style="
                    position: absolute;
                    border: 0px;
                    width: 1px;
                    height: 1px;
                    padding: 0px;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0px, 0px, 0px, 0px);
                    white-space: nowrap;
                    overflow-wrap: normal;
                  "
                >
                  <option value=""></option>
                  <option value="m@example.com">m@example.com</option>
                  <option value="m@google.com">m@google.com</option>
                  <option value="m@support.com">m@support.com</option>
                </select>
                <p id=":r89:-form-item-description" class="text-sm text-muted-foreground">
                  You can manage verified email addresses in your
                  <a href="/examples/forms">email settings</a>.
                </p>
              </div>
              <div class="space-y-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for=":r8b:-form-item"
                  >Bio</label
                ><textarea
                  class="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Tell us a little bit about yourself"
                  name="bio"
                  id=":r8b:-form-item"
                  aria-describedby=":r8b:-form-item-description"
                  aria-invalid="false"
                >
I own a computer.</textarea
                >
                <p id=":r8b:-form-item-description" class="text-sm text-muted-foreground">
                  You can <span>@mention</span> other users and organizations to link to them.
                </p>
              </div>
              <div>
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for=":r8c:-form-item"
                    >URLs</label
                  >
                  <p id=":r8c:-form-item-description" class="text-sm text-muted-foreground">
                    Add links to your website, blog, or social media profiles.
                  </p>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id=":r8c:-form-item"
                    aria-describedby=":r8c:-form-item-description"
                    aria-invalid="false"
                    value="https://shadcn.com"
                    name="urls.0.value"
                  />
                </div>
                <div class="space-y-2">
                  <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                    for=":r8d:-form-item"
                    >URLs</label
                  >
                  <p id=":r8d:-form-item-description" class="text-sm text-muted-foreground sr-only">
                    Add links to your website, blog, or social media profiles.
                  </p>
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id=":r8d:-form-item"
                    aria-describedby=":r8d:-form-item-description"
                    aria-invalid="false"
                    value="http://twitter.com/shadcn"
                    name="urls.1.value"
                  />
                </div>
                <button
                  class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background underline-offset-4 hover:underline text-primary h-9 px-3 rounded-md mt-1"
                  type="button"
                >
                  Add URL
                </button>
              </div>
              <button
                class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                type="submit"
              >
                Update profile
              </button>
            </form>
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
