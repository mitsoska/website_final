<script>
  export let posts = []

  console.log("I caught them!");
  $: console.log(posts);
</script>

<ul class="post">
  {#each posts as post}
    <li>
      <a href="/posts/{post.slug}">
	<div class="card">
	  <h3>{post.title}</h3>
	  <div class="body">
	    <p>{post.description}</p>
	    <p id="date">Δημοσιεύτηκε στις: {post.date}</p>
	  </div>
	</div>
      </a>
    </li>
  {/each}
</ul>

<style>
  
  .body #date {
    text-align: right;
  }
  
  ul {
    color: var(--silver1);
    list-style: none;

  }

  li {
    color: var(--silver);
    text-decoration: none;
    background: rgb(40, 40, 40);
    border-radius: 0.2em;
    border: 1px solid var(--silver);
    padding: 0.1em 1em;
    max-width: 70ch;
    margin: 1em auto;
  }

  a {
      color: white;
      text-decoration: none;
  }

  
</style>
