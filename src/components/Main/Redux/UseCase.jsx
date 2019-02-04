import React from 'react';

const UseCase = () => (
  <section id="use-case">
    <h2>Utilisation</h2>
    <p>
      <strong>React Redux</strong> permet de se connecter au <strong>store</strong> dans un composant<br />
      Cette connexion est indispensable pour pouvoir dispatcher des <em>actions</em>
    </p>
    <pre><code className="hljs" data-trim contentEditable>{`
  import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { completeTask } from './actions';
  
  class HelloComponent extends Component {
    updateTask = task => {
      this.props.completeTask(task);
    };

    render() {
      return(
        <ul>
          {this.props.tasks.map(task => (
            <li>{task.label}</li>
            <button onClick={this.updateTask(task)}>Update</button>
          )}
        </ul>
      );
    }
  }

  const mapStateToProps = state => ({
    tasks: state.tasks
  });
  
  const mapDispatchToProps = dispatch => ({
    completeTask: () => dispatch(completeTask())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(HelloComponent);
    `}</code></pre>
  </section>
);

export default UseCase;
