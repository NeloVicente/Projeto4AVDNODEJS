let Dependente = require('../models/dependente.model');

exports.teste=function(req,res){
    res.send('Controller Dependente');
};

exports.criar=function(req,res){
    let dependente=new Dependente({
        nome:req.body.nome,
        nascimento:req.body.nascimento,
        idfuncionario:req.body.idfuncionario,
        foto:req.body.foto,
        grauparentesco:req.body.grauparentesco,
        
    });
    dependente.save(function(erro){
        if(erro){
            return next(erro);
        }
        res.send('Registro Feito com Sucesso!');
    });
};

exports.listar=function(req,res){

    Dependente.find({}, function(err, users) {
        if(err){
            return next(err);
        }
        res.send(users);
    });
    
};

exports.procurarUm=function(req,res){
    Dependente.findById(req.params.id, function(err, result){
        if(err){
            return next(err);
        }
        res.send(result);
    });
    
};

exports.alterar=function(req,res){
    Dependente.findByIdAndUpdate(req.params.id, {$set:req.body},function(err){
        if(err) return next(err);
        res.send('Dependente Alterado');
    });
};

exports.deletar=function(req,res){
    Dependente.findByIdAndDelete(req.params.id, function(err){
        if(err) return next(err);
        res.send('Dependente Removido');
    });
};

exports.listarDependentes=function(req,res){
    Dependente.find({idfuncionario:req.params.id}, function(err, result){
        if(err){
            return next(err);
        }
        let response=new Array();
        for(let item of result){
            response.push({
                "nome": item.nome,
                "nascimento": item.nascimento,
                "grauparentesco": item.grauparentesco,
                "foto": item.foto
             });
        }
        res.send(response);
    });
    
};
