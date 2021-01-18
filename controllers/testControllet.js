const Test = require('../models/Test');
const Usuario = require('../models/Usuario');
const { validationResult } = require('express-validator');


exports.crearTest = async (req, res) =>{

  //Revisar si hay errores
  const errores = validationResult(req);
  if(!errores.isEmpty()){
    return res.status(400).json({errores: errores.array()})
  }


  try {
    // Crear un nuevo test
    const test = new Test(req.body);
    test.save();

    //guardar el creador via JWT
    test.creador = req.usuario.id;

    //guardamos el proyecto
    res.json(test)


  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error")
  }
}


//Obtiene todos los test del usuario actual
exports.obtenerTest = async (req, res) =>{
  try {
    const test = await Test.find({creador: req.usuario.id}).sort({creado: -1});
    const usuario = await Usuario.findById(req.usuario.id)
    console.log(usuario)
    let dataResponse = {
      dataUsuario: usuario,
      dataTest: test
    }
    res.json({dataResponse})
  } catch (error) {
    console.log(error)
    res.status(500).send("Hubo un error")
  }
}