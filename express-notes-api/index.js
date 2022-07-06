const express = require('express');
const app = express();
const $json = require('./data.json');
const fs = require('fs');

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
      error: 'id must be a positive integer'
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
  if (!req.body.content) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else if (req.body.content) {
    newNote.id = id;
    $json.notes[id] = newNote;
    fs.writeFile('./data.json', JSON.stringify($json, null, 2), 'utf-8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500).send({
          error: 'An unexpected error occurred'
        });
      } else {
        res.status(204).send(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const key = req.params.id;
  if (isNaN(Number(req.params.id)) === true) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else if ($json.notes[key]) {
    delete $json.notes[key];
    fs.writeFile('./data.json', JSON.stringify($json, null, 2), 'utf-8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500).send({
          error: 'An unexpected error occurred'
        });
      } else {
        res.status(204).send();
      }
    });
  } else if (!$json.notes[key]) {
    res.status(404).send({
      error: `cannot find note with id ${req.params.id}`
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const key = req.params.id;
  const editNote = req.body.content;
  if (isNaN(Number(req.params.id)) === true) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else if (!req.body.content) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else if (req.body.content) {
    $json.notes[key].content = editNote;
    fs.writeFile('./data.json', JSON.stringify($json, null, 2), 'utf-8', err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.status(500).send({
          error: 'An unexpected error occurred'
        });
      } else {
        res.status(204).send(editNote);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
