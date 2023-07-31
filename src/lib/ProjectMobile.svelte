
<script lang=ts>
  import { onDestroy, onMount } from "svelte";

  import Carousel from 'svelte-carousel';

  export let name: string;
  export let skills: string[];
  export let description: string;
  export let images: string[];
  export let liveLink: string;
  export let githubLink: string;

  const BASE_URL = "/portfolio/assets";
</script>

<div class=wrapper>
  <h3 class=name>{name}</h3>
  <ul class="skill-wrapper unstyled-list">
    {#each skills as skill}
      <li>{skill}</li>
    {/each}
  </ul>
  <p>{description}</p>

    <Carousel>
      {#each images as image}
      <div class=img-wrapper>
        <img src={BASE_URL + "/" + {image}} alt={name} draggable="false"/>
      </div>
      {/each}
    </Carousel>

  <div class=link-wrapper>
    <a href={githubLink} target=_blank rel=noreferrer>View on Github</a>
    <a href={liveLink} target=_blank rel=noreferrer>View a demo</a>
  </div>
</div>

<style>
  .wrapper {
    margin-bottom: 10rem;
  }

  .name {
    font-size: 2rem;
    font-weight: 100;
    text-align: center;
  }

  .img-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  img {
    width: 100%;
    user-select: none;
  }

  .skill-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .skill-wrapper > li {
    background-color: rgb(240, 240, 240);
    color: var(--color-white);
    border-radius: 2px;
    padding: 0.5rem 1rem;
  }

  .link-wrapper {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .link-wrapper > a {
    border: 1px solid black;
    padding: 0.5rem 1rem;
    cursor: pointer;

    text-decoration: none;
    color: black;

    transition: 0.2s;
  }

  .link-wrapper > a:hover {
    background-color: black;
    color: white;
  }

</style>