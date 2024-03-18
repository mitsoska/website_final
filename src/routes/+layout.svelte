<main>
  <a href = "/"><h1 class="logo">Δημήτρης Κατηφόρης</h1></a>

<nav>
  <div>
    <a href = "/posts">Άρθρα</a><a href = "/about">Ποιός είμαι;</a><a href="/software">Χρήσιμο λογισμικό</a><a href="/chemistry">Χημεία</a>
  </div>
</nav>

<slot />

<footer>
  <p class="email">Δημήτρης Κατηφόρης: <span>dimkatif@chemist.com</span></p>
  <a href="https://codeberg.org/Dimitris.Katiforis" target="_blank">Ο λογαριασμός μου στο codeberg</a>
</footer>
</main>
<style>

  .email {
     color: black;
     font-size: 0.8em;
  }
  
  main {
    margin: 0 22vw;
    margin-top: 2em;
    background-image: url(/paper.jpg);
    background-size: 30em;        
    box-shadow: inset 0 0 1em rgb(150, 150, 150);
  } 

  @media (max-width: 600px) {
     main {
       margin: 0;
     }
  }
  
  footer {
    margin-top: 5em;
    width: 100%;
    padding: 0em 2em;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    bottom: 12px;
  }

  footer a {
    font-weight: 300;
    color: black;
  }

:global(:root)
  {
    --brown:  rgb(155, 60, 34);
    --purple: rgb(100, 140, 200);
    --green:  rgb(40, 140, 50);
    --brown-grey:  rgb(120, 100, 80);
    --black: rgb(10, 10, 10);
    --silver: rgb(100, 100, 100);
}
  
  img {
    width: 4em;
  }

  .logo {
    font-size: 1.7em;
    display: block;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    position: relative;
    top: 12px;
    padding: 1em;
   }

  :global(body) {
    margin: 0;
    background-image: url(/wood.jpg);
  }

  :global(tr, th, td)
  {
      background-color: grey;
      border: 1px solid black;
      color: black;
      padding: 0.2em;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  :global(p, h1, h2, h3, h4, pre, li) {
    font-family: "Helvetica", sans-serif;
    font-weight: 500;
    line-height: 29.6px;
    color: black;
  }
  
  a {
    color: black;
    font-weight: 800;
    font-size: 0.7em;
    text-decoration: none;
  }

  nav a {
      padding-right: 2em;
  }
  
  a:hover {
    color: gold;
  }
  
  nav {
    padding: 1.2em 1em;
    display: flex;
    justify-content: center;
  }
  
</style>
