<nav>
  <a href = "/" class="logo"> Δημήτρης Κατηφόρης</a>
  <div>
    <a href = "/posts">Άρθρα</a><a href = "/about">Ποιός είμαι;</a><a href="/software">Χρήσιμο λογισμικό</a>
  </div>
</nav>

<slot />

<footer>
  <p>Δημήτρης Κατηφόρης: <span>pioyi@mail.com</span></p>
  <a href="https://codeberg.org/Dimitris.Katiforis" target="_blank">Ο λογαριασμός μου στο codeberg</a>
</footer>

<style>

  footer {
    margin-top: 5em;
    width: 100%;
    padding: 2em;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: black;
    color: grey;
  }

  footer a {
    font-size: 1em;
    font-weight: 600;
    color: grey;
  }
  :global(:root)
  {
    --brown:  rgb(155, 60, 34);
    --purple: rgb(140, 140, 200);
    --green:  rgb(40, 140, 50);
    --brown-grey:  rgb(120, 100, 80);
  }
  
  img {
    width: 4em;
  }

  .logo {
    font-size: 1.1em;
  }

  :global(body) {
    margin: 0;
    background: rgb(10, 10, 30);

  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  :global(p, h1) {
    font-family: "Noto sans", sans-serif;
    font-weight: 500;
  }
  
  a {
    color: rgb(200, 200, 200);
    font-weight: 800;
    font-size: 0.7em;
    text-decoration: none;
    margin-left: 2em;
  }

  a:hover {
    color: gold;
  }
  nav {
    padding: 0.8em 1em;
    margin: 0 10em;
    background: rgb(10, 10, 30);
    border-bottom: 1px solid rgb(40, 40, 40);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
  
</style>
