import React from "react";

export default function Render(){
  return (
    <section id="render">
      <h2><code>render()</code></h2>
      <h4>montage / mise à jour</h4>
      <br />
      <p>La seule méthode obligatoire dans un composant<br />
      Examine <code>this.props</code> et <code>this.state</code> et renvoie un élément React.<br />
      Elle doit rester pure ! Pas de modification du state dans cette méthode.</p>
      <pre><code className="hljs" data-trim contentEditable>{`
    class MyComponent extends Component {
      render() {
        return (
          <div>
            <span>{this.props.myProp}</span>
            <span>{this.state.myState}</span>
          </div>
        )
      }
    }
    `}</code></pre>
    </section>
  )
}