<script>
  import { animate, scroll } from "motion";
  import { onMount } from "svelte";

  onMount(() => {
    scroll(animate(".progress", { strokeDasharray: ["0,1", "1,1"] }));
  });
</script>

<svg class="fixed top-4 left-36" width="50" height="50" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" pathLength="1" class="bg" />
  <circle cx="50" cy="50" r="30" pathLength="1" class="progress" />
</svg>

<main class="flex flex-col">
  <slot />
</main>

<style>
  circle {
    stroke-dashoffset: 0;
    stroke-width: 15%;
    fill: none;
  }

  .bg {
    stroke: oklch(var(--b1));
  }

  .progress {
    stroke: oklch(var(--p));
    stroke-dasharray: 0, 1;
  }
</style>
