<script>
  import Post from '$lib/components/post.svelte';
  export let data;

  const {posts, category, total} = data;
</script>

<h1>Κατηγορία: {category}</h1>

<Post {posts} />

<div class="space">
</div>
<style>

  
  .space {
    margin-bottom: 13em;
  }
  
  h1 {
    color: black;
    width: 100%;
    text-align: center;
    margin: 2em 0;
  }
  
</style>
