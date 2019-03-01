// an item with
// a recipe name
// a percentage match
// ingredients
import React from 'react';
import { Typography } from '@material-ui/core';
import IngredientList from './IngredientList.jsx';


const SavedRecipeListItem = ({ savedRecipe, changeView, selectRecipe }) => (
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

            {/* <div className="cookTime">
            Cook Time:
              {' '}
              {savedRecipe.cookTime}
              {' '}
              minutes */}
            <IngredientList savedRecipe={savedRecipe.singleIngredient} />
            {/* </div> */}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);


export default SavedRecipeListItem;
