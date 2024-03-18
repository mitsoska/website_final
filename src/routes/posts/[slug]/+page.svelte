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

<title>{title}</title>

<style>

  .card a
  {
    color: black;
  }
  
  .catigoria {
    color: black;
    width: 100%;
    text-align: center;
  }

  p {
    margin-bottom: 54px;
  }
  
  .content {
    color: white;
    width: 100%;
    max-width: 70ch;
    margin: 0px auto;
  }

  .start {
    padding: 0px 0em;
  }

  .start h1 {
    width: 100%;
    text-align: center;
  }

  .start p {
    text-align: center;
    font-size: 15px;
    padding-top: 12px;
  }

  main {
    width: 100%;
    color: black;
  }

  div {
    color: black;
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
    background-color: rgb(210, 210, 210);
    padding: 0.6em 0.8em;
    border: 2px groove black;
    border-radius: 0.4em;
  }
  
  .card p {
    font-size: 1em;
  }

  img {
    width: 100%;
    border: 1px solid black;
  }
  
</style>
