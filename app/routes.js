const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Branching

router.post('/appointment/nhs-number-option-answer', function (req, res) {

  const nhsNumberOption = req.session.data['nhsNumberOption']

  if (nhsNumberOption === 'Yes') {
    res.redirect('/appointment/nhs-number')
  } else {
    res.redirect('/appointment/app-reference-option')
  }
})

router.post('/appointment/app-reference-option-answer', function (req, res) {

  const appReferenceOption = req.session.data['appReferenceOption']

  if (appReferenceOption === 'Yes') {
    res.redirect('/appointment/app-reference')
  } else {
    res.redirect('/appointment/check-answers')
  }
})

router.post('/appointment/household-member-nhs-number-option-answer', function (req, res) {

  const nhsNumberOption = req.session.data['hm-nhsNumberOption']

  if (nhsNumberOption === 'Yes') {
    res.redirect('/appointment/household-member-nhs-number')
  } else {
    res.redirect('/appointment/household-member-app-reference-option')
  }
})

router.post('/appointment/household-member-app-reference-option-answer', function (req, res) {

  const appReferenceOption = req.session.data['hm-appReferenceOption']

  if (appReferenceOption === 'Yes') {
    res.redirect('/appointment/household-member-app-reference')
  } else {
    res.redirect('/appointment/household-member-check-answers')
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
    res.redirect('/appointment/email-address')
  } else {
    res.redirect('/appointment/ethnicity-group-error')
  }
})

router.post('/appointment/household-member-ethnicity-group-answer', function (req, res) {

  const ethnicityGroup = req.session.data['ethnicity-group']

  if (ethnicityGroup === 'asian') {
    res.redirect('/appointment/household-member-ethnicity-group-asian')
  } else if (ethnicityGroup === 'black') {
    res.redirect('/appointment/household-member-ethnicity-group-black')
  } else if (ethnicityGroup === 'mixed') {
    res.redirect('/appointment/household-member-ethnicity-group-mixed')
  } else if (ethnicityGroup === 'white') {
    res.redirect('/appointment/household-member-ethnicity-group-white')
  } else if (ethnicityGroup === 'other') {
    res.redirect('/appointment/household-member-ethnicity-group-other')
  } else if (ethnicityGroup === 'prefer-not-to-say') {
    res.redirect('/appointment/household-member-email-address')
  } else {
    res.redirect('/appointment/household-member-ethnicity-group-error')
  }
})

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

router.post('/home-testing/add-test-kit-ethnicity-group-answer', function (req, res) {

  const ethnicityGroup = req.session.data['ethnicity-group']

  if (ethnicityGroup === 'asian') {
    res.redirect('/home-testing/add-test-kit-ethnicity-group-asian')
  } else if (ethnicityGroup === 'black') {
    res.redirect('/home-testing/add-test-kit-ethnicity-group-black')
  } else if (ethnicityGroup === 'mixed') {
    res.redirect('/home-testing/add-test-kit-ethnicity-group-mixed')
  } else if (ethnicityGroup === 'white') {
    res.redirect('/home-testing/add-test-kit-ethnicity-group-white')
  } else if (ethnicityGroup === 'other') {
    res.redirect('/home-testing/add-test-kit-ethnicity-group-other')
  } else if (ethnicityGroup === 'prefer-not-to-say') {
    res.redirect('/home-testing/add-test-kit-age')
  } else {
    res.redirect('/home-testing/add-test-kit-ethnicity-group-error')
  }
})


module.exports = router
