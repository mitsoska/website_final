<script>
  export let title = "No title given";
</script>


<svelte:head>
  <title>{title}</title>
</svelte:head>

<main>
  <div>
    <h1>{title}</h1>
    <slot/>
  </div>
</main>

<style>

  div {
    max-width: 70ch;
    margin: 0 auto;
    color: white;
  }

  h1 {
    text-align: center;
    margin: 2em 0;
  }
</style>
