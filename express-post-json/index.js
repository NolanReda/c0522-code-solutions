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

app.use(express.json());

let nextId = 1;

app.post('/api/grades', (req, res) => {
  const newObj = req.body;
  const id = nextId++;
  newObj.id = id;
  grades[id] = newObj;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
