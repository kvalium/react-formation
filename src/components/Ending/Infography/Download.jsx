import React, { Component } from 'react';
import Chart from 'chart.js';
import { hexToRgba, configurePie } from '../../../utils';

const downloadChart = {
  type: 'doughnut',
  data: {
    labels: ['Angular', 'React', 'Vue'],
    datasets: [
      {
        data: [1977310, 5063253, 797242],
        backgroundColor: [hexToRgba('#f44336', 0.5), hexToRgba('#00bcd4', 0.5), hexToRgba('#4caf50', 0.5)],
        borderColor: [hexToRgba('#f44336', 1), hexToRgba('#00bcd4', 1), hexToRgba('#4caf50', 1)]
      }
    ]
  },
  options: configurePie()
};

class Download extends Component {
  componentDidMount() {
    this.createChart('download-chart', downloadChart);
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
      <section id="download">
        <h2>Téléchargements NPM*</h2>
        <h3><span className="red">Angular</span> Vs. <span className="cyan">React</span> Vs. <span className="green">Vue</span></h3>
        <canvas id="download-chart" style={{ position: 'relative', height: '60vh', width: '100vw' }}></canvas>
        <div className="fragment">
          <br />
          <span className="blue-grey"><em><small>* 20 Janvier 2019</small></em></span>
        </div>
      </section>
    );
  }
}

export default Download;
