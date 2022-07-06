const express = require("express");
const router = express.Router();
const userSchema=require("../models/Entities/user");


//creando usuario
router.post('/users/register', (req,res)=> {
    const user = userSchema(req.body);
    user.save().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});

//Authenticando
router.post('/users/login', (req,res)=> {
    const {username,password} = (req.body);

    userSchema.findOne({username},(err,user)=>{
        if (err) {  
            console.log('errror con la autenticacion');
        } else if (!user){
            console.log('usuario no existe');
        }else{
            user.isCorrecPassword(password,(err,result)=>{
                if (err) {
                    console.log('errrrrrrrrrror')
                } else if(result){
                    console.log('Inicio de Sesion Exitoso')
                }else {
                    console.log('Contraseña Incorrecta');
                }
            })
        }
    })

});


//obtener todos los usuarios
router.get('/users', (req,res)=> {
    userSchema.find().then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});

//obtener usuario por id
router.get('/users/:id', (req,res)=> {
    const{ id }=req.params;
    userSchema.findById(id).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


//Update A user
router.put('/users/:id', (req,res)=> {
    const{ id }=req.params;
    const{username,email,name,lastname,password}=req.body
    userSchema.updateOne({_id:id},{$set: {username,email,name,lastname,password}}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});


//Eliminar Usuario
router.delete('/users/:id', (req,res)=> {
    const{ id }=req.params;
    userSchema.deleteOne({_id:id}).then((data)=>res.json(data)).catch((error)=>res.json({message:error}));
});





module.exports =  router;

