const ctx = document.querySelector('#myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july'],
    datasets: [{
      label: 'my first dataset',
      backgroundColor: 'rgba(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132)',
      borderWidth: 1,
      data: [12, 19, 30, 5, 2, 3]
    }]
  },
  options: {}
});
