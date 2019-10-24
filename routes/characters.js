const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  // All characters
  const characters = require(`../assets/json/characters.json`)
  res.status(200).json(characters)
})

router.get("/staff", (req, res) => {
  const houseCharacters = require(`../assets/json/staff/staff.json`)
  res.status(200).json(houseCharacters)
})

router.get("/students", (req, res) => {
  const houseCharacters = require(`../assets/json/students/students.json`)
  res.status(200).json(houseCharacters)
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
router.get("/spell", (req, res) => {
  // All spell
  fetch(`../assets/json/spell/spell.json`)
    .then(
      spell => console.log("spell : ", spell) || res.status(200).json(spell)
    )
    .catch(
      err =>
        console.log("err =========== ", err) || res.send(200).res.json(spell)
    )
})

module.exports = router
