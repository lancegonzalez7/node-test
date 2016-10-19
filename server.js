const express = require('./config/express.js');

const app = express();

app.listen(5000, () => {
  console.log('I am listening! On 5000.');
});
