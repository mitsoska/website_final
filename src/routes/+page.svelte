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

  .codespan {
    max-width: 70ch;
    margin: 3em auto;
    background: rgb(30, 30, 50);
    border-radius: 0.2em;
    border: rgb(80, 80, 100) solid 1px;
    padding: 0.1em 1em;
  }

  .code_word {
    color: var(--brown);
    font-weight: 500;
  }

  .data_type{
    color: var(--purple);
    font-weight: 500;
  }

  .string {
    color: var(--green);
    font-weight: 500;
  }
  
  h1 {
    font-weight: 500;
    color: lightblue;
  }

  .text {
    color: rgb(200, 200, 200);
  }

  .codespan pre {
    font-size: 1.5em;
    color: var(--purple);
    font-weight: 500;
  }
  .text p {
    text-align: justify;
    font-weight: 700;
  }
  .container {
    width: 100%;
    max-width: 70ch;
    margin: 0 auto;
    padding: 5em 0em;
  }

</style>
