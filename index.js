import express from "express";
import connectDb from "./db.js";
const app = express();

connectDb().then(()=>{
app.listen(8000,()=>{
    console.log("Server Running")
})
})


import noteRoute from "./routes/note.route.js";
app.use('/note',noteRoute)