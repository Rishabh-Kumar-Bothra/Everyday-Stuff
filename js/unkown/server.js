var express = require('express');
var bodyParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var session = require('express-session');
var app = express();

app.set('view engine','ejs');
//app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: "budhi bhai",
    resave: true,
    saveUninitialized: false
}));

const uri = "mongodb+srv://Budhiraja:9811809871@cluster0-apyn6.mongodb.net/test?retryWrites=true"

mongoClient.connect(uri,{ useNewUrlParser: true },(err,client)=>{
    if(err){
        console.log(err);
    }
    console.log("connected..");
    const collection = client.db("test").collection("devices");
    client.close();
})

app.get('/',(req,res)=>{
    //res.send("started again");
    res.render('home');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})

app.post('/signup',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

app.get('/login',(req,res)=>{
    res.render('login');
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

app.listen(8000,()=>{
    console.log("server started");
})

//mongodb+srv://Budhiraja:<PASSWORD>@cluster0-apyn6.mongodb.net/test?retryWrites=true