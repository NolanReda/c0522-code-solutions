const express = require('express');
const app = express();
const grades = {};

app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const key in grades) {
    allGrades.push(grades[key]);
  }
  res.json(allGrades);
});

express.json();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
