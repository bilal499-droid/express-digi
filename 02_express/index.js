require("dotenv").config();
console.log(process.env); // remove this after you've confirmed it is working
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

let teaData = [];
let nextId = 1;
//creating and adding the tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(200).send(newTea);
});
// sending whole data into frontend
app.get("/teas", (req, res) => {
  res.status(200).send(teaData);
});
//getting tea with specific id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404);
  }
  res.status(200).send(tea);
});
//updating the tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("tea not found");
  }
  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  const tea1 = tea.name;
  const tea2 = tea.price;
  res.sendStatus(200).send(tea1 + " " + tea2);
});
//deleting the tea
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("tea not found");
  }
  teaData.splice(index, 1);
  res.sendStatus(204).send("deleted");
});
app.listen(port, () => {
  console.log(`server is listening on port ${port}...`);
});
