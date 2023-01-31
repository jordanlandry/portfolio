<script lang="ts">

</script>

<div class=name-wrapper>
  <h1 class=name-fancy>Jordan Landry</h1>
  <p class=name-title>Front-end Developer ~ React / Vue / Svelte</p>
</div>


<style>
  .name-fancy {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* TODO Make cursive */
    margin: 0;
  }
  
  .name-wrapper {
    animation: fade-in 1s ease-in-out;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.75rem;
  }

  .name-title {
    font-size: 2.75rem;
    text-align: center;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 768px) {
    .name-wrapper {
      font-size: 1.75rem;
    }

    .name-title {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 500px) {
    .name-wrapper {
      font-size: 1.25rem;
    }

    .name-title {
      font-size: 1.7rem;
    }
  }

</style>