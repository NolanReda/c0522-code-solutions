let count = 3;

const timer = () => {
  console.log(count--);
  if (count === 0) {
    clearInterval(interval);
    setTimeout(() => console.log('Blastoff!'), 1000);
  }
  clearInterval();
};

const interval = setInterval(timer, 1000);
