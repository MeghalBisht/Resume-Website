const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path')
const router = require('./routes/message')
const { MONGOURI } = require('./config/keys')

app.use(express.json())
app.use('/',router)
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`${PORT} has started`);
})