import React, { Component } from 'react';
import Chart from 'chart.js';
import { generateColors, configureBar } from '../../../utils';

const languages = ['JavaScript', 'Java', 'C', 'Python', 'C++', 'PHP', 'C#', 'TypeScript', 'Pascal', 'Ruby', 'R', 'Perl', 'Go', 'Swift', 'Scala', 'Kotlin', 'Haskell', 'Clojure', 'Rust'];
const year2k19 = [11.1, 7.9, 6, 26.1, 10.3, 8.1, 12.5, 21.6, 7.6, 17.8, 21.4, 10.4, 37.2, 20.7, 20.9, 26.5, 15.6, 11.1, 13.2, 17.9];

const langLearnChart = {
  type: 'bar',
  data: {
    labels: languages,
    datasets: [
      {
        label: 'Langages',
        data: year2k19,
        backgroundColor: generateColors(0.5),
        borderColor: generateColors(1),
        borderWidth: 1
      }
    ]
  },
  options: configureBar(false)
};

class LangLearn extends Component {
  componentDidMount() {
    this.createChart('lang-learn-chart', langLearnChart);
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
      <section id="lang-learn">
        <h2>Quels frameworks les développeurs prévoient-ils d'apprendre ?</h2>
        <canvas id="lang-learn-chart" style={{ position: 'relative', height: '50vh', width: '100vw' }}></canvas>
      </section>
    );
  }
}

export default LangLearn;
