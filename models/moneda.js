const {Schema, model} = require('mongoose');

const MonedaSchema = Schema({
    nombreMoneda:{
        type: String,
        required: true,
    }, 
    valor: {
        type: Number,
        required: true,
    },
    fecha:{
        type: Schema.Types.Date,
        required: true
    }
})

module.exports = model("Moneda", MonedaSchema);