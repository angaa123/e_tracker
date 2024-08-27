//file sestem setup
const fs = require("fs");
const cors = require("cors");
//server setpu
const express = require("express"); //import express
const app = express(); //start app

///

app.use(cors());

///
const port = 7000; //port
app.listen(port, () => console.log("Server is running on localhost:7000")); //listen and sart server
app.use(express.json()); //middleware json --> object
app.get("/", (req, res) => {
	res.send("Hello World");
}); //get request
