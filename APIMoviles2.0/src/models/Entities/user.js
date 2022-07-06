const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const saltRounds=10;

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.pre('save',function(next){

    if (this.isNew|| this.isModified('password')){
        const document=this;
        bcrypt.hash(document.password,saltRounds,(err,hashedpassword)=> {
            if(err){
                next(err);
            }else{
                document.password = hashedpassword;
                next();
            }
        });
    }else{
        next();
    }
});

userSchema.methods.isCorrecPassword = function(password,callback){
    bcrypt.compare(password,this.password,function(err,same){
        if(err){
            callback(err);
        }else{
            callback(err,same);
        }
    });
} 



module.exports = mongoose.model('User',userSchema);