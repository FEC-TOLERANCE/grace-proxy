const express = require('express');
const app = express();
const port = 3010;

app.use('/:itemId', express.static('client/dist'));

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});