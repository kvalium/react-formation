import React from 'react';

const Actions = () => (
  <section id="actions">
    <h2>Actions</h2>
    <p>
      Mise à jour du <strong>store</strong> uniquement via les <code>reducer</code>s appelés par des <em>actions</em><br />
      La comparaison de l'état permet d'identifier le changement<br />
      Le <em>type</em> est la référence utilisée par le <code>reducer</code>
    </p>
    <div className="fragment">
      <pre><code className="hljs" data-trim contentEditable>{`
  // Constants
  export const CREATE_TASK = 'TASK/CREATE_TASK';
  export const COMPLETE_TASK = 'TASK/COMPLETE_TASK';

  // Actions
  const createTask = task => ({ type: CREATE_TASK, task });
  const completeTask = task => ({ type: COMPLETE_TASK, task });
  
  // Object
  const task = { 
    label: 'Learn Redux', 
    completed: false 
  };

  // Dispatch To Reducer
  store.dispatch(createTask(task));
      `}</code></pre>
    </div>
  </section>
);

export default Actions;
