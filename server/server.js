const express = require('express');
const path = require('path');
const route = require('./router/apiroute')

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '/dist')))

app.use('/api', route)

app.listen(3000, (req, res) => {
    console.log('Server running at port 3000');
})