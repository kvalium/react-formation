import React from 'react';

const Item = () => (
  <section id="item">
    <h2>Objets</h2>
    <p>Voici comment déclarer un objet en <strong>JavaScript</strong> :</p>
    <pre><code className="hljs" data-trim contentEditable>{`
  let album = {};

  album = {
    id: 6,
    title: 'Migration',
    artist: 'Bonobo',
    released: new Date(2017, 0, 13),
    length: 62,
    genre: 'Downtempo',
    label: 'Ninja Tune',
    tracks: 12
  };

  delete album.genre;

  album.genre = ['Electronic', 'Downtempo', 'Experimental'];

  console.log(album['genre'][0]); // Affiche 'Electronic' dans la console
    `}</code></pre>
  </section>
);

export default Item;
