import React from 'react';
import gulp from '../../assets/gulp.png';
import grunt from '../../assets/grunt.png';

const TaskRunner = () => (
  <section id="task-runner">
    <img data-src={gulp} alt="Gulp" />
    <img data-src={grunt} alt="Grunt" />
    <h2>Task Runner</h2>
    <p>
      Automatiser vos tâches répétitives<br />
      Gulp se concentre sur le code<br />
      Grunt nécessite de la configuration
    </p>
    <div className="fragment">
      <p><em>Utiliser pour la <span className="orange">compilation</span>, le <span className="blue">renommage</span>, la <span className="red">concaténation</span>, le <span className="green">scripting</span>, la <span className="pink">minification</span>...</em></p>
    </div>
  </section>
);

export default TaskRunner;
