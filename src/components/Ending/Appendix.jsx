import React from 'react';

const Appendix = () => (
  <section id="appendix">
    <h2>Annexes</h2>
    <div className="beautify-table custom">
      <div className="beautify-table-head">
        <table>
          <thead>
            <tr className="head">
              <th className="column1">Source</th>
              <th className="column2 fill">Lien</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="beautify-table-body">
        <table>
          <tbody>
          <tr className="body">
            <td className="column1">React</td>
            <td className="column2 fill">https://reactjs.org/</td>
          </tr>
          <tr className="body alt">
            <td className="column1">React Router</td>
            <td className="column2 fill">https://reacttraining.com/react-router/</td>
          </tr>
          <tr className="body">
            <td className="column1">Redux</td>
            <td className="column2 fill">https://redux.js.org/</td>
          </tr>
            <tr className="body alt">
              <td className="column1">HackerRank</td>
              <td className="column2 fill">https://research.hackerrank.com/developer-skills/2019/</td>
            </tr>
            <tr className="body">
              <td className="column1">Medium</td>
              <td className="column2 fill">https://medium.com/</td>
            </tr>
            <tr className="body alt">
              <td className="column1">MDN</td>
              <td className="column2 fill">https://developer.mozilla.org/fr/</td>
            </tr>
            <tr className="body">
              <td className="column1">MrDoomy</td>
              <td className="column2 fill">https://gitlab.com/mrdoomy/</td>
            </tr>
            <tr className="body alt">
              <td className="column1">RevealJS</td>
              <td className="column2 fill">https://revealjs.com/</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Appendix;
