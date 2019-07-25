var recipes = {
  food: 'ingredients'
}
function updateObjectWithKeyAndValue(recipes, food, ingredients) {
  var newRecipe = Object.assign({}, recipes)
  newRecipe[food] = ingredients;
  return newRecipe;
}
function destructivelyUpdateObjectWithKeyAndValue(recipes,food, ingredients) {
  recipe[food] = ingredients;
  return recipe;
}