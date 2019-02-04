/**
 * Convert Hex Color To Its Rgba Value (According To Its Opacity)
 * 
 * @param {String} hex Hex Color
 * @param {Number} opacity Opacity
 * @returns {String} Rgba Value
 */
export const hexToRgba = (hex, opacity) => {
  let color;
  const regex = /^#([A-Fa-f0-9]{3}){1,2}$/;

  if (regex.test(hex)) {
    color = hex.substring(1).split('');

    if (color.length === 3) {
      color = [color[0], color[0], color[1], color[1], color[2], color[2]];
    }

    color = '0x' + color.join('');
    return 'rgba(' + [(color >> 16) & 255, (color >> 8) & 255, color & 255, opacity].join(', ') + ')';
  }

  throw new Error('Bad Hex');
};

/**
 * Method For Generate 23 Shade Of Colors
 * 
 * @param {Number} opacity Opacity
 * @returns {Array} Shade Of Colors
 */
export const generateColors = opacity => [
  hexToRgba("#f44336", opacity),
  hexToRgba("#673ab7", opacity),
  hexToRgba("#03a9f4", opacity),
  hexToRgba("#4caf50", opacity),
  hexToRgba("#ffeb3b", opacity),
  hexToRgba("#ff5722", opacity),
  hexToRgba("#607d8b", opacity),
  hexToRgba("#e91e63", opacity),
  hexToRgba("#3f51b5", opacity),
  hexToRgba("#00bcd4", opacity),
  hexToRgba("#8bc34a", opacity),
  hexToRgba("#ffc107", opacity),
  hexToRgba("#795548", opacity),
  hexToRgba("#9c27b0", opacity),
  hexToRgba("#2196f3", opacity),
  hexToRgba("#009688", opacity),
  hexToRgba("#cddc39", opacity),
  hexToRgba("#ff9800", opacity),
  hexToRgba("#9e9e9e", opacity),
  hexToRgba("#f44336", opacity)
];

/**
 * Configure Options For Bar Charts
 *
 * @param {Boolean} display Display Value
 * @returns {Object} Bar Config
 */
export const configureBar = display => ({
  legend: {
    display,
    labels: {
      fontSize: 20
    }
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontSize: 20
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontSize: 20,
          stepSize: 10,
          beginAtZero: true
        }
      }
    ]
  },
  tooltips: {
    backgroundColor: hexToRgba('#000000', 0.5),
    titleFontSize: 20
  }
});

/**
 * Configure Options For Pie Charts
 *
 * @returns {Object} Pie Config
 */
export const configurePie = () => ({
  legend: {
    labels: {
      fontSize: 20
    }
  },
  tooltips: {
    backgroundColor: hexToRgba('#000000', 0.5),
    bodyFontSize: 20,
    callbacks: {
      label: (item, data) => {
        const title = data.labels[item.index];
        const dataset = data.datasets[item.datasetIndex];

        // Calculate The Total Of This DataSet
        const total = dataset.data.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
        });

        const currentValue = dataset.data[item.index];
        const percentage = Math.floor((currentValue / total) * 100 + 0.5);

        return `${title} : ${currentValue} (${percentage}%)`;
      }
    }
  }
});

/**
 * Configure Options For Radar Charts
 *
 * @returns {Object} Radar Config
 */
export const configureRadar = () => ({
  legend: {
    labels: {
      fontSize: 20
    }
  },
  scale: {
    pointLabels: {
      fontSize: 20
    },
    ticks: {
      fontSize: 0,
      beginAtZero: true,
      min: 0,
      max: 10,
      stepSize: 1
    }
  },
  tooltips: {
    backgroundColor: hexToRgba('#000000', 0.5),
    titleFontSize: 20
  }
});

/**
 * Build A Comparison Array Based On The First Data And The Second
 *
 * @param {Array} thisData First Array
 * @param {Array} thatData Second Array
 */
export const getRatio = (thisData, thatData) => {
  return thisData.map((data, index) => {
    const factor = Math.pow(10, 2);
    const stat = data - thatData[index];
    return Math.round(stat * factor) / factor;
  });
};
