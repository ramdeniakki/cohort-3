const express = require('express')
const app = express();

function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next()
    }else{
        res.json({
            "msg":"Sorry you are not allowed to ride"
        })
    }
}

app.use(isOldEnoughMiddleware)
app.get('/ride1',function(req,res){
    res.json({
        "msg" : "  You can start the ride1"
    })
})

app.get('/ride2',function(req,res){
    res.json({
        "msg" : "  You can start the ride2"
    })
})
app.get('/ride3',function(req,res){
    res.json({
        "msg" : "  You can start the ride3"
    })
})

app.listen(3000);