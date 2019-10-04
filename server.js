const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());

//Used to submit forms, not needed for SPA
// app.use(express.urlencoded());


app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

//Ensure that api routes are mounted before "catch all" route

//"catch all" route
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

// app.listen(port, () => console.log(`Server connected on port ${PORT}`));

// const dotenv = require('dotenv');
// dotenv.config();
// const PORT = process.env.PORT || 3000;
// app.get('/', (req, res) => res.send('Hello World'));


// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`)
// });
