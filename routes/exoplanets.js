const express = require('express')
const router = express.Router()

const Exoplanet = require('../models/Exoplanet.js')
const { uppercase } = require('../utils/uppercase')
const { character } = require('../utils/character')

/* GET exoplanets index. */
router.get('/', (req, res, next) => {
    res.render('exoplanets/index', { exoplanetsTable: Exoplanet.list() })
})

/* POST add exoplanet. */
router.post('/add', (req, res, next) => {
    console.log('POST ADD EXOPLANET')
    const isUpperCase = uppercase(req.body.uniqueNameExoplanet)
    const isSpecialChar = character(req.body.uniqueNameExoplanet)

    if (isUpperCase && isSpecialChar) {
        Exoplanet.save({
            uniqueName: req.body.uniqueNameExoplanet,
            hClass: req.body.hClassExoplanet,
            discoveryYear: req.body.discoveryYearExoplanet,
        })
    } else {
        let error = ''
        if (!isSpecialChar) {
            error =
                '- Error ! There is a special character entered, only - and . are accepted !'
        }
        if (!isUpperCase) {
            error = '- The characters must be in capital letters, '
        }

        res.render('exoplanets', {
            exoplanetsTable: Exoplanet.list(),
            errors: error,
        })
        return
    }
    error = null
    res.redirect('/exoplanets')
})

/* GET search exoplanet. */
router.get('/search', (req, res, next) => {
    let exoplanetsTable = null
    let min3Char = false
    console.log('GET SEARCH EXOPLANET')
    if (req.query.uniqueNameExoplanet.length >= 3) {
        min3Char = true
        exoplanetsTable = Exoplanet.search(req.query.uniqueNameExoplanet)
    }
    res.render('exoplanets/index', {
        exoplanetsTable,
        min3Char,
    })
})

module.exports = router
