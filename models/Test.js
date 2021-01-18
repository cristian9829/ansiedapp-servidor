const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
  test:{
    type: Array,
    required: true
  },
  creador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario'
  },
  creado:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Test', TestSchema)