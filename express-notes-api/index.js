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
  // eslint-disable-next-line no-console
  console.log(typeof Number(req.params.id));
  const key = req.params.id;
  if ($json.notes[key]) {
    res.json($json.notes[key]);
  } else {
    res.status(404).send(`"error": "cannot find note with id ${req.params.id}"`);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
