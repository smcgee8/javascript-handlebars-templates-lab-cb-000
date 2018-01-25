function init() {
  //put any page initialization/handlebars initialization here
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-template").innerHTML);
  loadRecipeForm();


}

function loadRecipeForm() {
  var newFormContents = {
    onsubmit: "createRecipe()",
    ingredients: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  };
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = recipeFormTemplate(newFormContents)
}

function createRecipe() {
  event.preventDefault();
  var name = document.getElementsByName("name")[0].value;
  var description = document.getElementsByName("description")[0].value;
  var ingredients = document.getElementsByName("ingredients");

  var recipeContents = {
    name: name,
    description: description,
    ingredients: []
  };

  var displayRecipeTemplate = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML = displayRecipeTemplate(recipeContents);
}

function displayEditForm() {
//Run this when edit recipe is clicked
//Render recipe-form-template with updateRecipe as the submit function
//Make sure the existing data shows up if it's in edit mode
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
