// const express = require("express");

// const app = express();

// app.get("/", (req, res)=>{
//     res.send("<h1>Home World</h1>")
// })

// app.get("/users", (req, res)=>{
//     res.send("<h1>Users</h1>");
// })

// app.listen(4000, () =>{
//     console.log(`🚀 Server runing on PORT 4000`)
// });

const express = require('express');

const app = express();

app.listen(8000, ()=>{
    console.log("🚀 Server to the moon");
})

app.get("/", (req, res)=>{
    res.send("<h1>Hey there 😅 </h1>");
})