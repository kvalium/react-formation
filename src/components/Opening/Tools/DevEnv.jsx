import React from 'react';
import eclipse from '../../../assets/eclipse.png';
import intelliJ from '../../../assets/intellij.png';
import netBeans from '../../../assets/netbeans.png';
import webStorm from '../../../assets/webstorm.png';

const DevEnv = () => (
  <section id="dev-env">
    <img data-src={eclipse} alt="Eclipse" />
    <img data-src={intelliJ} alt="IntelliJ" />
    <img data-src={netBeans} alt="NetBeans" />
    <img data-src={webStorm} alt="WebStorm" />
    <h2>IDE</h2>
    <div className="beautify-table custom">
      <div className="beautify-table-head">
        <table>
          <thead>
            <tr className="head">
              <th className="column1">IDE</th>
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
              <td className="column1"><strong>Eclipse</strong></td>
              <td className="column2">Une multitude de plugins disponibles</td>
              <td className="column3">Lourdeur de l'IDE pour une utilisation sur le long terme</td>
            </tr>
            <tr className="body alt">
              <td className="column1"><strong>IntelliJ</strong></td>
              <td className="column2">Analyse de code intelligente et <em>refactoring</em> avancé</td>
              <td className="column3">Fonctionnalités et langages limités en Community Edition</td>
            </tr>
            <tr className="body">
              <td className="column1"><strong>NetBeans</strong></td>
              <td className="column2">Fourni des pilotes pour toutes les bases de données</td>
              <td className="column3">Non optimisé pour le développement Web</td>
            </tr>
            <tr className="body alt">
              <td className="column1"><strong>WebStorm</strong></td>
              <td className="column2">Fonctionnalités poussées en JavaScript, HTML et CSS</td>
              <td className="column3">Période d'essai pour les fonctionnalités avancées</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default DevEnv;
