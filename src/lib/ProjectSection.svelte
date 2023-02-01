<script lang="ts">
  import Project from "./Project.svelte";
  import projects from "../data/projectData";

</script>

<div class="project-wrapper">
  <div class="projects section">
    {#each projects as project, i}
      <Project {...project} index={i} />
    {/each}
  </div>
</div>

<style>
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
    gap: 50vw;
  }
</style>