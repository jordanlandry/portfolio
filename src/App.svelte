<script lang="ts">
  import { onMount } from 'svelte';
  import AboutSection from './lib/AboutSection.svelte';
  import NameSection from './lib/NameSection.svelte';
  import ProjectSection from './lib/ProjectSection.svelte';


  let languages = {};
  const repoNames = [];
  onMount(() => {
    // async function getData() {
    //   const response = await fetch('https://api.github.com/users/jordanlandry/repos');
    //   const data = await response.json();
    //   data.forEach(repo => repoNames.push(repo.name));

    //   repoNames.forEach(async (repoName) => {
    //     const response = await fetch(`https://api.github.com/repos/jordanlandry/${repoName}/languages`);
    //     const data = await response.json();
    //     Object.keys(lang => {
    //       if (languages[lang]) languages[lang] += data[lang];
    //       else languages[lang] = data[lang];
    //     });
    //     data.forEach(lang => {
    //       if (languages[lang]) languages[lang] += 1;
    //       else languages[lang] = 1;
    //     });
        
    //     console.log(languages);
    //   });
    // }

    // getData();
  });
</script>

<main>
  <NameSection />  
  <AboutSection />
  <ProjectSection />
</main>

<style>

</style>