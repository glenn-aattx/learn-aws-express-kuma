const express = require('express');

const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  res.send('Hello, kuma!');
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
