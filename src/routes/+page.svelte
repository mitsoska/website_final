<div class="container">
  <div class="text">
    <h1>Καλωσήρθατε!</h1>
    <p>Αυτή είναι η ιστοσελίδα στην οποία γράφω τις προσωπικές μου απόψεις (και κάποτε παραγράφω), καταγράφω χρήσιμα εργαλείο που χρησιμοποιώ και περιγράφω τον εαυτό μου. Αναγράφεται παρεπιπτόντως η σελίδα μου στο codeberg κάτω κάτω.</p>
  </div>
  <div class="codespan">
    <pre><code>#include {'<'}stdbool.h{'>'}
#include {'<'}string.h{'>'}
	    
int main() {'{'}
    bool is_formal = ?;
    char message[9] = "Geia soy!";

    if (is_formal)
        memcpy(message + 5, "sas", 3);
    puts(message);
{'}'}
</code></pre>
  </div>
</div>

<style>
   marquee {
    color: white;
    margin-top: 5em;

   }

  .codespan {
    max-width: 70ch;
    margin: 3em auto;
    background: rgb(10, 50, 50);
    border-radius: 0.2em;
    border: solid 2px  rgb(20, 20, 20) ;
    padding: 0 1em;
  }

  .code_word {
    color: rgb(120, 180, 140);
    font-weight: 500;
  }

  .data_type{
    color: var(--purple);
    font-weight: 500;
  }

  .string {
    color: var(--silver);
    font-weight: 200;
  }
  
  h1 {
    font-weight: 800;
    color: rgb(100, 100, 100);
  }

  .text {
    color: rgb(200, 200, 200);
  }

  .codespan pre {
    font-size: 1.5em;
    color: rgb(200, 170, 30);
    font-weight: 500;
  }
  .text p {
    text-align: justify;
    font-weight: 400;
  }
  .container {
    width: 100%;
    max-width: 70ch;
    margin: 3em auto;
  }

</style>
