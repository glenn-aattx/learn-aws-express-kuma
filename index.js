const express = require('express');

const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello, kuma!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
