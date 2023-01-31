<script lang="ts">
  import Project from "./Project.svelte";
  import projects from "../data/projectData";

</script>

<div>
  <h2>My Works</h2>
  {#each projects as project, i}
    <Project {...project} comesFromLeft={i % 2 === 0} />
  {/each}
</div>