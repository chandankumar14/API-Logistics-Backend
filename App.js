const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 5989;
const Router = require('../Back-end/Router/route')
const app = express();
app.use(bodyParser.json()); // apply body parser to parsee the in josn 

// apply cors pronblem------>

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
// nevigating every request on route folder
app.use('/',Router);


// here making connection to database---->
mongoose.connect( 'mongodb+srv://root:kumar@123@cluster0.xkrjd.mongodb.net/onlinefood?retryWrites=true&w=majority',
{ useNewUrlParser: true, useUnifiedTopology: true})
.then(
    app.listen(port,()=>{
        console.log("server is Running on port no "+" "+port)
    })
)
.catch( 
    err=>{
        console.log(err)
    }
)