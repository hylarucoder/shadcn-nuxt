<template>
  <div class="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
    <div class="overflow-hidden text-ellipsis whitespace-nowrap">Docs</div>
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
    <div class="font-medium text-foreground">Introduction</div>
  </div>
</template>
<script>
export default {
  name: "DocBreadcumb",
};
</script>
