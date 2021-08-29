const express = require('express');
const app = express();
app.use("*",(req,res,next)=>{
res.send("<h1>Hello World</h1>");
});
app.listen(8000,()=>{
    console.log('listening on port 8000');
});
    