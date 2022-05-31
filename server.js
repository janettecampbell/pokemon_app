const express = require("express");
const pokemon = require("./models/pokemon");

const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemon App!");
});

app.get("/pokemon", (req, res) => {
  res.render("Index", { data: pokemon });
});

app.get("/pokemon/:id", (req, res) => {
  //   const result = pokemon.filter((pokemon) => pokemon.id === req.params.id);

  res.send(req.params.id);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
