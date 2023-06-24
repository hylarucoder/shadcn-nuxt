<template>
  <section
    class="flex max-w-[980px] flex-col items-start gap-2 px-4 pt-8 md:pt-12 page-header"
  >
    <a
      class="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
      href="/docs/forms/react-hook-form"
      >🎉
      <div
        data-orientation="vertical"
        role="none"
        class="shrink-0 bg-border w-[1px] mx-2 h-4"
      ></div>
      Building forms with React Hook Form and Zod
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
        class="ml-1 h-4 w-4"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </a>
    <h1
      class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block"
    >
      Check out some examples.
    </h1>
    <h1
      class="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] md:hidden"
    >
      Examples
    </h1>
    <span
      class="max-w-[750px] text-lg text-muted-foreground sm:text-xl"
      data-br=":r1g:"
      data-brr="1"
      style="
        display: inline-block;
        vertical-align: top;
        text-decoration: inherit;
        max-width: 576px;
      "
      >Dashboard, cards, authentication. Some examples built using the
      components. Use this as a guide to build your own.</span
    >
    <section class="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
      <a
        class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 rounded-[6px]"
        href="/docs"
        >Get Started</a
      ><a
        class="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 rounded-[6px]"
        href="/components"
        >Components</a
      >
    </section>
  </section>
</template>
<script>
export default {
  name: "ExampleHero",
};
</script>
