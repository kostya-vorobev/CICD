const turtles = {
    Leonardo: "Katana",
    Raphael: "Sai",
    Donatello: "Bo",
    Michelangelo: "Nunchaku"
};

function getAllTurtles() {
    return turtles;
}

function getWeapon(name) {
    return turtles[name] || "Unknown turtle";
}

module.exports = { getAllTurtles, getWeapon };