const express = require('express');
const app = express();
const { PORT } = require('./config');

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`));