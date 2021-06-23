var express=require('express')
var bodyParser=require('body-parser')
var mongoose =require('mongoose')

var {regmodel}=require('./models/regmodel')
var{lapmodel}=require('./models/lapmodel')
var{regRouter}=require('./Controllers/regController')
var {lapRouter}=require('./Controllers/lapController')
mongoose.connect("mongodb+srv://amru78:@amru@cluster0.1mnsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})

var app=express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/register',regRouter)
app.use('/lap',lapRouter)

app.listen(process.env.PORT||3000,()=>{
    console.log("running")
})