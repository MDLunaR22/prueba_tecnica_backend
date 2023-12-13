const {request, response} = require('express');
const Moneda = require('../models/moneda');

const getMoneda = async (req = request, res = response) => {
    const monedas = await Moneda.find();

    res.json({
        msg: 'Monedas',
        monedas,
    })
}

const getMonedaById = async (req = request, res = response) => {
    const {id} = req.params;

    const moneda = await Moneda.findById(id);

    res.json({
        msg: 'Mostrando moneda',
        moneda,
    })
}

const postMoneda = async (req = request, res = response) => {
    const {nombreMoneda, valor, fecha} = req.body;

    if(nombreMoneda == null || nombreMoneda == ""){
        return res.status(400).json({
            msg:'Nombre de la moneda requerido!',
        })
    }

    if(valor == null){
        return res.status(400).json({
            msg:'Valor de la moneda requerido!',
        })
    }

    if(fecha == null || fecha == ""){
        return res.status(400).json({
            msg:'Fecha de actualizacion del valor de moneda requerido!',
        })
    }

    const data = {
        nombreMoneda, valor, fecha
    }

    const nuevaMoneda = new Moneda(data);

    nuevaMoneda.save()

    res.json({
        msg: 'Agregada con exito',
        data
    })
}

const putMoneda = async (req = request, res = response) => {
    const {id} = req.params;
    const {nombreMoneda, valor, fecha} = req.body;

    const monedaActualizar = await Moneda.findByIdAndUpdate(id, {nombreMoneda, valor, fecha});

    res.json({
        msg: 'Moneda actualizada',
        monedaActualizar,
    })
}

const deleteMoneda = async (req = request, res = response) => {
    const {id} = req.params;

    const monedaEliminada = await Moneda.findByIdAndDelete(id);

    res.json({
        msg:'Moneda eliminada',
        monedaEliminada,
    })
}

module.exports = {
    getMoneda,
    getMonedaById,
    postMoneda,
    putMoneda,
    deleteMoneda
}