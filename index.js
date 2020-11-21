const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
let url='mongodb+srv://admin:abcd1234@cluster0.pikus.mongodb.net/Projeto4AVDNODEJS?retryWrites=true&w=majority';
let mongoDB=process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true,  useUnifiedTopology: true }); // CONECTAR-SE COM A BASE DE DADOS
mongoose.Promise=global.Promise;
let db=mongoose.connection;
const funcionario=require('./routes/funcionarios.route');
const dependente=require('./routes/dependente.route');
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); // É UTILIZADO PARA DECODIFICAR AS URL
app.use('/funcionario', funcionario);
app.use('/dependente', dependente);
app.listen(8082, function(){
    console.log('http://localhost:8082/');
});