let client = require("../dbconnection");
let dbcollection = client.db("test").collection("Pokemons"); //TODO can be better

function getPokemonById(req, callBack) {
  return dbcollection.find({ title: req }).toArray(callBack);
}

function getAllPokemons(callBack) {
  dbcollection.find({}).toArray(callBack);
}

function addPokemon(pokemon, callBack) {
  dbcollection.insertOne(pokemon, callBack);
}

async function updatePokemon(pokemon, name, callBack) {
  const options = { upsert: true };
  var query = { title: name };
  await dbcollection.updateOne(
    query,
    {
      $set: pokemon,
      callBack,
    },
    options
  );
}

const deletePokemon = (pokemon, callback) => {
  dbcollection.deleteOne(pokemon, callback);
};

module.exports = {
  getPokemonById,
  getAllPokemons,
  addPokemon,
  updatePokemon,
  deletePokemon,
};
