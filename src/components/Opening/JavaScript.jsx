import React from 'react';
import javaScript from '../../assets/javascript.png';

const JavaScript = () => (
  <section id="javascript">
    <img data-src={javaScript} alt="JavaScript" />
    <h2>JavaScript</h2>
    <p>
      Créé part <strong>Brendan Eich</strong> en 1995<br />
      {/* Alliance entre <strong>Sun</strong> et <strong>Netscape</strong><br /> */}
      Langage faiblemment typé<br />
      {/* Programmation fonctionnelle<br /> */}
      Volonté d'un Web plus dynamique<br />
      {/* Version 9 depuis Juin 2018 */}
    </p>
  </section>
);

export default JavaScript;
