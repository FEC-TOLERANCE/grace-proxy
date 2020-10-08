const express = require('express');
const app = express();
const port = 3010;
const cors = require('cors');

app.use(express.static('client/dist'));

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});