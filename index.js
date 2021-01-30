const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const questions = require('./questions')
const app = express()

app.use(bodyParser.json());
app.use(cors());
const port = 8080;

let question;
let answer;

app.get('/', (req, res) => {
    setQuestions();
    res.send(JSON.stringify(question));
})

app.post('/', (req, res) => {
    var userRes = req.body.key;
    if (userRes == answer)
        res.send(JSON.stringify("Correct"));
    else
        res.send(JSON.stringify("Wrong"));
    if (!req.body) {
        return res.status(400).send({
            message: 'Content can not be empty!'
        });
    }
})

app.listen(process.env.PORT || port, () => {
    console.log(`listening on ${port}`);
})

function setQuestions() {
    var data = questions.sendQuestion().split(":");
    question = data[0];
    answer = data[1];
}
