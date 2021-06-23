var express=require('express')
var bodyParser=require('express')
var mongoose=require('mongoose')

var {lapmodel}=require('../models/lapmodel')
var lapRouter=express.Router()

 lapRouter.use(bodyParser.urlencoded({ extended: false }))
 lapRouter.use(bodyParser.json())

 lapRouter.get('/abc',(req,res)=>{
     res.send("lap details")
 })
 lapRouter.get('/viewall',async(req,res)=>{
     try{
         var result=await lapmodel.find()
         res.json(result)
     }
     catch(error){
         res.send(error)
     }
 })
 lapRouter.post('/lapdetails',(req,res)=>{
     var lapObject=new lapmodel(req.body);
     lapObject.save()
     res.json(lapObject)
 })
 lapRouter.post('/search',async(req,res)=>{
     try{
         var result=await lapmodel.find(req.body)
         res.json(result)
     }
     catch(error){
         res.json({"status":error})
     }
 })

lapRouter.post('/edit',async(req,res)=>{
    try{
        var result=await lapmodel.findByIdAndUpdate({"_id":req.body._id},req.body)
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})
lapRouter.post('/delete',async(req,res)=>{
    try{
        var result=await lapmodel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":error})     
    }    
})
module.exports={lapRouter}