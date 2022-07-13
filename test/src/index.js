const data = require('./data');
const Chart = require('../node_modules/chart.js/dist/chart');

const img = new Image();
img.src = './images/silver.png';

const ctx = document.querySelector('#myChart');
/* eslint-disable no-unused-vars */
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Silvers', 'Gold Novas', 'MG', 'LE', 'Global Elite'],
    datasets: [{
      label: 'Ranks',
      data: [data.silvers, data.goldNovas, data.mg, data.le, data.globalElite],
      backgroundColor: [
        'rgb(83, 84, 86)',
        'rgb(49,73,133)',
        'rgb(34,48,85)',
        'rgb(28,28,28)',
        'rgb(193,178,107)'
      ],
      borderAlign: 'inner'
    }]
  },
  options: {
    innerWidth: 20
  }
});
