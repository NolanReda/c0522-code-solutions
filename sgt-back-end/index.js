const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
        select *
        from "grades"
  `;
  db.query(sql)
    .then(results => {
      const grades = results.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error has occured' });
    });
});

app.post('/api/grades/', (req, res) => {
  const entry = req.body;
  if (!entry.name || !entry.course) {
    res.status(400).json({ error: 'Please enter valid entry' });
  } else if (!Number.isInteger(Number(entry.score)) || entry.score <= 0) {
    res.status(400).json({ error: 'Please enter valid entry' });
  } else {
    const sql = `
        insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
        returning *
  `;
    const params = [entry.name, entry.course, entry.score];
    db.query(sql, params)
      .then(result => {
        res.status(201).json(entry);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      });
  }
});

app.put('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  const entry = req.body;
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (!entry.name || !entry.course) {
    res.status(400).json({ error: 'Please enter valid entry' });
  } else if (!Number.isInteger(Number(entry.score)) || entry.score <= 0) {
    res.status(400).json({ error: 'Please enter valid entry' });
  } else {
    const sql = `
    update "grades"
    set "name" = $1,
        "course" = $2,
        "score" = $3
        where "gradeId" = $4A
        returning *
  `;
    const params = [entry.name, entry.course, entry.score, id];
    db.query(sql, params)
      .then(result => {
        res.status(200).json(entry);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured' });
      });
  }
});

app.delete('/api/grades/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (!id) {
    res.status(404).json({ error: 'An unexpected error occured' });
    return;
  }
  const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;
  const params = [id];
  db.query(sql, params)
    .then(res.status(204).json({ success: 'deleted' }))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
