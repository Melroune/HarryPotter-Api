const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  // All spell
  const spell = fetch("../assets/json/spell/spell.json")
  spell.then(spell => res.status(200).json(spell))
  spell.catch(err => res.status(200).json(err))
})
// spell by id in progress
// router.get("/:id", (req, res) => {
//   const { id } = req.params
//   const spell = require(`../assets/json/spell/id/${id}.json`)
//   res.status(200).json(spell)
// })

module.exports = router
