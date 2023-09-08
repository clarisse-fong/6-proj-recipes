import React, { useState } from "react";

function RecipeCreate({ recipes, setRecipes }) {
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const submitChange = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData(initialFormData);
  };

  return (
    <form name="create" onSubmit={submitChange}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name}
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input
                  type="text"
                  id="cuisine"
                  name="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine}
                />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  placeholder="URL"
                  onChange={handleChange}
                  value={formData.photo}
                />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  name="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                ></textarea>
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea
                  id="preparation"
                  name="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                ></textarea>
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
