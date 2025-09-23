import express from 'express';

const app=express();

app.get('/api/notes',(req,res)=>{
    res.status(201).send("Hello from backend and front");
    console.log("Testing the API");
});


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});