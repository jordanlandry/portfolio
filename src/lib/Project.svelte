<script lang="ts">
  export let name: string;
  export let description: string;
  export let githubLink: string;
  export let liveLink: string;
  export let image: string;
  export let comesFromLeft: boolean;
  export let skills: string[];

</script>

<div>
  <h3>{name}</h3>
  <p>{description}</p>
  <a href={githubLink} rel=noreferrer target=_blank>Github</a>
  <a href={liveLink} rel=noreferrer target=_blank>Live</a>
  <img src={image} alt={name} />
  <p>comesFromLeft: {comesFromLeft}</p>
  <ul>
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
</div>

