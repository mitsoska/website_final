<script>
  export let data;

  const {
    title,
    description,
    date,
    categories
  } = data.meta;

  const { post_content} = data;

  console.log(categories[0]);
  
</script>

<main>
  <div class="start">
    <h1>{title}</h1>

    <p>{date}</p>
  </div>

  <div class="content">
    <svelte:component this={post_content} />
  </div>
</main>

<h2 class="catigoria">Κατηγορίες:</h2>

<ul>
  <li>
    {#each categories as category}
      <a href="/category/{category}">
	<div class="card">
	  <p>{category}</p>
	</div>
      </a>
    {/each}
  </li>
</ul>


<style>

  .catigoria {
    color: white;
    width: 100%;
    text-align: center;
    margin: 2em 0;
    
  }

  .content {
    color: white;
    width: 100%;
    max-width: 70ch;
    margin: 0 auto;
  }
  .start {
    padding: 3em 0em;
  }

  .start h1 {
    width: 100%;
    text-align: center;
  }

  .start p {
    text-align: center;
    font-size: 15px;
  }
  main {
    width: 100%;
    color: white;
  }

  div {
    color: white;
  }

  a {
    text-decoration: none;
  }
  
  ul {
    max-width: 70ch;
    list-style-type: none;
    margin: 0 auto;
  }

  .card {
    background-color: var(--brown-grey);
    max-width: 70ch;
    padding: 0.2em 0.5em;
    border-radius: 0.4em;
    display: inline-block;
    margin-right: 1em;
  }

  .card p {
    font-size: 1em;
  }

</style>
