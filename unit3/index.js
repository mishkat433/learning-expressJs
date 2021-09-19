const express = require("express");
const app = express();
const PORT = 3002;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/register",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

app.post("/register", (req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`<h1>Your name is ${name} and age is ${age}</h1>`)
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`)
})