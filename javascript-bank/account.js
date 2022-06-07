/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

// assign a new Transaction to a variable named newTransaction
// set the type as 'deposit'
// set the amount as the parameter for this function
// check to make sure the amount is a positive, whole number
// add the object to the transactions array in whichever account is being deposited to
// return a boolean to show if the deposite was successfully added to the transactions array

Account.prototype.deposit = function (amount) {
  var newTransaction = new Transaction();
  newTransaction.type = 'deposit';
  newTransaction.amount = amount;
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

// do the same thing for this one as deposit but use the name withdrawal as the type value

Account.prototype.withdraw = function (amount) {
  var newTransaction = new Transaction();
  newTransaction.type = 'withdrawal';
  newTransaction.amount = amount;
  if (amount > 0 && amount % 1 === 0) {
    this.transactions.push(newTransaction);
    return true;
  } else {
    return false;
  }
};

// create 2 counter variables to represent the deposits and withdrawals
// loop through the transactions array of the given account
// separate the amounts in each index depending on the type into the counter variables
// subtract the withdrawals variable from the deposits
// return that amount as the account balance

Account.prototype.getBalance = function () {
  var deposits = 0;
  var withdrawals = 0;
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      deposits += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      withdrawals += this.transactions[i].amount;
    }
  }
  var balance = deposits - withdrawals;
  return balance;
};
