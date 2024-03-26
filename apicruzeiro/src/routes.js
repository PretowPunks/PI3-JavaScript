const express = require('express')
const router = express.Router()

const CruzeiroController = require('./controllers/CruzeiroController')

router.get('/planos', CruzeiroController.buscartodos)

module.exports = router