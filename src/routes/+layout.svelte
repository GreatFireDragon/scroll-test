<script>
  import "../app.postcss";
  import themes from "$lib/themes";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { animate, scroll } from "motion";

  // progress circle
  onMount(() => {
    scroll(animate(".progress", { strokeDasharray: ["0,1", "1,1"] }));
  });

  // load and set theme
  onMount(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  });

  // select tab that corresponds to current path
  onMount(() => {
    const currentPath = $page.url.pathname;
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
      if (tab.getAttribute("href") === currentPath) {
        tab.classList.add("tab-active");
      }
    });
  });

  function handleThemeChange(e) {
    const newTheme = e.target.value;
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  // PAGES
  function handleTabClick(e) {
    const tabs = e.currentTarget.querySelectorAll(".tab");

    tabs.forEach((tab) => {
      tab.classList.remove("tab-active");
    });
    e.target.classList.add("tab-active");
  }

  function handleTabKeydown(e) {
    if (e.key === "Enter" || e.key === " ") {
      handleTabClick(e);
      e.target.click();
    }
  }
</script>

<!-- THEME SELECTOR -->
<div class="fixed z-50 dropdown top-3 left-10">
  <button tabindex="0" class="m-1 btn">
    Theme
    <svg
      width="12px"
      height="12px"
      class="inline-block w-2 h-2 fill-current opacity-60"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2048 2048"
      ><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
    >
  </button>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <ul
    id="theme-dropdown"
    class="z-50 dropdown-content p-2 grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] w-[30dvw] shadow-2xl bg-base-300 rounded-box"
  >
    {#each themes as theme}
      <li>
        <input
          on:click={handleThemeChange}
          type="radio"
          tabindex="0"
          name="theme-dropdown"
          class="justify-start theme-controller btn btn-sm btn-block btn-ghost"
          aria-label={theme}
          value={theme}
        />
      </li>
    {/each}
  </ul>
</div>

<!-- PAGES -->
<div
  tabindex="0"
  role="button"
  on:click={handleTabClick}
  on:keydown={handleTabKeydown}
  class="fixed z-50 tabs top-3 right-10 tabs-lifted"
>
  <a href="/" class="tab">main</a>
  <a href="/scroll" class="tab tab-active">scroll</a>
  <a href="/sasha" class="tab">sasha</a>
</div>

<!-- PROGRESS CIRCLE -->
<svg class="fixed top-4 left-36" width="50" height="50" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="30" pathLength="1" class="bg" />
  <circle cx="50" cy="50" r="30" pathLength="1" class="progress" />
</svg>

<slot />

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
