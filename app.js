const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Continents Highest Mountains REST API Router Example');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
