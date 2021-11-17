const express = require("express");

const app = express();

app.get("/about", function(req, res){
    res.send("Welcome to My page, My name is Gajanan")
});

app.get("/contact", function(req, res){
    res.send("Call me ")
});

app.get("/calculator", function(req, res){
    res.sendFile(__dirname+"/Mypage.html");
});

app.get("/mockd", function(req, res){
    res.sendFile(__dirname+"/mockd.json");
});

app.listen(3000, function(req, res){
    console.log("server is running");
});