const express = require('express')();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World'));
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
