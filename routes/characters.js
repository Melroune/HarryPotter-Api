const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  const { id } = req.params
  const characters = require(`../assets/json/characters.json`)
  res.status(200).json(characters)
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  const characters = require(`../assets/json/id/${id}.json`)
  res.status(200).json(characters)
})

// router.get("/house/:")

module.exports = router
