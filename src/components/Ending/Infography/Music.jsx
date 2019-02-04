import React, { Component } from 'react';
import Chart from 'chart.js';
import { generateColors, configureBar } from '../../../utils';

const musics = ['Electro', 'Classique', 'Rock', 'Pop', 'Metal', 'Hip-Hop', 'Soul / Blues', 'Folk', 'R&B', 'Reggae'];
const developers = [25.3, 18.8, 16, 9.9, 8.7, 8, 7.9, 3, 1.6, 0.8];

const musicChart = {
  type: 'bar',
  data: {
    labels: musics,
    datasets: [
      {
        label: 'Musique',
        data: developers,
        backgroundColor: generateColors(0.5),
        borderColor: generateColors(1),
        borderWidth: 1
      }
    ]
  },
  options: configureBar(false)
};

class Music extends Component {
  componentDidMount() {
    this.createChart('music-chart', musicChart);
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
      <section id="music">
        <h2>Quel style de musique écouter lorsqu'on code ?</h2>
        <canvas id="music-chart" style={{ position: 'relative', height: '50vh', width: '100vw' }}></canvas>
      </section>
    );
  }
}

export default Music;
