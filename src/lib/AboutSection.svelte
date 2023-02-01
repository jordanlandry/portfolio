<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  // When the element reaches 50% of the viewport, set it to fixed and begin the animation
  let element:HTMLElement = null;
  let fixPosition = false;

  let scrollPercent = 0;

  onMount(() => {
    element = document.getElementById("about-section");
    window.addEventListener('scroll', handleScroll);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = (e:any) => {
    const { top, height, bottom } = element.getBoundingClientRect();
    if (top < (window.innerHeight / 2 - height / 2)) fixPosition = true;
    else fixPosition = false;

    scrollPercent = (-top / height);
  }

</script>

<div class=section id=about-section>
  {#if scrollPercent > 0 && scrollPercent < 1}
    <div class="{fixPosition ? "fixed" : "unfixed"}" style="opacity: {1 - scrollPercent}; transform: translate(-50%, -50%) scale({1 - (scrollPercent / 2)})">
      <h2>About Me</h2>
      <p>Front-end developer lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fugit.</p>
    </div>
  {/if}
  {#if !(scrollPercent > 0 && scrollPercent < 1)}
    <div class="{fixPosition ? "fixed" : "unfixed"}" style="opacity: {1 - scrollPercent}; transform: translate(-50%, -50%)">
      <h2>About Me</h2>
      <p>Front-end developer lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, fugit.</p>
    </div>
  {/if}
</div>

<style>
  #about-section {
    margin-top: 100vh !important;   /* Give space for the position fixed section above */
    height: 100vh;
    display: flex;
    font-size: 3rem;

    width: var(--section-width);

    justify-content: center;
    align-items: center;
  }

  #about-section h2 {
    letter-spacing: 1rem;
    text-transform: uppercase;
  }

  .unfixed {
    transform: none !important;
  }

  .fixed {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 100;  /* Give space for the position fixed section below */
    width: var(--section-width);
  }

</style>
