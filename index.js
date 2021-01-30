const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());
const port = 8080;


app.get('/', (req, res) => {
    res.send(JSON.stringify('Test'));
})

app.listen(process.env.PORT || port, () => {
    console.log(`listening on ${port}`);
})