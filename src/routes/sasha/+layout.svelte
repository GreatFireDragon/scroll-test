<script>
  // import { onMount } from "svelte";

  // function handleClick(event) {
  //   const clickedElement = event.target;
  //   // console.log(
  //   //   `You clicked on: ${clickedElement.tagName} with parent ${
  //   //     clickedElement.parentElement ? clickedElement.parentElement.tagName : "none"
  //   //   }`
  //   // );

  //   console.log("element " + clickedElement.tagName + "width " + clickedElement.offsetWidth);
  // }

  // onMount(() => {
  //   document.addEventListener("click", handleClick);

  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // });
</script>

<main class="container z-10 select-none">
  <slot />
</main>
