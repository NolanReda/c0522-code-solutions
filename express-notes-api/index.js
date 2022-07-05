const express = require('express');
const app = express();
const $json = require('./data.json');
// const fs = require('fs');

app.get('/api/notes', (req, res) => {
  const allNotes = [];
  for (const key in $json.notes) {
    allNotes.push($json.notes[key]);
  }
  res.json(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const key = req.params.id;
  if (isNaN(Number(req.params.id)) === true) {
    res.status(400).send({
      error: 'id but be a positive integer'
    });
  } else if ($json.notes[key]) {
    res.json($json.notes[key]);
  } else if (!$json.notes[key]) {
    res.status(404).send({
      error: `cannot find note with id ${req.params.id}`
    });
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const id = $json.nextId++;
  newNote.id = id;
  $json.notes[id] = newNote;
  res.status(201).send(newNote);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
