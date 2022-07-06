const express = require("express");
const router = express.Router();
const medicamentoSchema=require("../models/Entities/medicamentos");


//creando usuario
router.post('/medicamento', (req,res)=> {
    const medicamento = medicamentoSchema(req.body);
    medicamento.save().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});

//obtener todos los usuarios
router.get('/medicamento', (req,res)=> {
    medicamentoSchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});

//obtener usuario por id
router.get('/medicamento/:id', (req,res)=> {
    const{ id }=req.params;
    medicamentoSchema.findById(id).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


//Update A medicamento
router.put('/medicamento/:id', (req,res)=> {
    const{ id }=req.params;
    const{nombremedicamento,horamedicamento}=req.body
    medicamentoSchema.updateOne({_id:id},{$set: {nombremedicamento,horamedicamento}}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


//Eliminar Usuario
router.delete('/medicamento/:id', (req,res)=> {
    const{ id }=req.params;
    medicamentoSchema.deleteOne({_id:id}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});



module.exports =  router;

