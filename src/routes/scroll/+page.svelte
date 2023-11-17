<script>
  import { animate, scroll } from "motion";
  import { onMount } from "svelte";

  const imagesArray = [
    "https://images.pexels.com/photos/5435179/pexels-photo-5435179.jpeg",
    "https://images.pexels.com/photos/5435179/pexels-photo-5435179.jpeg",
    "https://images.pexels.com/photos/5435179/pexels-photo-5435179.jpeg",
    "https://images.pexels.com/photos/5435179/pexels-photo-5435179.jpeg",
    "https://images.pexels.com/photos/5435179/pexels-photo-5435179.jpeg",
    "https://images.pexels.com/photos/5435179/pexels-photo-5435179.jpeg",
  ];

  // add height to section
  onMount(() => {
    const section = document.querySelector("section");
    section.style.height = `${imagesArray.length * 100}vh`;
  });

  onMount(() => {
    const items = document.querySelectorAll(".scroll-image");

    // Animate gallery horizontally during vertical scroll
    scroll(
      animate("#gallery", {
        transform: ["none", `translateX(-${items.length - 1}00vw)`],
      }),
      { target: document.querySelector("section") }
    );
  });
</script>

<article>
  <header class="flex items-center justify-center h-screen">
    <h1 class="text-3xl">HEADER TEXT</h1>
  </header>
  <section>
    <ul id="gallery" class="sticky top-0 flex">
      {#each imagesArray as imgUrl}
        <li
          class="scroll-image w-screen h-screen overflow-hidden flex flex-col flex-[0_0_auto]
          justify-center items-center"
        >
          <img class="h-4/5" alt="building" src={imgUrl} />
        </li>
      {/each}
    </ul>
  </section>

  <footer class="flex items-center justify-center h-screen">
    <p class="text-3xl">FOOTER TEXT</p>
  </footer>
</article>
