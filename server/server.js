const express = require('express');
const app = express();
const port = 3010;

app.use(express.static('client/dist'));

// app.get('/:itemId', (req, res) => {
//   if (typeof req.params.itemId !== 'number') {
//     res.status(400);
//   } else if (req.params.itemdId > 100) {
//     res.status(400);
//   } else {
//     res.status(200);
//   }
// });

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});