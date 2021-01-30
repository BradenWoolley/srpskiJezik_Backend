const express = require('express')
const cors = require('cors')
const bodyParser = require ('body-parser')
const app = express()

app.use(bodyParser.json());
app.use(cors());
const port = 8080;

app.get('/', (req, res) => {
    res.send(JSON.stringify('Server is connected'));
})

app.post('/', (req, res) => {
    console.log(req.body);
    if (!req.body) {
        return res.status(400).send({
            message: 'Content can not be empty!'
        });
    }
});

app.listen(process.env.PORT || port, () => {
    console.log(`listening on ${port}`);
})
