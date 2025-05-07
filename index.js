const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`DATABASE_URL is: ${process.env.DATABASE_URL}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

