const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){

    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body){
        console.log(response);
    })
    
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
})