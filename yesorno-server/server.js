const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.post('/generate-answer', (req, res) => {
  const answer = Math.random() < 0.5 ? 'yes' : 'no';
  res.json({ answer });
});


const PORT = process.env.VCLOUD_PORT || process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));