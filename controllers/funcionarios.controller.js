let Funcionario = require('../models/funcionario.model');

exports.teste=function(req,res){
    res.send('Controller Funcionando');
};

exports.criar=function(req,res){
    let funcionario=new Funcionario({
        nome:req.body.nome,
        funcao:req.body.funcao,
        departamento:req.body.departamento,
        email:req.body.email,
        telefone:req.body.telefone,
        foto:req.body.foto,
        curtir:req.body.curtir
    });
    funcionario.save(function(erro){
        if(erro){
            return next(erro);
        }
        res.send('Registro Feito com Sucesso!');
    });
};

exports.listar=function(req,res){

    Funcionario.find({}, function(err, users) {
        if(err){
            return next(err);
        }
        res.send(users);
    });
    
};

exports.procurarUm=function(req,res){
    Funcionario.findById(req.params.id, function(err, result){
        if(err){
            return next(err);
        }
        res.send({
           "nome": result.nome,
           "departamento": result.departamento,
           "email": result.email,
           "telefone": result.telefone
        });
    });
    
};

exports.alterar=function(req,res){
    Funcionario.findByIdAndUpdate(req.params.id, {$set:req.body},function(err){
        if(err) return next(err);
        res.send('Funcionario Alterado');
    });
};

exports.deletar=function(req,res){
    Funcionario.findByIdAndDelete(req.params.id, function(err){
        if(err) return next(err);
        res.send('Funcionario Removido');
    });
};

exports.curtir=function(req,res){
    Funcionario.findByIdAndUpdate(req.params.id,{$inc:{curtir:1}}, function(err, result){
        if(err) return next(err);
        res.send('Curtir efetuado com sucesso');
    });
};

exports.descurtir=function(req,res){
    Funcionario.findByIdAndUpdate(req.params.id,{$inc:{curtir:-1}}, function(err, result){
        if(err) return next(err);
        res.send('Descurtir efetuado com sucesso');
    });
};