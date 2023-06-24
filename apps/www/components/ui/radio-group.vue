<template>
  <div role="radiogroup" aria-required="false" dir="ltr" class="grid gap-2" tabindex="0" style="outline: none">
    <div class="flex items-center space-x-2">
      <button
        type="button"
        role="radio"
        aria-checked="true"
        data-state="checked"
        value="default"
        class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        id="r1"
        tabindex="0"
        data-radix-collection-item=""
      >
        <span data-state="checked" class="flex items-center justify-center"
          ><svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-3.5 w-3.5 fill-primary"
          >
            <path
              d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path></svg
        ></span>
      </button>
      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="r1"
        >Default</label
      >
    </div>
    <div class="flex items-center space-x-2">
      <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="comfortable"
        class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        id="r2"
        tabindex="-1"
        data-radix-collection-item=""
      ></button>
      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="r2"
        >Comfortable</label
      >
    </div>
    <div class="flex items-center space-x-2">
      <button
        type="button"
        role="radio"
        aria-checked="false"
        data-state="unchecked"
        value="compact"
        class="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        id="r3"
        tabindex="-1"
        data-radix-collection-item=""
      ></button>
      <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="r3"
        >Compact</label
      >
    </div>
  </div>
</template>
