const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  // All characters
  const characters = require(`../assets/json/characters.json`)
  res.status(200).json(characters)
})

router.get("/staff", (req, res) => {
  const staffCharacters = require(`../assets/json/staff/staff.json`)
  res.status(200).json(staffCharacters)
})

router.get("/students", (req, res) => {
  const studentsCharacters = require(`../assets/json/students.json`)
  res.status(200).json(studentsCharacters)
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  const characters = require(`../assets/json/id/${id}.json`)
  res.status(200).json(characters)
})

router.get("/houses/:house", (req, res) => {
  console.log(req.params)
  // Gryffindor - Hufflepuff - Ravenclaw - Slytherin - Unknown
  const { house } = req.params
  const houseCharacters = require(`../assets/json/houses/${house}.json`)
  res.status(200).json(houseCharacters)
})

module.exports = router
