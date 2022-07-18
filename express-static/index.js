const express = require('express');
const app = express();
const path = require('path');

const fullPath = path.join(__dirname, 'public');

const staticShock = express.static(fullPath);

app.use(staticShock);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(fullPath);
});
