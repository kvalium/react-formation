import React from 'react';

const Nav = () => (
  <section id="nav">
    <h2>Navigation</h2>
    <p>La navigation peut se faire de deux manières :</p>
    <ol className="fragment">
      <li>Dynamiquement via la propriété <code>history</code> étendue par <strong>withRouter</strong></li>
      <li>Grâce aux composants <strong>Link</strong> et <strong>NavLink</strong></li>
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
