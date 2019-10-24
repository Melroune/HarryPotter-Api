const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  // All spell
  require("../assets/json/spell/spell.json")
    .then(spell => res.status(200).json(spell))
    .catch(err => console.log(err))
})
// spell by id in progress
// router.get("/:id", (req, res) => {
//   const { id } = req.params
//   const spell = require(`../assets/json/spell/id/${id}.json`)
//   res.status(200).json(spell)
// })

module.exports = router
