<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  // Props
  export let name: string;
  export let description: string;
  export let githubLink: string;
  export let liveLink: string;
  export let images: string[];
  export let skills: string[];
  export let index: number;

  // Scroll the images at different speeds to create a parallax effect
  let animPercent = images.map((_, i) => 1);
  
  // The gap between the images and the info on the grid
  const GRID_GAP = 10;  
  
  // Elements
  let lastImageElement:HTMLElement = null;
  let element:HTMLElement = null;
  
  // Gets the width of the full grid so we can set the size of the fixed element properly
  let elementWidth = 0;
  
  // When scrolled through 50% of the image, start fading out the image
  let bottomOfLastImage = 0;
  let imageFadeOut = 0;

  const PAUSE_AT = 0.15; // Stop translating the info at this percentage of the scroll
  
  let top = 0;
  const handleScroll = (e:any) => {
    top = element.getBoundingClientRect().top;
    elementWidth = element.getBoundingClientRect().width;

    // Lock the top element to 25% of the screen, and start fading out when the last image is 100px from the top of the screen
    if (top < window.innerHeight * PAUSE_AT) top = window.innerHeight * PAUSE_AT;
    if (bottomOfLastImage < 100) imageFadeOut = 1 - (bottomOfLastImage / 100);
    else imageFadeOut = 0;

    // Update sizing
    bottomOfLastImage = lastImageElement.getBoundingClientRect().bottom;

    // If the bottom of the last image is halfway above the top of the screen, start fading out the image
    imageFadeOut = 1 - (bottomOfLastImage / window.innerHeight * 2);
    if (imageFadeOut < 0) imageFadeOut = 0;

    // Update image scale
    animPercent = images.map((_, i) => {
      const imageElement = document.getElementById(`image-${index}-${i}`);
      const imageTop = imageElement.getBoundingClientRect().top;
      const imageHeight = imageElement.getBoundingClientRect().height;

      const max = window.innerHeight * 0.25;

      // If the image is above the top of the screen, scale it down
      const val = 1 - (-(imageTop -max) / imageHeight);
      if (imageTop < max && val > 0) return val;
      else if (imageTop < max) return 0;
      else return 1
    });
  }

  // Update the sizing when the window is resized
  const handleResize = () => {
    bottomOfLastImage = lastImageElement.getBoundingClientRect().bottom;
    elementWidth = element.getBoundingClientRect().width;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll); 
    window.addEventListener('resize', handleResize); 
    element = document.getElementById("project-" + index);

    // I use this to determine when to start fading out the information tab
    lastImageElement = document.getElementById("image-" + index + "-" + (images.length - 1));
    bottomOfLastImage = lastImageElement.getBoundingClientRect().bottom;

    // To help with the position fixed top attribute
    top = element.getBoundingClientRect().top;

    // To set the width of the position fixed
    elementWidth = element.getBoundingClientRect().width;
  });

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  });

</script>

<div class=project id="project-{index}" style="gap: {GRID_GAP}px">
  <!-- Render an invisible one to make it still take up space for the position fixed element -->
  {#each Array(2) as _, i}
    <div  class="{i === 0 ? 'fixed' : 'invisible'}" style="{
            i === 0 ? 
              `top: ${top - (top * imageFadeOut)}px; 
              opacity: ${1 - imageFadeOut}; 
              width: ${elementWidth / 2 - GRID_GAP}px` 
            : ''}">

      <h3>{name}</h3>

      <ul class="unstyled-list skill-wrapper">
        {#each skills as skill}
          <li>{skill}</li>
        {/each}
      </ul>

      <p>{description}</p>
    
      <div class=link-wrapper>
        <a href={githubLink} target=_blank rel=noreferrer>View on Github</a>
        <a href={liveLink} target=_blank rel=noreferrer>View a demo</a>
      </div>

    </div>
  {/each}

  <div class=images>
    {#each images as image, i}
      <img src={image} alt={name} id="image-{index}-{i}" style="transform: translateX({(1 - animPercent[i]) * window.innerWidth / 2}px) translateY({1}px); opacity: {animPercent[i]}" />
    {/each}
  </div>
</div>

<style>
  .invisible {
    opacity: 0;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .fixed {
    position: fixed;
    z-index: 10;
  }

  .images {
    display: flex;
    flex-direction: column;
    gap: 50vh;
  }

  .skill-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .skill-wrapper > li {
    background-color: rgb(240, 240, 240);
    color: var(--color-white);
    border-radius: 2px;
    padding: 0.5rem 1rem;
  }

  .link-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .link-wrapper > a {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    cursor: pointer;

    text-decoration: none;
    color: black;

    transition: 0.2s;
  }

  .link-wrapper > a:hover {
    background-color: black;
    color: white;
  }

  img {
    width: 100%;
  }

  h3 {
    font-size: 3rem;
    font-weight: 100;
  }

  p {
    font-size: min(1.25vw, 2rem, 2.5vh);
  }

  @media screen and (max-width: 768px) {
    .project {
      grid-template-columns: 1fr;
    }
  }
</style>
