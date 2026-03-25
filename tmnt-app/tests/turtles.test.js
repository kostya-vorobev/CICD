const { getWeapon } = require("../src/turtles");

test("Leonardo weapon", () => {
    expect(getWeapon("Leonardo")).toBe("Katana");
});

test("Unknown turtle", () => {
    expect(getWeapon("Splinter")).toBe("Unknown turtle");
});