const db = require("./data/dbconfig.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes");
}

function getShoppingList(id) {
    return db("recipe_ingredients")
        .where({ id })
        .first();
}

function getInstructions(id) {
    return db("recipes")
        .select("recipes.instructions")
        .where("id", id);
}