exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          name: "toast",
          instructions: "put one piece of bread in toaster, wait until done"
        },
        {
          name: "scrambled eggs",
          instructions: "cook two or more eggs in skillet over medium heat"
        },
        {
          name: "cereal",
          instructions: "place cereal in bowl and cover with milk"
        }
      ]);
    });
};
