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
                alt="Cards"
                loading="lazy"
                width="1280"
                height="1214"
                decoding="async"
                data-nimg="1"
                class="block dark:hidden"
                srcset="
                  /_next/image?url=%2Fexamples%2Fcards-light.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Fcards-light.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Fcards-light.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              /><img
                alt="Cards"
                loading="lazy"
                width="1280"
                height="1214"
                decoding="async"
                data-nimg="1"
                class="hidden dark:block"
                srcset="
                  /_next/image?url=%2Fexamples%2Fcards-dark.png&amp;w=1920&amp;q=75 1x,
                  /_next/image?url=%2Fexamples%2Fcards-dark.png&amp;w=3840&amp;q=75 2x
                "
                src="/_next/image?url=%2Fexamples%2Fcards-dark.png&amp;w=3840&amp;q=75"
                style="color: transparent"
              />
            </div>
            <div
              class="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3"
            >
              <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col p-6 space-y-1">
                      <h3 class="font-semibold tracking-tight text-2xl">
                        Create an account
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        Enter your email below to create your account
                      </p>
                    </div>
                    <div class="p-6 pt-0 grid gap-4">
                      <div class="grid grid-cols-2 gap-6">
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                        >
                          <svg
                            viewBox="0 0 438.549 438.549"
                            class="mr-2 h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                            ></path>
                          </svg>
                          Github
                        </button>
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            class="mr-2 h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                            ></path>
                          </svg>
                          Google
                        </button>
                      </div>
                      <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                          <span class="w-full border-t"></span>
                        </div>
                        <div
                          class="relative flex justify-center text-xs uppercase"
                        >
                          <span class="bg-background px-2 text-muted-foreground"
                            >Or continue with</span
                          >
                        </div>
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="email"
                          >Email</label
                        ><input
                          class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="email"
                          placeholder="m@example.com"
                          type="email"
                        />
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="password"
                          >Password</label
                        ><input
                          class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div class="flex items-center p-6 pt-0">
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full"
                      >
                        Create account
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col space-y-1.5 p-6">
                      <h3
                        class="text-lg font-semibold leading-none tracking-tight"
                      >
                        Payment Method
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        Add a new payment method to your account.
                      </p>
                    </div>
                    <div class="p-6 pt-0 grid gap-6">
                      <div
                        role="radiogroup"
                        aria-required="false"
                        dir="ltr"
                        class="grid grid-cols-3 gap-4"
                        tabindex="0"
                        style="outline: none"
                      >
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&amp;:has([data-state=checked])]:border-primary"
                          for="card"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="true"
                            data-state="checked"
                            value="card"
                            class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                            id="card"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span
                              data-state="checked"
                              class="flex items-center justify-center"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-2.5 w-2.5 fill-current text-current"
                              >
                                <circle cx="12" cy="12" r="10"></circle></svg
                            ></span>
                          </button>
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
                            class="mb-3 h-6 w-6"
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
                          Card</label
                        ><label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&amp;:has([data-state=checked])]:border-primary"
                          for="paypal"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="paypal"
                            class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                            id="paypal"
                            tabindex="-1"
                            data-radix-collection-item=""
                          ></button>
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            class="mb-3 h-6 w-6"
                          >
                            <path
                              d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Paypal</label
                        ><label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&amp;:has([data-state=checked])]:border-primary"
                          for="apple"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="apple"
                            class="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sr-only"
                            id="apple"
                            tabindex="-1"
                            data-radix-collection-item=""
                          ></button>
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            class="mb-3 h-6 w-6"
                          >
                            <path
                              d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                              fill="currentColor"
                            ></path>
                          </svg>
                          Apple</label
                        >
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="name"
                          >Name</label
                        ><input
                          class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="name"
                          placeholder="First Last"
                        />
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="number"
                          >Card number</label
                        ><input
                          class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="number"
                          placeholder=""
                        />
                      </div>
                      <div class="grid grid-cols-3 gap-4">
                        <div class="grid gap-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="month"
                            >Expires</label
                          >
                          <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:r4s:"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            data-placeholder=""
                            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="month"
                          >
                            <span style="pointer-events: none">Month</span>
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
                        <div class="grid gap-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="year"
                            >Year</label
                          >
                          <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:r4t:"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            data-placeholder=""
                            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="year"
                          >
                            <span style="pointer-events: none">Year</span>
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
                        <div class="grid gap-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="cvc"
                            >CVC</label
                          ><input
                            class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="cvc"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center p-6 pt-0">
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-2 grid items-start gap-6 lg:col-span-1">
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col space-y-1.5 p-6">
                      <h3
                        class="text-lg font-semibold leading-none tracking-tight"
                      >
                        Team Members
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        Invite your team members to collaborate.
                      </p>
                    </div>
                    <div class="p-6 pt-0 grid gap-6">
                      <div class="flex items-center justify-between space-x-4">
                        <div class="flex items-center space-x-4">
                          <span
                            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                            ><img
                              class="aspect-square h-full w-full"
                              src="/avatars/01.png"
                          /></span>
                          <div>
                            <p class="text-sm font-medium leading-none">
                              Sofia Davis
                            </p>
                            <p class="text-sm text-muted-foreground">
                              m@example.com
                            </p>
                          </div>
                        </div>
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r4u:"
                          data-state="closed"
                        >
                          Owner
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
                            class="ml-2 h-4 w-4 text-muted-foreground"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      </div>
                      <div class="flex items-center justify-between space-x-4">
                        <div class="flex items-center space-x-4">
                          <span
                            class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                            ><img
                              class="aspect-square h-full w-full"
                              src="/avatars/02.png"
                          /></span>
                          <div>
                            <p class="text-sm font-medium leading-none">
                              Jackson Lee
                            </p>
                            <p class="text-sm text-muted-foreground">
                              p@example.com
                            </p>
                          </div>
                        </div>
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 ml-auto"
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded="false"
                          aria-controls="radix-:r4v:"
                          data-state="closed"
                        >
                          Member
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
                            class="ml-2 h-4 w-4 text-muted-foreground"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col space-y-1.5 p-6">
                      <h3
                        class="text-lg font-semibold leading-none tracking-tight"
                      >
                        Share this document
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        Anyone with the link can view this document.
                      </p>
                    </div>
                    <div class="p-6 pt-0">
                      <div class="flex space-x-2">
                        <input
                          class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          readonly=""
                          value="http://example.com/link/to/document"
                        />
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-4 shrink-0"
                        >
                          Copy Link
                        </button>
                      </div>
                      <div
                        data-orientation="horizontal"
                        role="none"
                        class="shrink-0 bg-border h-[1px] w-full my-4"
                      ></div>
                      <div class="space-y-4">
                        <h4 class="text-sm font-medium">People with access</h4>
                        <div class="grid gap-6">
                          <div
                            class="flex items-center justify-between space-x-4"
                          >
                            <div class="flex items-center space-x-4">
                              <span
                                class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                ><img
                                  class="aspect-square h-full w-full"
                                  src="/avatars/03.png"
                              /></span>
                              <div>
                                <p class="text-sm font-medium leading-none">
                                  Olivia Martin
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  m@example.com
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              role="combobox"
                              aria-controls="radix-:r50:"
                              aria-expanded="false"
                              aria-autocomplete="none"
                              dir="ltr"
                              data-state="closed"
                              class="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]"
                            >
                              <span style="pointer-events: none">Can edit</span>
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
                            class="flex items-center justify-between space-x-4"
                          >
                            <div class="flex items-center space-x-4">
                              <span
                                class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                ><img
                                  class="aspect-square h-full w-full"
                                  src="/avatars/05.png"
                              /></span>
                              <div>
                                <p class="text-sm font-medium leading-none">
                                  Isabella Nguyen
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  b@example.com
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              role="combobox"
                              aria-controls="radix-:r51:"
                              aria-expanded="false"
                              aria-autocomplete="none"
                              dir="ltr"
                              data-state="closed"
                              class="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]"
                            >
                              <span style="pointer-events: none">Can view</span>
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
                            class="flex items-center justify-between space-x-4"
                          >
                            <div class="flex items-center space-x-4">
                              <span
                                class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                ><img
                                  class="aspect-square h-full w-full"
                                  src="/avatars/01.png"
                              /></span>
                              <div>
                                <p class="text-sm font-medium leading-none">
                                  Sofia Davis
                                </p>
                                <p class="text-sm text-muted-foreground">
                                  p@example.com
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              role="combobox"
                              aria-controls="radix-:r52:"
                              aria-expanded="false"
                              aria-autocomplete="none"
                              dir="ltr"
                              data-state="closed"
                              class="flex h-10 items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ml-auto w-[110px]"
                            >
                              <span style="pointer-events: none">Can view</span>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="p-6 pt-6">
                      <div class="space-y-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 shrink-0"
                          for="date"
                          >Pick a date</label
                        >
                        <div class="grid gap-2 [&amp;>button]:w-[260px]">
                          <button
                            class="inline-flex items-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-[300px] justify-start text-left font-normal"
                            id="date"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:r53:"
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
                            Jan 20, 2022 - Feb 09, 2022
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col space-y-1.5 p-6">
                      <h3
                        class="text-lg font-semibold leading-none tracking-tight"
                      >
                        Notifications
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        Choose what you want to be notified about.
                      </p>
                    </div>
                    <div class="grid gap-1 p-1.5">
                      <div
                        class="flex items-center space-x-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
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
                          class="h-5 w-5"
                        >
                          <path
                            d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
                          ></path>
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                        <div class="space-y-1">
                          <p class="text-sm font-medium leading-none">
                            Everything
                          </p>
                          <p class="text-sm text-muted-foreground">
                            Email digest, mentions &amp; all activity.
                          </p>
                        </div>
                      </div>
                      <div
                        class="flex items-center space-x-4 rounded-md bg-accent p-2 text-accent-foreground"
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
                          class="h-5 w-5"
                        >
                          <circle cx="12" cy="12" r="4"></circle>
                          <path
                            d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
                          ></path>
                        </svg>
                        <div class="space-y-1">
                          <p class="text-sm font-medium leading-none">
                            Available
                          </p>
                          <p class="text-sm text-muted-foreground">
                            Only mentions and comments.
                          </p>
                        </div>
                      </div>
                      <div
                        class="flex items-center space-x-4 rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
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
                          class="h-5 w-5"
                        >
                          <path
                            d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5"
                          ></path>
                          <path
                            d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7"
                          ></path>
                          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                          <path d="m2 2 20 20"></path>
                        </svg>
                        <div class="space-y-1">
                          <p class="text-sm font-medium leading-none">
                            Ignoring
                          </p>
                          <p class="text-sm text-muted-foreground">
                            Turn off all notifications.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-span-2 grid items-start gap-6 lg:col-span-1 lg:grid-cols-2 xl:grid-cols-1"
              >
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col space-y-1.5 p-6">
                      <h3
                        class="text-lg font-semibold leading-none tracking-tight"
                      >
                        Report an issue
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        What area are you having problems with?
                      </p>
                    </div>
                    <div class="p-6 pt-0 grid gap-6">
                      <div class="grid grid-cols-2 gap-4">
                        <div class="grid gap-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="area"
                            >Area</label
                          >
                          <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:r54:"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="area"
                          >
                            <span style="pointer-events: none">Billing</span>
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
                        <div class="grid gap-2">
                          <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="security-level"
                            >Security Level</label
                          >
                          <button
                            type="button"
                            role="combobox"
                            aria-controls="radix-:r55:"
                            aria-expanded="false"
                            aria-autocomplete="none"
                            dir="ltr"
                            data-state="closed"
                            class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="security-level"
                          >
                            <span style="pointer-events: none">Severity 2</span>
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
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="subject"
                          >Subject</label
                        ><input
                          class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="subject"
                          placeholder="I need help with..."
                        />
                      </div>
                      <div class="grid gap-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          for="description"
                          >Description</label
                        ><textarea
                          class="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="description"
                          placeholder="Please include all information relevant to your issue."
                        ></textarea>
                      </div>
                    </div>
                    <div
                      class="flex items-center p-6 pt-0 justify-between space-x-2"
                    >
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                      >
                        Cancel
                      </button>
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div
                      class="flex-col p-6 grid grid-cols-[1fr_110px] items-start gap-4 space-y-0"
                    >
                      <div class="space-y-1">
                        <h3
                          class="text-lg font-semibold leading-none tracking-tight"
                        >
                          shadcn/ui
                        </h3>
                        <p class="text-sm text-muted-foreground">
                          Beautifully designed components built with Radix UI
                          and Tailwind CSS.
                        </p>
                      </div>
                      <div
                        class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground"
                      >
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-3"
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
                            <polygon
                              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            ></polygon>
                          </svg>
                          Star
                        </button>
                        <div
                          data-orientation="vertical"
                          role="none"
                          class="shrink-0 bg-border w-[1px] h-[20px]"
                        ></div>
                        <button
                          class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 py-2 px-2"
                          type="button"
                          id="radix-:r56:"
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
                            class="h-4 w-4 text-secondary-foreground"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div class="p-6 pt-0">
                      <div class="flex space-x-4 text-sm text-muted-foreground">
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
                            class="mr-1 h-3 w-3 fill-sky-400 text-sky-400"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                          </svg>
                          TypeScipt
                        </div>
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
                            class="mr-1 h-3 w-3"
                          >
                            <polygon
                              points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                            ></polygon>
                          </svg>
                          10k
                        </div>
                        <div>Updated April 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="flex items-center justify-center [&amp;>div]:w-full"
                >
                  <div
                    class="rounded-lg border bg-card text-card-foreground shadow-sm"
                  >
                    <div class="flex flex-col space-y-1.5 p-6">
                      <h3
                        class="text-lg font-semibold leading-none tracking-tight"
                      >
                        Cookie Settings
                      </h3>
                      <p class="text-sm text-muted-foreground">
                        Manage your cookie settings here.
                      </p>
                    </div>
                    <div class="p-6 pt-0 grid gap-6">
                      <div class="flex items-center justify-between space-x-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
                          for="necessary"
                          ><span>Strictly Necessary</span
                          ><span
                            class="font-normal leading-snug text-muted-foreground"
                            >These cookies are essential in order to use the
                            website and use its features.</span
                          ></label
                        >
                        <button
                          type="button"
                          role="switch"
                          aria-checked="true"
                          data-state="checked"
                          value="on"
                          class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                          id="necessary"
                        >
                          <span
                            data-state="checked"
                            class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                          ></span>
                        </button>
                      </div>
                      <div class="flex items-center justify-between space-x-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
                          for="functional"
                          ><span>Functional Cookies</span
                          ><span
                            class="font-normal leading-snug text-muted-foreground"
                            >These cookies allow the website to provide
                            personalized functionality.</span
                          ></label
                        >
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                          id="functional"
                        >
                          <span
                            data-state="unchecked"
                            class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                          ></span>
                        </button>
                      </div>
                      <div class="flex items-center justify-between space-x-2">
                        <label
                          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
                          for="performance"
                          ><span>Performance Cookies</span
                          ><span
                            class="font-normal leading-snug text-muted-foreground"
                            >These cookies help to improve the performance of
                            the website.</span
                          ></label
                        >
                        <button
                          type="button"
                          role="switch"
                          aria-checked="false"
                          data-state="unchecked"
                          value="on"
                          class="peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
                          id="performance"
                        >
                          <span
                            data-state="unchecked"
                            class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
                          ></span>
                        </button>
                      </div>
                    </div>
                    <div class="flex items-center p-6 pt-0">
                      <button
                        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 w-full"
                      >
                        Save preferences
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
