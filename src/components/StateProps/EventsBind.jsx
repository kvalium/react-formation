import React from "react";

export default function EventsBind(){
  return(
    <section id="events-binding">
      <h2>Gestion des événements 2/2</h2>
      <p>La méthode <code>handleClick</code> doit être <i>bindée</i> pour pouvoir utiliser <code>this</code><br />
      En JS, les méthodes de classes ne sont pas liées par défaut.</p>
      <pre><code className="hljs" data-trim contentEditable>{`
    class Toggle extends React.Component {
      constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de this dans la fonction de rappel.
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick() {
        this.setState({
          isToggleOn: !this.state.isToggleOn
        });
      }

      render() {
        return (
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        );
      }
    }
    `}</code></pre>
    </section>
  )
}