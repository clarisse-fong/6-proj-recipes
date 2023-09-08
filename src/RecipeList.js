import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, setRecipes }) {
  const deleteRecipe = (indexToDelete) => {
    setRecipes(
      recipes.filter((recipe, index) => {
        return index !== indexToDelete;
      })
    );
  };

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipeObj, index) => {
            return (
              <RecipeView
                key={index}
                recipe={recipeObj}
                deleteRecipe={() => {
                  return deleteRecipe(index);
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
