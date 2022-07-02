const express = require('express');
const app = express();

app.use('/', (res, req) => {
  // eslint-disable-next-line no-console
  console.log(req.method);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server is listening on port 3000');
});
