import React, { useState } from "react";

function RecipeView({
  recipe: { name, cuisine, photo, ingredients, preparation },
  deleteRecipe,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td>
        <img src={photo}></img>
      </td>
      <td className="content_td">
        <p>{ingredients}</p>
      </td>
      <td className="content_td">
        <p>{preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
