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
    border: 1px solid black;
    padding: 0.1em 1em;
    margin: 1em 3em;
    background-image: linear-gradient(to bottom, rgba(150, 150, 150, 0.15), rgba(130, 130, 130, 0.15));       
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
