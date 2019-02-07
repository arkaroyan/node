const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.get('/api/courses',(req, res) => {
    res.send([1,2,3]);
});

app.get('/api/courses/:id',(req, res) => {
    req.params.id
    res.send(req.params.id);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to ${port}...`));