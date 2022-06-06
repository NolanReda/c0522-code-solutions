/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age > 0) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH > 0) {
    return 'acidic';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'Invalid pH Level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'Yakko') {
    return "We're the Warner brothers!";
  } else if (name === 'Wakko') {
    return "We're the Warner brothers!";
  } else if (name === 'Dot') {
    return "I'm cute";
  } else {
    return 'Goodnight Everybody!';
  }
}
