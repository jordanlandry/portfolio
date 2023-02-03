<script lang="ts">
  import Project from "./Project.svelte";
  import OtherProject from "./OtherProject.svelte";
  import projects from "../data/projectData";
  import otherProjects from "../data/otherProjectData";

</script>

<div class="project-wrapper">
  <div class="projects section">
    {#each projects as project, i}
      <Project {...project} index={i} />
    {/each}
  </div>

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

  /* Other projects */
  .other-projects-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-auto-rows: 1fr;
    gap: 3rem;
    box-sizing: border-box;
  }

  .other-projects > h2 {
    text-align: center;
    font-weight: 100;
    font-size: 3rem;
    margin-bottom: 1em;
  }

</style>