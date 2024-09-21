const express  = require('express')
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000
app.get('/',function(req,res){
    console.log("Sending Request to the Server!")
    res.send('Server is Working')
})

app.listen(port)