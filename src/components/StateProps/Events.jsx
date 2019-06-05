import React from "react";

export default function Events(){
  return(
    <section id="events-handling">
      <h2>Gestion des événements 1/2</h2>
      <p>en HTML, l'événement sur le clic d'un lien pourrait s'écrire :</p>
      <pre><code className="hljs" data-trim contentEditable>{`
    <a href="#" onclick="console.log('Le lien a été cliqué.')">
      Clique ici
    </a>
    `}</code></pre>
    <br />
    <p>Voici sa traduction en React :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
    function ActionLink() {
      function handleClick(e) { // la méthode recoit l'evenement synthétique (e)
        e.preventDefault();
        console.log('Le lien a été cliqué.');
      }

      return (
        <a href="#" onClick={handleClick}> // notation camelCase sur les events
          Clique ici
        </a>
      );
    }
    `}</code></pre>
    </section>
  )
}