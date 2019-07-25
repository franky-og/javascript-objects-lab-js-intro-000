var recipes = {
  food: 'ingredients'
}
function updateObjectWithKeyAndValue(recipes, food, ingredients) {
  var newRecipe = Object.assign({}, recipes)
  newRecipe[food] = ingredients;
  
}