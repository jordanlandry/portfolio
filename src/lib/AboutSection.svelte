<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  // When the element reaches 50% of the viewport, set it to fixed and begin the animation
  let element:HTMLElement = null;

  // This will be the percentage of completion of the animation (0-1)
  // let scrollPercent = 0;

  // Year I started Programming to automatically update the number of years I've been coding for
  const STARTING_YEAR = 2016;

  // Animation Settings
  const startFadingOutAtPercent = 0.125;

  let startingPosition = window.innerHeight * 1.5;
  let startFadingOutAt = window.innerHeight * startFadingOutAtPercent;    // When topInPixels is less than this, start fading out

  let topInPixels = startingPosition;
  let animPercent = 0;

  const handleResize = () => {
    startingPosition = window.innerHeight * 1.5;
    startFadingOutAt = window.innerHeight * startFadingOutAtPercent;
  }

  const handleScroll = () => {
    topInPixels = startingPosition - scrollY;

    const max = window.innerHeight - startFadingOutAt;
    animPercent = (-topInPixels / max) + startFadingOutAtPercent;
    
    if (topInPixels <= startFadingOutAt) topInPixels = startFadingOutAt
    
    animPercent /= 2;
    animPercent = Math.min(1, Math.max(0, animPercent));
  }

  onMount(() => {
    element = document.getElementById("about-section");
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
  });
  
  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });
</script>


{#each Array(2) as _, i}
  <div id=about-section class="section {`${i % 2 ? 'fixed' : 'invisible'}`}" style="top: {topInPixels}px; height: {(startFadingOutAtPercent * 100) + 100}vh; opacity: {1 - animPercent};">
    <div style={i % 2 ? `transform: scale(${1 - animPercent})`: ''}>
      <h2 id=about-title>About Me</h2>
      <p id=about-desc>With over {new Date(Date.now()).getFullYear() -  STARTING_YEAR} years of programming experience, I specialize in front-end development with React, Typescript, Vue, and Svelte. Additionally, I have back-end experience with Express along with MongoDB, and extensive programming experience in Java, C#, C, C++ and Python.</p>
    </div>
  </div>
{/each}

<style>

  #about-section h2 {
    margin-bottom: 1rem;
    
    text-align: center;
    font-weight: 100;
    font-size: max(4vw, 3rem);
  }

  #about-section p {
    font-size: max(2.5vw, 1.5rem);
  }

  .fixed {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }

  .invisible {
    margin-top: 100vh;
    margin-bottom: 50vh;
    opacity: 0 !important;
  }

</style>

<!-- <style>
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
    z-index: 100; 
    width: var(--section-width);
  }

</style> -->
