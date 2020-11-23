const knex = require("knex");
const config = require("./knexfile");
const env = process.env.NODE_ENV || "development";
const database = knex(config[env]);

module.exports = {
  getPlant,
  getPlantById,
  postPlant,
  updatePlant,
  deletePlant
}

//GET REQUESTS
function getPlant(db = database){
  return db("plants").select();
}

function getPlantById(id, db = database){
  return db("plants")
  .where("id", id)
  .first()
  .then((plant) => {
    plant.description = JSON.parse(plant.description);
    return plant;
  });
}

//POST REQUESTS
function postPlant(plant, db = database){
  console.log('db.js, line 31', plant)
  return db("plants").insert(plant)
}

//PATCH REQUESTS
function updatePlant(id, plant, db = database){
  return db("plants")
  .where("id", id)
  .update(plant)
  .then(() =>{
    return getPlantById(id)
  })
}

//DELTE REQUESTS
function deletePlant(id, db = database){
  return db("plants").where("id", id).delete();
}