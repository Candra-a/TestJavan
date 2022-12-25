const express = require('express')
const router = express.Router()
const familyRouter = require('./family')

router.use('/family', familyRouter)

module.exports = router