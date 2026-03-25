
const express = require("express");
const { getAllTurtles, getWeapon } = require("./turtles");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("TMNT API is running");
});

app.get("/turtles", (req, res) => {
    res.json(getAllTurtles());
});

app.get("/turtles/:name", (req, res) => {
    const weapon = getWeapon(req.params.name);
    res.json({ weapon });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

console.log("test pipeline");