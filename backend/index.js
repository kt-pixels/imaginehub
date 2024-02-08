const express = require('express')
const app = express();
require('./db/config')
const cors = require('cors')
const users = require('./db/users')

app.use(express.json())
app.use(cors())

app.post('/signup',async (req,res)=> {
    let user = new users(req.body)
    let result = await user.save();
    res.send(result)
});

app.post('/login',async (req, res)=> {
    if(req.body.email && req.body.password){
    let result = await users.findOne(req.body).select('-password')
    if(result){
        res.send(result);
    }else{
        res.send({result : "No result found"})
    }
    }else{
        res.send({result : "No result found"})
    }
})

app.listen(8000)