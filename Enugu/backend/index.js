// var http = require('http');

// //create server object
// http.createServer((req, res) => {
//     res.write("Hello World");
//     res.end();
// })
// .listen(8080);

// console.log("Server is running at port 8080")


const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config()

const app = express()

//localhost:5000
//route
app.use('/', (req, res) => {
    res.send("Hello World")
})

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})