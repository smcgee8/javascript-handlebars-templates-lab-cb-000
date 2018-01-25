function init() {
  //put any page initialization/handlebars initialization here
  var blank_ingredients = {
    ingredients: [
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""},
      {name: ""}
    ]
  };
  var recipeFormTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  document.getElementsByTagName("main")[0].innerHTML += recipeFormTemplate(blank_ingredients)
  //need to register a few partials and things? 
}

function createRecipe() {

}

function displayEditForm() {
//Run this when edit recipe is clicked
//Render recipe-form-template with updateRecipe as the submit function
//Make sure the existing data shows up if it's in edit mode
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
