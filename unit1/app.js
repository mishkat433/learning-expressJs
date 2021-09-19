const express = require("express")
const app = express();
const userRouter = require("./route/user.route")

app.use("/api/user",userRouter)

app.get("/register",(req,res)=>{
    res.statusCode = 200
    res.sendFile(__dirname+"/views/register.html")

    // res.status(200).json({
    //     message: "hello i am message",
    //     statusCode: 200,    
    // })
    // res.redirect("/login")
})
app.get("/login", (req, res) => {
    res.send("Hello i am login page")
})

app.get("/", (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname + "/views/home.html")

    // res.send("Hello i am home route")
})

app.use((req, res) => {
    res.send("404 !!! api not found")
})




module.exports= app