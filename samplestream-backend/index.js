const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('SampleStream API is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
