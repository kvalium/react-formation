import React, { Component } from 'react';
import Chart from 'chart.js';
import { hexToRgba, configureBar, getRatio } from '../../../utils';

const languages = ['JavaScript', 'Java', 'C', 'Python', 'C++', 'PHP', 'C#', 'TypeScript', 'Pascal', 'Ruby', 'R', 'Perl', 'Go', 'Swift', 'Scala', 'Kotlin', 'Haskell', 'Clojure', 'Rust'];
const year2k17 = [67.9, 71.2, 63.2, 49.4, 55.6, 33, 34, 15.1, 11.9, 14.1, 7.9, 9.3, 6.1, 6.4, 6.4, 3, 3.8, 3.6, 1.7, 1.2];
const year2k18 = [73.2, 70.7, 62.8, 57, 55.8, 38.7, 37.7, 24.2, 13.3, 12.5, 10, 9.3, 8.8, 7, 6.2, 6.2, 4.2, 4.1, 1.8, 1.6];

const langKnownChart = {
  type: 'bar',
  data: {
    labels: languages,
    datasets: [
      {
        label: '2017',
        data: year2k17,
        backgroundColor: hexToRgba('#8bc34a', 0.5),
        borderColor: hexToRgba('#8bc34a', 1),
        borderWidth: 1
      },
      {
        label: '2018',
        data: year2k18,
        backgroundColor: hexToRgba('#03a9f4', 0.5),
        borderColor: hexToRgba('#03a9f4', 1),
        borderWidth: 1
      },
      {
        type: 'line',
        label: 'Progression',
        data: getRatio(year2k18, year2k17),
        backgroundColor: hexToRgba('#009688', 0.2),
        borderColor: hexToRgba('#009688', 0.8),
        borderWidth: 2,
        hidden: true
      }
    ]
  },
  options: configureBar(true)
};

class LangKnown extends Component {
  componentDidMount() {
    this.createChart('lang-known-chart', langKnownChart);
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
      <section id="lang-known">
        <h2>Langages</h2>
        <h3>Connaissances en <span className="light-green">2017</span> Vs. <span className="light-blue">2018</span></h3>
        <canvas id="lang-known-chart" style={{ position: 'relative', height: '60vh', width: '100vw' }}></canvas>
      </section>
    );
  }
}

export default LangKnown;
