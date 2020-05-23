const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching
router.post('/home-testing/ethnicity-group-answer', function (req, res) {

  const ethnicityGroup = req.session.data['ethnicity-group']

  if (ethnicityGroup === 'asian') {
    res.redirect('/home-testing/ethnicity-group-asian')
  } else if (ethnicityGroup === 'black') {
    res.redirect('/home-testing/ethnicity-group-black')
  } else if (ethnicityGroup === 'mixed') {
    res.redirect('/home-testing/ethnicity-group-mixed')
  } else if (ethnicityGroup === 'white') {
    res.redirect('/home-testing/ethnicity-group-white')
  } else if (ethnicityGroup === 'other') {
    res.redirect('/home-testing/ethnicity-group-other')
  } else if (ethnicityGroup === 'prefer-not-to-say') {
    res.redirect('/home-testing/age')
  } else {
    res.redirect('/home-testing/ethnicity-group-error')
  }
})

router.post('/appointment/ethnicity-group-answer', function (req, res) {

  const ethnicityGroup = req.session.data['ethnicity-group']

  if (ethnicityGroup === 'asian') {
    res.redirect('/appointment/ethnicity-group-asian')
  } else if (ethnicityGroup === 'black') {
    res.redirect('/appointment/ethnicity-group-black')
  } else if (ethnicityGroup === 'mixed') {
    res.redirect('/appointment/ethnicity-group-mixed')
  } else if (ethnicityGroup === 'white') {
    res.redirect('/appointment/ethnicity-group-white')
  } else if (ethnicityGroup === 'other') {
    res.redirect('/appointment/ethnicity-group-other')
  } else if (ethnicityGroup === 'prefer-not-to-say') {
    res.redirect('/appointment/age')
  } else {
    res.redirect('/appointment/ethnicity-group-error')
  }
})


module.exports = router
