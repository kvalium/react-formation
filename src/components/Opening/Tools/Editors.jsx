import React from 'react';
import atom from '../../../assets/atom.png';
import brackets from '../../../assets/brackets.png';
import sublimeText from '../../../assets/sublimetext.png';
import vsCode from '../../../assets/vscode.png';

const Editors = () => (
  <section id="editors">
    <img data-src={atom} alt="Atom" />
    <img data-src={brackets} alt="Brackets" />
    <img data-src={sublimeText} alt="Sublime Text" />	
    <img data-src={vsCode} alt="Visual Studio Code" />
    <h2>Éditeurs</h2>
    <div className="beautify-table custom">
      <div className="beautify-table-head">
        <table>
          <thead>
            <tr className="head">
              <th className="column1">Éditeurs</th>
              <th className="column2">Avantages</th>
              <th className="column3">Inconvénients</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="beautify-table-body">
        <table>
          <tbody>
            <tr className="body">
              <td className="column1"><strong>Atom</strong></td>
              <td className="column2">Outil entièrement personnalisable et puissant</td>
              <td className="column3">Quelques problèmes de performance</td>
            </tr>
            <tr className="body alt">
              <td className="column1"><strong>Brackets</strong></td>
              <td className="column2">Aperçu du code en direct</td>
              <td className="column3">Petite communauté et peu d'extensions disponible</td>
            </tr>
            <tr className="body">
              <td className="column1"><strong>Sublime Text</strong></td>
              <td className="column2">Flexible et rapide notamment pour le développement Web</td>
              <td className="column3">Licence payante pour les fonctionnalités avancées</td>
            </tr>
            <tr className="body alt">
              <td className="column1"><strong>Visual Studio Code</strong></td>
              <td className="column2">Rapide, intégration GIT, beaucoup d'extensions</td>
              <td className="column3">On cherche encore</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Editors;
