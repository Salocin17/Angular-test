const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.listen(9000, (error) => {
    if (error) console.log('Not started');
    else console.log('Started');
});

mongoose.connect("mongodb+srv://nikolaszarone:Salocinn-17@cluster0.b9lcpiq.mongodb.net/pokemons", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((error) => {
        console.log('Error connecting to the database', error);
    });
n  