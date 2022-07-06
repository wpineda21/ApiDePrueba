const mongoose = require("mongoose");

const CitaSchema=mongoose.Schema({

    medico:{
        type: String,
        required: true
    },
    incapacidad:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fecha:{
        type: String,
        required: true
    },
    tiempohospital:{
        type: Number,
        required: true
    },
    clinicahospital:{
        type: String,
        required: true
    },
    gastos:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Cita',CitaSchema);