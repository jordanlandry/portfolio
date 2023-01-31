<script lang="ts">
  import Project from "./Project.svelte";
  import projects from "../data/projectData";

</script>

<div class="project-wrapper section">
  <div class=projects>
    {#each projects as project, i}
    <Project {...project} index={i} />
    {/each}
  </div>
</div>

<style>
  /* .project-title {
    font-size: 5rem;
    margin: 0;
  } */

  .project-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    gap: 10rem;
  }

  .projects {
    display: flex;
    flex-direction: column;
    gap: 25rem;
  }
</style>