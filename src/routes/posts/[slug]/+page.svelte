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

<div class="card__container">
    {#each categories as category}
	<div class="card">
	  <a href="/category/{category}">{category}</a>
	</div>
    {/each}
</div>


<style>

  .catigoria {
    color: white;
    width: 100%;
    text-align: center;
    margin-top: 2em;
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
    color: white;
  }
  
  .card__container {
    margin: 0 auto;
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
  }

  .card {
    background-color: var(--silver);
    padding: 0.6em 0.8em;
    border-radius: 0.3em;
  }

  .card p {
    font-size: 1em;
  }

</style>
