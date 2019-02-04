import React, { Component } from 'react';
import Chart from 'chart.js';
import { hexToRgba, configureRadar } from '../../../utils';

const criteriaChart = {
  type: 'radar',
  data: {
    labels: ['Maturité', 'Apprentissage', 'Communauté', 'Popularité', 'Performance', 'Evolutivité', 'Ressources', 'Concept'],
    datasets: [
      {
        label: 'Angular',
        data: [6, 3, 6, 5, 4, 6, 9, 6],
        backgroundColor: hexToRgba('#f44336', 0.2),
        borderColor: hexToRgba('#f44336', 0.8)
      },
      {
        label: 'React',
        data: [8, 5, 8, 9, 8, 8, 3, 8],
        backgroundColor: hexToRgba('#00bcd4', 0.2),
        borderColor: hexToRgba('#00bcd4', 0.8)
      },
      {
        label: 'Vue',
        data: [7, 9, 6, 3, 8, 4, 7, 7],
        backgroundColor: hexToRgba('#4caf50', 0.2),
        borderColor: hexToRgba('#4caf50', 0.8)
      }
    ]
  },
  options: configureRadar()
};

class Criteria extends Component {
  componentDidMount() {
    this.createChart('criteria-chart', criteriaChart);
  }

  createChart = (chartId, chartData) => {
    const { type, data, options } = chartData;
    const ctx = document.getElementById(chartId);
    // eslint-disable-next-line
    const myChart = new Chart(ctx, {
      type,
      data,
      options
    });
  };

  render() {
    return (
      <section id="criteria">
        <h2>Comparatif</h2>
        <h3><span className="red">Angular</span> Vs. <span className="cyan">React</span> Vs. <span className="green">Vue</span></h3>
        <canvas id="criteria-chart" style={{ position: 'relative', height: '75vh', width: '100vw' }}></canvas>
      </section>
    );
  }
}

export default Criteria;
