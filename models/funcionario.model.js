const mongoose = require('mongoose');
const Schema=mongoose.Schema;
let FuncionarioSchema=new Schema({
    nome:{type:String, required:true},
    funcao:{type:String, required:true},
    departamento:{type:String, required:true},
    email:{type:String, required:true},
    telefone:{type:String, required:true},
    foto:{type:String, required:true},
    curtir:{type:Number, required:true}
})
module.exports=mongoose.model('Funcionario', FuncionarioSchema)
