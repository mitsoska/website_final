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
    color: white;
    list-style: none;

  }

  li {
    color: white;
    text-decoration: none;
    background: var(--brown-grey);
    border-radius: 0.2em;
    border: 2px solid var(--purple);
    padding: 1em;
    max-width: 70ch;
    margin: 1em auto;
  }

  a {
      color: white;
      text-decoration: none;
  }

  
</style>
