var mongoose=require('mongoose')

var regSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true}
})
var regmodel=mongoose.model('regs',regSchema)
module.exports={regmodel}