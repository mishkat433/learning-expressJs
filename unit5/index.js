const express = require("express");
const app = express()
const PORT = 3000;

const myMiddlewire = (req,res,next)=>{
    console.log("i am middlewire");
    req.currentTime = new Date(Date.now())
    next()
}

app.get("/",myMiddlewire, (req,res)=>{
    console.log("hello"+ req.currentTime);
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})