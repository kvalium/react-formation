import React from 'react';

const Reducers = () => (
  <section id="reducers">
    <h2>Reducers</h2>
    <p>
      L'<em>action</em> trace le changement dans le <strong>store</strong><br />
      Le <code>reducer</code> se charge d'effectuer la modification
    </p>
    <div className="fragment">
      <pre><code className="hljs" data-trim contentEditable>{`
  import { CREATE_TASK, COMPLETE_TASK } from './actions';

  /* Initial State */
  export default function tasks (state = [], action) {
    switch (action.type) {
      case CREATE_TASK:
        return [
          ...state,
          action.task
        ];

      case COMPLETE_TASK:
        return state.map(task => task.label === action.label ? { ...task, completed: !task.completed } : task);

      default:
        return state;
    }
  }									
      `}</code></pre>
    </div>
  </section>
);

export default Reducers;
