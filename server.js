const app = require('express')();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World'));
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));