<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let name: string;
  export let description: string;
  export let githubLink: string;
  export let liveLink: string;
  export let image: string;
  export let comesFromLeft: boolean;
  export let skills: string[];

  let className = "";

  function actionWhenInViewport(e: any) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) className = comesFromLeft ? "project-left" : "project-right"
  });

  observer.observe(e);
}

</script>

<div use:actionWhenInViewport class="{className} project">
  {#if comesFromLeft}
    <div>
      <img src={image} alt={name} />
    </div>
  {/if}

  <div>
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={githubLink} rel=noreferrer target=_blank>Github</a>
    <a href={liveLink} rel=noreferrer target=_blank>Live</a>
    <p>comesFromLeft: {comesFromLeft}</p>
    <ul>
      {#each skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
  </div>


  {#if !comesFromLeft}
    <div>
      <img src={image} alt={name} />
    </div>
  {/if}
</div>

<style>
  .project {
    display: flex;
    justify-content: center;
  }

  .project-right {
    animation: slideInFromRight 1s ease-in-out forwards;
  }
  
  .project-left {
    animation: slideInFromLeft 1s ease-in-out forwards;
  }

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-25%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInFromRight {
    0% {
      transform: translateX(25%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
</style>
