var orderHistory = [
  { // order 0
    orderNumber: '114-3941689-8772232',
    shipTo: 'JS Masher',
    total: '$34.00',
    orderPlaced: 'August 4, 2020',
    delivered: 'Aug 8, 2020',
    title: 'JavaScript for impatient programmers',
    author: 'Rauschmauer, Dr. Axel',
    returnWindow: 'Sep 7, 2020',
    price: '$31.55'
  },
  { // order 1
    orderNumber: '113-9984268-1280257',
    shipTo: 'JA Maser',
    total: '$44.53',
    orderPlaced: 'July 19, 2020',
    delivered: 'Jul 20, 2020',
    title: 'The Timeless Way of Building',
    author: 'Alexander, Chistopher',
    returnWindow: 'Aug 19, 2020',
    price: '$41.33'
  },
  { // order 2
    orderNumber: '114-2875557-9059409',
    shipTo: 'JS Masher',
    total: '$17.22',
    orderPlaced: 'July 4, 2020',
    delivered: 'Jul 7, 2020',
    title: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    author: null,
    returnWindow: 'Aug 5, 2020',
    price: '$15.98'
  },
  { // order 3
    orderNumber: '113-2883177-2648248',
    shipTo: 'JS Masher',
    total: '$138.93',
    orderPlaced: 'July 3, 2020',
    delivered: 'Jul 5, 2020',
    orderItems: [
      {
        title: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        author: null,
        returnWindow: 'Aug 5, 2020',
        price: '$94.95'
      },
      {
        title: 'The Art of Sql',
        author: 'Faroult, Stephane',
        returnWindow: 'Aug 4, 2020',
        price: '$33.99'
      }
    ]
  }
];

console.log('The author of the last book on the order history is ', orderHistory[3].orderItems[1].author);
