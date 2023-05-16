let model = require("../model/model");

const getAllPokemons = (req, res) => {
  model.getAllPokemons((error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
};

const getPokemonById = (req, res) => {
  let title = req.params.title;
  model.getPokemonById(title, (error, result) => {
    if (!error) {
      res.json({ statusCode: 200, data: result, message: "success!" });
    } else {
      console.log(error);
    }
  });
};

const addPokemon = (req, res) => {
  let pokemon = req.body;
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    res.json({
      statusCode: 400,
      data: {},
      message: "Missing request body.",
    });
  } else {
    model.addPokemon(pokemon, (error, result) => {
      if (!error) {
        res.json({ statusCode: 200, data: result, message: "Added" });
      } else {
        console.log(error);
        res.json({ statusCode: 400, data: error, message: "Failed" });
      }
    });
  }
};

const updatePokemon = async (req, res) => {
  let pokemon = req.body;
  let title = req.params.name;
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    res.json({
      statusCode: 400,
      data: {},
      message: "Missing request body.",
    });
  } else {
    await model.updatePokemon(pokemon, title, (error, result) => {
      if (!error) {
        res.json({ statusCode: 200, data: result, message: "Updated" });
      } else {
        console.log(error);
        res.json({ statusCode: 400, data: error, message: "Failed" });
      }
    });
  }
};
const deletePokemon = (req, res) => {
  let requestBody = req.body;
  model.deletePokemon(requestBody, (error, result) => {
    if (error) {
      res.json({ statusCode: 400, message: error });
    } else {
      res.json({
        statusCode: 200,
        data: result,
        message: "Successfully removed",
      });
    }
  });
};
module.exports = {
  getAllPokemons,
  getPokemonById,
  addPokemon,
  updatePokemon,
  deletePokemon,
};
