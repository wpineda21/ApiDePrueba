const express = require("express");
const router = express.Router();
const examenSchema=require("../models/Entities/examen");


//creando usuario
router.post('/examen', (req,res)=> {
    const examen = examenSchema(req.body);
    examen.save().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});

//obtener todos los usuarios
router.get('/examen', (req,res)=> {
    examenSchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});

//obtener usuario por id
router.get('/examen/:id', (req,res)=> {
    const{ id }=req.params;
    examenSchema.findById(id).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


//Update A examen
router.put('/examen/:id', (req,res)=> {
    const{ id }=req.params;
    const{nombreexamen,gastosexamen,descripcion}=req.body
    examenSchema.updateOne({_id:id},{$set: {nombreexamen,gastosexamen,descripcion}}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


//Eliminar Usuario
router.delete('/examen/:id', (req,res)=> {
    const{ id }=req.params;
    examenSchema.deleteOne({_id:id}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});



module.exports =  router;

