<script lang="ts">
  import Project from "./Project.svelte";
  import OtherProject from "./OtherProject.svelte";
  import projects from "../data/projectData";
  import otherProjects from "../data/otherProjectData";

  import { onDestroy, onMount } from "svelte";
  import ProjectMobile from "./ProjectMobile.svelte";

  const MOBILE_WIDTH_THRESHOLD = 1000; // px
  let showMobile = window.innerWidth < MOBILE_WIDTH_THRESHOLD;
  const handleResize = () => {
    showMobile = window.innerWidth < MOBILE_WIDTH_THRESHOLD;
  };

  onMount(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  onDestroy(() => {
    window.removeEventListener('resize', handleResize);
  })

</script>

<div>
  {#if showMobile}
  <div class=project-mobile-wrapper>
    <div class="projects-mobile section">

      {#each projects as project, i}
      <ProjectMobile {...project} />
      {/each}
    </div>
  </div>
  {:else}
  <div class=project-wrapper>
    <div class="projects section">
      {#each projects as project, i}
        <Project {...project} index={i} />
      {/each}
    </div>
  </div>
  {/if}

  <div class="other-projects section">
    <h2>Other Projects</h2>
    <div class="other-projects-wrapper">
      {#each otherProjects as project}
        <OtherProject {...project} />
      {/each}
    </div>
  </div>
</div>

<style>
  .project-mobile-wrapper {
    display: flex;
    justify-content: center;
    gap: 10rem;
  }

  .project-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    gap: 10rem;

    margin-bottom: 50vh;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 50vw;
  }

  /* Other projects */
  .other-projects-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 3rem;

    max-width: 100%;
  }

  @media screen and (max-width: 1325px) {
    .other-projects-wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 824px) {
    .other-projects-wrapper {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .other-projects > h2 {
    text-align: center;
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 1em;
  }

</style>