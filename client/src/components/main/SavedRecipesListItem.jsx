// an item with
// a recipe name
// a percentage match
// ingredients
import React from 'react';
import { Typography } from '@material-ui/core';
import IngredientList from './IngredientList.jsx';


const SavedRecipeListItem = ({ savedRecipe, changeView, selectRecipe, onClick, checked }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td>
            <img src={savedRecipe.image} alt="" />
          </td>
          <td>
            <div
              className="name"
              onClick={() => {
                selectRecipe(savedRecipe);
                changeView('recipe');
              }}
              role="presentation"
            >
              <Typography gutterBottom variant="h5" component="h2">
                {savedRecipe.name}
              </Typography>
            </div>
            <Typography gutterBottom variant="subtitle1" component="h4">
            Cook Time:
              {' '}
              {savedRecipe.cookTime}
              {' '}
            minutes
            </Typography>
            <IngredientList
              savedRecipe={savedRecipe.singleIngredient}
              onClick={onClick}
              checked={checked}
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);


export default SavedRecipeListItem;
