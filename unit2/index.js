const express = require("express");
const app = express();
const PORT = 3034;

// query parameter receive
//http://localhost:3034/?id=101&name=mishkat
app.get("/",(req,res)=>{
    // const id = req.query.id;
    // const name = req.query.name;
    const {id, name} = req.query;
    res.send(`Student id = ${id}, name = ${name}`)
})

// route parameter use
app.get("/userId/:id/userAge/:age", (req, res) => {
    const id= req.params.id;
    const age= req.params.age;
    res.send(`Student id = ${id}, age = ${age}`)
})

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
