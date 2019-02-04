import React, { Component } from 'react';
import Chart from 'chart.js';
import { hexToRgba, configureBar, getRatio } from '../../../utils';

const frameworks = ['AngularJS', 'Spring', 'React', 'ExpressJS', 'ASP', 'Django', '.NETCore', 'Ruby On Rails', 'VueJS', 'Struts', 'JSF', 'BackboneJS', 'Cocoa', 'Meteor', 'Ember'];
const year2k17 = [32.5, 24.9, 20.2, 17.8, 16.2, 13.6, 18.8, 10.7, 5.5, 9.6, 9.7, 6.9, 3.5, 3, 2.8];
const year2k18 = [33.5, 25.9, 25.8, 19.9, 18.6, 18.1, 15.7, 10.7, 10.3, 8.1, 8, 6.1, 3.8, 2.7, 2.4];

const frameKnownChart = {
  type: 'bar',
  data: {
    labels: frameworks,
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

class FrameKnown extends Component {
  componentDidMount() {
    this.createChart('frame-known-chart', frameKnownChart);
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
      <section id="frame-known">
        <h2>Framework</h2>
        <h3>Connaissances en <span className="light-green">2017</span> Vs. <span className="light-blue">2018</span></h3>
        <canvas id="frame-known-chart" style={{ position: 'relative', height: '60vh', width: '100vw' }}></canvas>
      </section>
    );
  }
}

export default FrameKnown;
