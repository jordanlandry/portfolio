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

  <div class=project-info>
    <h3>{name}</h3>
    <p class=project-description>{description}</p>
    <ul class="unstyled-list project-skills">
      {#each skills as skill}
        <li>{skill}</li>
      {/each}
    </ul>
    <a href={githubLink} rel=noreferrer target=_blank>Github</a>
    <a href={liveLink} rel=noreferrer target=_blank>Live</a>
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
    flex: 1 1 auto;
  }

  .project img {
    width: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.8;
    transition: 0.2s linear;
    transition-property: opacity, transform;
  }

  .project img:hover {
    position: relative;
    /* transform: scale(1.5); */
    z-index: 3;
    opacity: 1;
  }

  .project-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .project-info > h3 {
    font-size: 3rem;
  }

  .project-right {
    animation: slideInFromRight 1s ease-in-out forwards;
  }
  
  .project-left {
    animation: slideInFromLeft 1s ease-in-out forwards;
  }

  .project-right > .project-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  }

  .project-skills {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  .project-skills > li {
    background-color: rgb(22, 22, 22);
    padding: 5px 10px;
    border-radius: 5px;
  }

  .project-description {
    background-color: rgb(0, 0, 0);
    color: white;
    padding: 30px;

    width: 110%;

    z-index: 2;
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
