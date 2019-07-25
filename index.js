var recipes = {
  food: 'ingredients'
}
function updateObjectWithKeyAndValue(recipes, food, ingredients) {
  var newRecipe = Object.assign({}, recipes)
  newRecipe[food] = ingredients;
  return newRecipe;
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, food, ingredients) {
  recipes[food] = ingredients;
  return recipes;
}