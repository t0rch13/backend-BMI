const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const bmiRoutes = require('./routes/bmiRoutes');
app.use('/', bmiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
