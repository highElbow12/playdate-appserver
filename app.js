const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello this is Playdate or Paydate or Suede running as a container!');
});

app.listen(PORT, () => {
  console.log(`Dating app listening on port ${PORT}`);
});
