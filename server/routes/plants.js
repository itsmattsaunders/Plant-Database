const express = require("express");
const db = require("../db");
const router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/", (req, res) => {
  db.getPlants()
    .then((plant) => {
      res.json(plant);
      console.log("It's working!")
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message:
          "This is embarrassing, but I just can't seem to find anything!",
      });
    });
});

router.post("/", (req, res) => {
  const plant = req.body;
  console.log('plants.js, line 23')
  db.postPlant(plant)
    .then((plant) => {
      console.log('plants.js, line 27')
      res.json(JSON.stringify(plant))
      console.log("It's working!")
    })
    .catch((err) => {
      console.log(err);
      res.json({ message: "Ugh.. you sure you wanted to post that?" });
    });
})

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  const plant = req.body;

  db.updatePlant(id, plant)
  .then((plant) => {
    res.json(JSON.stringify(plant))
    console.log("It's working!")
  })
  .catch((err) => {
    console.log(err)
    res.json({ message: "Sorry, we could fix that!" });
  })
})

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  db.deleteMenuItem(id)
    .then((comment) => {
      res.json(comment);
      console.log("It's working!")
    })
    .catch((err) => {
      console.log(err);
      res.json({
        message: "Sorry, we can't scrub that off your profile right now!",
      });
    });
});

module.exports = router;
