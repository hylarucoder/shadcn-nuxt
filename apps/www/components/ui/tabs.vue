<template>
  <div dir="ltr" data-orientation="horizontal" class="w-[400px]">
    <div
      role="tablist"
      aria-orientation="horizontal"
      class="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid w-full grid-cols-2"
      tabindex="0"
      data-orientation="horizontal"
      style="outline: none"
    >
      <button
        type="button"
        role="tab"
        aria-selected="true"
        aria-controls="radix-:rb3:-content-account"
        data-state="active"
        id="radix-:rb3:-trigger-account"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
        tabindex="0"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Account
      </button>
      <button
        type="button"
        role="tab"
        aria-selected="false"
        aria-controls="radix-:rb3:-content-password"
        data-state="inactive"
        id="radix-:rb3:-trigger-password"
        class="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
        tabindex="-1"
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Password
      </button>
    </div>
    <div
      data-state="active"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:rb3:-trigger-account"
      id="radix-:rb3:-content-account"
      tabindex="0"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      style=""
    >
      <div class="rounded-xl border bg-card text-card-foreground shadow">
        <div class="flex flex-col space-y-1.5 p-6">
          <h3 class="font-semibold leading-none tracking-tight">Account</h3>
          <p class="text-sm text-muted-foreground">Make changes to your account here. Click save when you're done.</p>
        </div>
        <div class="p-6 pt-0 space-y-2">
          <div class="space-y-1">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="name"
              >Name</label
            ><input
              class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="name"
              value="Pedro Duarte"
            />
          </div>
          <div class="space-y-1">
            <label
              class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              for="username"
              >Username</label
            ><input
              class="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              id="username"
              value="@peduarte"
            />
          </div>
        </div>
        <div class="flex items-center p-6 pt-0">
          <button
            class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
    <div
      data-state="inactive"
      data-orientation="horizontal"
      role="tabpanel"
      aria-labelledby="radix-:rb3:-trigger-password"
      id="radix-:rb3:-content-password"
      tabindex="0"
      class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      hidden=""
    ></div>
  </div>
</template>
