<script>
  import Post from '$lib/components/post.svelte'
  
  // It's automatically assigned by the +server.js script
  export let data;

</script>

<title>Άρθρα</title>


<h2> Λίστα άρθρων </h2>

<Post />
<Post posts={data.posts} />

<div class="space">
</div>
<style>
  
  .space {
    margin-bottom: 17em;
  }

h2 {
    text-align: center;
    color: white;
    max-width: 70ch;
    margin: 1.5em auto;
  }

  
  
</style>
