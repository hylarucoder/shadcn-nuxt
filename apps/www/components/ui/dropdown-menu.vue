<template>
  <div
    data-radix-popper-content-wrapper=""
    dir="ltr"
    style="
      position: fixed;
      left: 0px;
      top: 0px;
      transform: translate(722px, 155px);
      min-width: max-content;
      --radix-popper-transform-origin: 50% 430px;
      will-change: transform;
      z-index: 50;
      --radix-popper-available-width: 1728px;
      --radix-popper-available-height: 585px;
      --radix-popper-anchor-width: 69.984375px;
      --radix-popper-anchor-height: 36px;
    "
  >
    <div
      data-side="top"
      data-align="center"
      role="menu"
      aria-orientation="vertical"
      data-state="open"
      data-radix-menu-content=""
      dir="ltr"
      id="radix-:roo:"
      aria-labelledby="radix-:ron:"
      class="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-56"
      tabindex="-1"
      data-orientation="vertical"
      style="
        outline: none;
        --radix-dropdown-menu-content-transform-origin: var(--radix-popper-transform-origin);
        --radix-dropdown-menu-content-available-width: var(--radix-popper-available-width);
        --radix-dropdown-menu-content-available-height: var(--radix-popper-available-height);
        --radix-dropdown-menu-trigger-width: var(--radix-popper-anchor-width);
        --radix-dropdown-menu-trigger-height: var(--radix-popper-anchor-height);
        pointer-events: auto;
      "
    >
      <div class="px-2 py-1.5 text-sm font-semibold">My Account</div>
      <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-muted"></div>
      <div role="group">
        <div
          role="menuitem"
          class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Profile<span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘P</span>
        </div>
        <div
          role="menuitem"
          class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Billing<span class="ml-auto text-xs tracking-widest opacity-60">⌘B</span>
        </div>
        <div
          role="menuitem"
          class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Settings<span class="ml-auto text-xs tracking-widest opacity-60">⌘S</span>
        </div>
        <div
          role="menuitem"
          class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Keyboard shortcuts<span class="ml-auto text-xs tracking-widest opacity-60">⌘K</span>
        </div>
      </div>
      <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-muted"></div>
      <div role="group">
        <div
          role="menuitem"
          class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Team
        </div>
        <div
          role="menuitem"
          id="radix-:rp1:"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-controls="radix-:rp0:"
          data-state="closed"
          class="flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          Invite users
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-auto h-4 w-4"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          role="menuitem"
          class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          tabindex="-1"
          data-orientation="vertical"
          data-radix-collection-item=""
        >
          New Team<span class="ml-auto text-xs tracking-widest opacity-60">⌘+T</span>
        </div>
      </div>
      <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-muted"></div>
      <div
        role="menuitem"
        class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        tabindex="-1"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        GitHub
      </div>
      <div
        role="menuitem"
        class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        tabindex="-1"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        Support
      </div>
      <div
        role="menuitem"
        aria-disabled="true"
        data-disabled=""
        class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        tabindex="-1"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        API
      </div>
      <div role="separator" aria-orientation="horizontal" class="-mx-1 my-1 h-px bg-muted"></div>
      <div
        role="menuitem"
        class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
        tabindex="-1"
        data-orientation="vertical"
        data-radix-collection-item=""
      >
        Log out<span class="ml-auto text-xs tracking-widest opacity-60">⇧⌘Q</span>
      </div>
    </div>
  </div>
</template>
