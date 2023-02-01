<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { get_custom_elements_slots } from "svelte/internal";

  // Props
  export let name: string;
  export let description: string;
  export let githubLink: string;
  export let liveLink: string;
  export let images: string[];
  export let skills: string[];
  export let index: number;

  // Scroll the images at different speeds to create a parallax effect
  const imageScrollSpeeds = images.map((_, i) =>  1 + (images.length - i * 4));

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

  let top = 0;
  const handleScroll = (e:any) => {
    top = element.getBoundingClientRect().top;
    elementWidth = element.getBoundingClientRect().width;

    // Lock the top element to 25% of the screen, and start fading out when the last image is 100px from the top of the screen
    if (top < window.innerHeight * .25) top = window.innerHeight * .25;
    if (bottomOfLastImage < 100) imageFadeOut = 1 - (bottomOfLastImage / 100);
    else imageFadeOut = 0;

    // Update sizing
    bottomOfLastImage = lastImageElement.getBoundingClientRect().bottom;

    // If the bottom of the last image is halfway above the top of the screen, start fading out the image
    imageFadeOut = 1 - (bottomOfLastImage / window.innerHeight * 2);
    if (imageFadeOut < 0) imageFadeOut = 0;
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

  <!-- style="order: {index % 2 === 0 ? '1' : '-1'}" -->
  <div class=images>
    {#each images as image, i}
      <img src={image} alt={name} id="image-{index}-{i}"/>
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
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    .project {
      grid-template-columns: 1fr;
    }
  }
</style>
