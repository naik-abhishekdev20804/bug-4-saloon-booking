const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'GlamBook frontend runs standalone; this server is optional.'
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} (no database).`);
});
