console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { player: 'Nolan', hand: [], handTotal: 0 },
  { player: 'Vanessa', hand: [], handTotal: 0 },
  { player: 'Brian', hand: [], handTotal: 0 },
  { player: 'Q', hand: [], handTotal: 0 }
];

var deck = [
  { Diamond: 'ace' }, { Diamond: 2 }, { Diamond: 3 }, { Diamond: 4 }, { Diamond: 5 }, { Diamond: 6 }, { Diamond: 7 }, { Diamond: 8 }, { Diamond: 9 }, { Diamond: 10 }, { Diamond: 'jack' }, { Diamond: 'queen' }, { Diamond: 'king' },
  { Heart: 'ace' }, { Heart: 2 }, { Heart: 3 }, { Heart: 4 }, { Heart: 5 }, { Heart: 6 }, { Heart: 7 }, { Heart: 8 }, { Heart: 9 }, { Heart: 10 }, { Heart: 'jack' }, { Heart: 'queen' }, { Heart: 'king' },
  { Club: 'ace' }, { Club: 2 }, { Club: 3 }, { Club: 4 }, { Club: 5 }, { Club: 6 }, { Club: 7 }, { Club: 8 }, { Club: 9 }, { Club: 10 }, { Club: 'jack' }, { Club: 'queen' }, { Club: 'king' },
  { Spade: 'ace' }, { Spade: 2 }, { Spade: 3 }, { Spade: 4 }, { Spade: 5 }, { Spade: 6 }, { Spade: 7 }, { Spade: 8 }, { Spade: 9 }, { Spade: 10 }, { Spade: 'jack' }, { Spade: 'queen' }, { Spade: 'king' }
];

function deal() {
  var shuffled = _.shuffle(deck);
  var card = 0;
  for (let i = 0; i < 8; i++) {
    if (card === 4) {
      i = 0;
    }
    if (card === 8) {
      return;
    }
    players[i].hand.push(shuffled[card]);
    card++;
  }
}

var $row = document.querySelector('#row');

function play(event) {
  deal();

  for (let i = 0; i < players.length; i++) {
    var div = document.createElement('div');
    div.setAttribute('class', 'column');
    div.setAttribute('style', 'font-size: larger; text-align: center;');
    var playerHand = document.createElement('p');
    playerHand.setAttribute('class', 'text');
    var hand1 = document.createTextNode(players[i].player + ' was dealt: ' + Object.keys(players[i].hand[0]) + ' ' + Object.values(players[i].hand[0]) + ' and ' + Object.keys(players[i].hand[1]) + ' ' + Object.values(players[i].hand[1]));
    playerHand.appendChild(hand1);
    div.appendChild(playerHand);
    $row.appendChild(div);
    var card1 = Object.values(players[i].hand[0])[0];
    var card2 = Object.values(players[i].hand[1])[0];
    if (card1 === 'jack' || card1 === 'queen' || card1 === 'king') {
      card1 = 10;
    } else if (card1 === 'ace') {
      card1 = 11;
    }
    if (card2 === 'jack' || card2 === 'queen' || card2 === 'king') {
      card2 = 10;
    } else if (card2 === 'ace') {
      card2 = 11;
    }
    var total = card1 + card2;
    players[i].handTotal = total;
    var hand1more = document.createTextNode(' for a total of: ' + players[i].handTotal);
    playerHand.appendChild(hand1more);
  }

  var allTotal = [];
  for (let t = 0; t < players.length; t++) {
    allTotal.push(players[t].handTotal);
  }
  var highest = Math.max(...allTotal);
  // console.log(highest);
  for (let w = 0; w < players.length; w++) {
    if (players[w].handTotal === highest) {
      var winner = players[w].player;
    }
  }
  var winningPlayer = document.createElement('h2');
  var winName = document.createTextNode('The winner is: ' + winner);
  winningPlayer.appendChild(winName);
  div.appendChild(winningPlayer);
}

var $button = document.querySelector('#play');
$button.addEventListener('click', play);
