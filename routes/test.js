const express = require('express');
const router = express.Router();
const testController = require('../controllers/testControllet');
const auth = require('../middleware/auth');
const { check } = require('express-validator');

// Crea test
// api/test

router.post('/',
  auth,
  [
    check('test', 'Las respuestas del test es obligatorio').not().isEmpty()
  ],
  testController.crearTest
)

// api/test
router.get('/',
  auth,
  testController.obtenerTest
)

module.exports = router;