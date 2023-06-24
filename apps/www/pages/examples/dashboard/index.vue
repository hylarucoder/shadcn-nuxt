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
import ExampleHero from "~/components/ExampleHero.vue";
import NavHeader from "~/components/NavHeader.vue";
import NavFooter from "~/components/PageFooter.vue";
import ExampleLinks from "~/pages/examples/components/ExampleLinks.vue";
</script>
