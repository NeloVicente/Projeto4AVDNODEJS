const mongoose = require('mongoose');
const Schema=mongoose.Schema;
let DependenteSchema=new Schema({
    nome:{type:String, required:true},
    nascimento:{type:String, required:true},
    idfuncionario:{type:String, required:true},
    foto:{type:String, required:true},
    grauparentesco:{type:Number, required:true}
})

module.exports=mongoose.model('Dependente', DependenteSchema)