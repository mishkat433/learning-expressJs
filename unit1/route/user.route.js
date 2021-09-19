const express = require("express");
const route = express.Router()


route.get("/about", (req, res) => {
    res.send("Hello i am about route")
    res.end()
})
route.get("/contact", (req, res) => {
    res.send("Hello i am contact route")
    res.end()
})
route.get("/register", (req, res) => {
    res.send("Hello i am register route")
    res.end()
})

module.exports= route;