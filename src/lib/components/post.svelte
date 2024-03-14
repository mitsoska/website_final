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
    color: black;
    list-style: none;
    padding: 0;
  }

  .post li {
    color: black;
    text-decoration: none;
    border-radius: 0.2em;
    border: 3px solid black;
    padding: 0.1em 1em;
    margin: 1em 3em;
    background-color: rgb(200, 200, 200);
  }


  @media (max-width: 600px) {
     li {
       margin: 0;
       width: 100%;
     }
  }

  a {
      color: black;
      text-decoration: none;
  }

  .card h3 {
      color: black;
  } 

  div p {
      color: black;
  }

</style>
