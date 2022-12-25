const express = require('express')
const router = express.Router()
const familyController = require('../controllers/family')

router.get('/', familyController.showFamily)
router.get('/price/:id', familyController.assetsPriceFamily)
router.post('/', familyController.addFamily)
router.put('/:id', familyController.updateFamily)
router.delete('/:id', familyController.deleteFamily)
router.delete('/', familyController.bulkDeleteFamily)

module.exports = router