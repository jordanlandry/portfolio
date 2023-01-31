<script lang="ts">
  import Project from "./Project.svelte";
  import projects from "../data/projectData";

</script>

<div>
  <h2>My Works</h2>
  <div class=project-wrapper>
    {#each projects as project, i}
    <Project {...project} comesFromLeft={i % 2 === 0} />
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

</style>