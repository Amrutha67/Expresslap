var express=require('express')
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var {regmodel}=require('../models/regmodel')

var regRouter=express.Router()
 regRouter.use(bodyParser.urlencoded({ extended: false }))
 regRouter.use(bodyParser.json()) 

 regRouter.get('/read',(req,res)=>{
     res.send("reg details")
 })
 regRouter.get('/view',async(req,res)=>{
     try{
         var result=await regmodel.find()
         res.json(result)
     }
     catch(error){
         res.send(result)
     }
 })
 regRouter.post('/details',(req,res)=>{
     var regObject=new regmodel(req.body)
     regObject.save()
     res.json(regObject)
 })
 regRouter.post('/search',async(req,res)=>{
     try{
         var result=await regmodel.find(req.body)
         res.json(result)
     }
     catch(error){
         res.json({"status":error})
     }
 })
 regRouter.post('/edit',async(req,res)=>{
     try{
         var result=await regmodel.findOneAndUpdate({"_id":req.body._id},req.body)
         res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
 })
regRouter.post('/delete',async(req,res)=>{
    try{
        var result=await regmodel.findByIdAndDelete({"_id":req.body._id})
        res.json(result)
    }
    catch(error){
        res.json({"status":error})
    }
})
module.exports={regRouter}