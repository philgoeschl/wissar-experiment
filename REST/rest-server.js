
/* 
    Quelle:
    https://stackabuse.com/building-a-rest-api-with-node-and-express/
*/

const express = require('express');

var user = require("../user.json");

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json(user);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));