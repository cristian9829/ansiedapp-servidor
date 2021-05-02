const express = require("express");
const conectarDB = require('./config/db');
const cors = require("cors");

// crear el servidor
const app = express();


//Habilitar cors
app.use(cors());


//conectar a la BD
conectarDB();

// Habilitar express.json
app.use(express.json({extended: true}))

//puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/test', require('./routes/test'));



//arrancar la app
app.listen(PORT, () =>{
  console.log("El servidor esta funcionando " + PORT )
})
