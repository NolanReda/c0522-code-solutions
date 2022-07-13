const data = require('./data');
const Chart = require('../node_modules/chart.js/dist/chart');

const ctx = document.querySelector('#myChart');
const myChart = new Chart(ctx, {
  type: 'doughnut',
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
      borderColor: [
        'rgb(136, 137, 139)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)'
      ],
      borderWidth: 6
    }]
  }
});
myChart();
// const ctx = document.querySelector('#myChart').getContext('2d');
// const myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july'],
//     datasets: [{
//       label: 'my first dataset',
//       backgroundColor: 'rgba(255, 99, 132)',
//       borderColor: 'rgba(255, 99, 132)',
//       borderWidth: 1,
//       data: [12, 19, 3, 5, 2, 3]
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });
