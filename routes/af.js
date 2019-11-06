const express = require("express")

const router = express.Router()

router.get("/anxiete", (req, res) => {
  // All characters
  const characters = require(`../assets/json/AfAnxiete.json`)
  res.status(200).json(characters)
})

router.get("/confiance", (req, res) => {
  const staffCharacters = require(`../assets/json/AfConfiance.json`)
  res.status(200).json(staffCharacters)
})
router.get("/echec", (req, res) => {
  const staffCharacters = require(`../assets/json/AfEchec.json`)
  res.status(200).json(staffCharacters)
})
//
router.get("/pessimisme", (req, res) => {
  const staffCharacters = require(`../assets/json/AFPessimisme.json`)
  res.status(200).json(staffCharacters)
})
router.get("/procrastination", (req, res) => {
  const staffCharacters = require(`../assets/json/AfProcrastination.json`)
  res.status(200).json(staffCharacters)
})
router.get("/timidite", (req, res) => {
  const staffCharacters = require(`../assets/json/AfTimidite.json`)
  res.status(200).json(staffCharacters)
})

module.exports = router
