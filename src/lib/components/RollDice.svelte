<script>
  import { onMount } from "svelte";

  let selectValue = 1;
  let rolls = [];
  $: average = (rolls.reduce((a, b) => a + b, 0) / rolls.length).toFixed(2);
  $: total = rolls.length.toFixed(0);
  $: amountOfRolls = rolls.filter((el) => el === Number(selectValue)).length;

  let autogeneration = false;
  let controls;
  let autogenerationInterval = 1000;

  function saveToLocal() {
    localStorage.setItem("rolls", JSON.stringify(rolls));
  }

  onMount(() => {
    rolls = JSON.parse(localStorage.getItem("rolls")) || [];
  });

  function onRoll() {
    rolls = [...rolls, Math.floor(Math.random() * 6) + 1];
    saveToLocal();
  }

  function onReset() {
    rolls = [];
    saveToLocal();
  }

  function handleDelete(i) {
    rolls = rolls.filter((_, index) => index !== i);
    saveToLocal();
  }

  function autoGenerate() {
    if (autogeneration) {
      clearInterval(controls);
    } else {
      controls = setInterval(() => {
        onRoll();
      }, autogenerationInterval);
    }

    autogeneration = !autogeneration;
  }
</script>

<section class="flex items-center gap-3 snap-center">
  <!-- svelte-ignore a11y-autofocus -->
  <button autofocus on:click={onRoll} class="uppercase btn btn-info btn-outline">Roll</button>
  <button on:click={onReset} class="uppercase btn btn-error btn-outline">Reset</button>
  <button
    class={"btn btn-warning uppercase " + (autogeneration ? "" : "btn-outline")}
    on:click={autoGenerate}>AutoGenerate</button
  >
  <input
    type="range"
    min="25"
    max="1000"
    bind:value={autogenerationInterval}
    class="range range-warning"
    step="25"
  />
</section>

<section class="flex flex-col items-center w-full gap-3">
  <div class="flex items-center justify-center gap-3">
    <h1 class="font-black kbd kbd-lg">{rolls.at(-1) || "?"}</h1>

    Average:<span class="kbd kbd-md">
      {average || "?"}
    </span>

    <select class="select max-w-min" bind:value={selectValue}>
      <option disabled selected>Amount of...</option>
      {#each [1, 2, 3, 4, 5, 6] as value}
        <option {value}>Amount of {value}s</option>
      {/each}
    </select>
    <span class="kbd">{amountOfRolls}</span>

    Total:<span class="kbd kbd-md">
      {total || "?"}
    </span>
  </div>

  <ul class="grid w-[90vw] grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    {#each rolls as roll, i (i)}
      <li class="mx-2 my-1 cursor-default btn btn-outline">
        <span class="">{roll}</span><button
          class="active:text-error"
          on:click={() => handleDelete(i)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
            /></svg
          ></button
        >
      </li>
    {/each}
  </ul>
</section>
