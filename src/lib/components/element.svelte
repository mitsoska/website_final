<script>
  export let boiling_point;
  export let atomic_num;

  export let melting_point;
  export let oxidation_states = [];

  export let name;
</script>

<div class="elem-header">
  <h2>{name}</h2>

  <div class="details">
    <p> Σημείο βρασμού: {boiling_point} </p>
    <p> Σημείο τήξης: {melting_point} </p>

    <p> Ατομικός αριθμός: {atomic_num} </p>
    <div class="oxi">
      <p> Αριθμοί οξείδωσεις: </p>
      <ul>
        {#each oxidation_states as ox}
          <li>{ox}</li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style>

  .elem-header {
    display: flex;
    justify-content: space-between;
    margin: 0em 2em;
  }
  h1 p li h2  {
    color: black;
  }

  ul {
    list-style: none;
    display: flex;
  }

  .oxi {
    display: flex;
    align-items: center;
  }
  
</style>
