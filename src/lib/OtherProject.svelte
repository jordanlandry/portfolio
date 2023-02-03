<script lang="ts">
  export let name: string;
  export let description: string;
   export let githubLink: string;
  export let language: string;
  export let icon: string;
  export let languageIcon: string;
</script>

<div class=wrapper>
  <div class=name-wrapper>
    <h3 class="name">{name}</h3>
    <div class="icon">
      <img src={icon} alt={name} />
    </div>
  </div>

  <div class="language">
    <span>Made in&nbsp;</span>
    <span class=language-name>{language}</span>
    <img src={languageIcon} alt={language} />
  </div>
  
  <div class="description">
    {description}
  </div>
  <div class="links">
    <a href={githubLink} target="_blank" rel="noreferrer">View on Github</a>
  </div>
</div>


<style>

.name-wrapper {
  display: flex;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 5px;
  /* justify-content: space-around; */

  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.wrapper > div:last-child {
  margin-top: auto;
}

.name-wrapper > h3 {
  font-weight: 500;
  font-size: 1.5rem;
}


.wrapper img {
  display: flex;
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.5rem;
}

.name-wrapper img {
  width: 2rem;
  height: 2rem;
}

.language {
  display: flex;
  align-items: center;
}

.language-name {
  font-weight: 500;
  margin-right: 0.5rem;
}

.wrapper a {
  text-decoration: none;
  color: black;
}

.wrapper a:hover {
  text-decoration: underline;
}


</style>