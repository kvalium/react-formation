import React from 'react';

const Nav = () => (
  <section id="nav">
    <h2>Navigation</h2>
    <p>La navigation par URL peut ensuite se faire de deux manières :</p>
    <ol className="fragment">
      <li>Dynamiquement via la propriété <code>history</code> étendue par <strong>withRouter</strong></li>
      <li>Grâce au composant <strong>Link</strong> au sein de la fonction <code>render()</code></li>
    </ol>
    <div className="fragment">
      <pre><code className="hljs" data-trim contentEditable>{`
  import React, { Component } from 'react';
  import { Link, withRouter } from 'react-router-dom';

  class NavBar extends Component {
    goToLogin = () => {
      this.props.history.push('/login');
    };

    render() {
      return(
        <nav>
          <button onClick={this.goToLogin}>
            Login
          </button>
          <button>
            <Link to="/contact">Contact</Link>
          </button>
        </nav>
      );
    }
  }

  export default withRouter(NavBar);
      `}</code></pre>
    </div>
  </section>
);

export default Nav;
