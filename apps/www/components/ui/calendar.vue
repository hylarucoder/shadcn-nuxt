<template>
  <div class="rdp p-3 rounded-md border">
    <div class="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
      <div class="space-y-4 rdp-caption_start rdp-caption_end">
        <div class="flex justify-center pt-1 relative items-center">
          <div
            class="text-sm font-medium"
            aria-live="polite"
            role="presentation"
            id="react-day-picker-1"
          >
            June 2023
          </div>
          <div class="space-x-1 flex items-center">
            <button
              name="previous-month"
              aria-label="Go to previous month"
              class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
              type="button"
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
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button
              name="next-month"
              aria-label="Go to next month"
              class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
              type="button"
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
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <table
          class="w-full border-collapse space-y-1"
          role="grid"
          aria-labelledby="react-day-picker-1"
        >
          <thead class="rdp-head">
            <tr class="flex">
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Sunday"
              >
                Su
              </th>
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Monday"
              >
                Mo
              </th>
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Tuesday"
              >
                Tu
              </th>
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Wednesday"
              >
                We
              </th>
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Thursday"
              >
                Th
              </th>
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Friday"
              >
                Fr
              </th>
              <th
                scope="col"
                class="text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]"
                aria-label="Saturday"
              >
                Sa
              </th>
            </tr>
          </thead>
          <tbody class="rdp-tbody" role="rowgroup">
            <tr class="flex w-full mt-2">
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  28
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  29
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  30
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  31
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  1
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  2
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  3
                </button>
              </td>
            </tr>
            <tr class="flex w-full mt-2">
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  4
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  5
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="0"
                  type="button"
                >
                  6
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  7
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  8
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  9
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  10
                </button>
              </td>
            </tr>
            <tr class="flex w-full mt-2">
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  11
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  12
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  13
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground"
                  role="gridcell"
                  aria-selected="true"
                  tabindex="-1"
                  type="button"
                >
                  14
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  15
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  16
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  17
                </button>
              </td>
            </tr>
            <tr class="flex w-full mt-2">
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  18
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  19
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  20
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  21
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  22
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  23
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  24
                </button>
              </td>
            </tr>
            <tr class="flex w-full mt-2">
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 bg-accent text-accent-foreground"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  25
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  26
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  27
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  28
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  29
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  30
                </button>
              </td>
              <td
                class="text-center text-sm p-0 relative [&amp;:has([aria-selected])]:bg-accent first:[&amp;:has([aria-selected])]:rounded-l-md last:[&amp;:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20"
                role="presentation"
              >
                <button
                  name="day"
                  class="rdp-button_reset rdp-button inline-flex items-center justify-center rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0 font-normal aria-selected:opacity-100 text-muted-foreground opacity-50"
                  role="gridcell"
                  tabindex="-1"
                  type="button"
                >
                  1
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
