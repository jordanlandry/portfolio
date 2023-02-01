<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { get_custom_elements_slots } from "svelte/internal";

  export let name: string;
  export let description: string;
  export let githubLink: string;
  export let liveLink: string;
  export let images: string[];
  export let skills: string[];
  export let index: number;

  let show = true;


  const imageScrollSpeeds = images.map((_, i) =>  1 + (images.length - i * 4));
  let scrollPercent = 0;

  let fixPosition = false;
  let element:HTMLElement = null;
  const handleScroll = (e:any) => {
    const { top, height, bottom } = element.getBoundingClientRect();
    if (top < window.innerHeight / 4 && bottom > height / images.length) fixPosition = true;
    else fixPosition = false;

    scrollPercent = (top / height) * 100;
  }

  onMount(() => {
    window.addEventListener('scroll', handleScroll); 
    element = document.getElementById("project-" + index);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  

</script>

<div class=project id="project-{index}">
  {#if fixPosition}
    <div class=invisible></div>
  {/if}

  <div class="project-info {fixPosition ? "project-info-fixed" : ""}">
    <h3>{name}</h3>
    <p>{description}</p>
    <ul class="unstyled-list project-skills">
      {#each skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
    <a href={githubLink} rel=noreferrer target=_blank>Github</a>
    <a href={liveLink} rel=noreferrer target=_blank>Live</a>
  </div>

  <div class=img-wrapper>
    {#each images as image, i}
      <!-- <img src={image} alt={name} class=project-image style="transform: translateY({scrollPercent * imageScrollSpeeds[i]}px); z-index: {images.length - i}; position: relative" /> -->
      <img src={image} alt={name} class=project-image />
    {/each}
  </div>
</div>

<style>
  /* .img-wrapper { */
    /* display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden; */
  /* } */

  .project-info-fixed {
    position: fixed;
    top: 25%;
    width: min(1000px, 37%);
  }

  .invisible {
    width: 50%;
    height: 100%;

    opacity: 0;
  }

  .project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    margin-bottom: 100vh;
  }

  p {
    font-size: 1.5rem;
  }

  .project img {
    width: 100%;
    object-fit: cover;
  }

  .project-info > h3 {
    font-size: 3.5rem;
    font-weight: 100;
  }
  
</style>
