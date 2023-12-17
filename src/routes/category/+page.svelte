<script>
  export let data;
  const { unique_categories } = data;

</script>

<title>Κατηγορίες άρθρων</title>

<div>
  <h1 class="categories">Κατηγορίες:<h1>
      <ul>
	<li>
	  {#each unique_categories as category}
	    <a href="/category/{category.title}"><div class="card">
		<p>{category.title} | {category.count}</p>
	      </div>
	    </a>
	  {/each}
        </li>
      </ul>
</div>

<style>

  a {
    text-decoration: none;

  }
  .categories {
    width: 100%;
    text-align: center;
    margin: 2em 0;
  }
  
  h1 {
    font-size: 25px;
  }

  p {
    font-size: 15px;
  }

  div {
  color: white;
  }

  ul {
    display: table;
    max-width: 70ch;
    list-style-type: none;
    margin: 0 auto;
    margin-bottom: 15em;
  }
  .card {
    background-color: var(--silver);
    max-width: 70ch;
    padding: 0.5em;
    border-radius: 0.4em;
    display: inline-block;
    margin: 2em ;
  }
</style>
