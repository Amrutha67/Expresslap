var mongoose=require('mongoose')
var lapSchema=new mongoose.Schema({

    name:{type:String,required:true}, 
    memory:{type:String,required:true},
    processor:{type:String,required:true},
    harddisk:{type:String,required:true}  
})
var lapmodel=mongoose.model('laps',lapSchema)
module.exports={lapmodel}

