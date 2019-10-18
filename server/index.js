const express = require('express');

const app = express();
const port = 4000;

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' });
});

module.exports = app;
// app.listen(port, () => console.log('Server Running at port: ', port));
