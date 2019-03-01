import React from 'react';
import _ from 'lodash';
import SearchItem from './SearchItem.jsx';

const RecipeListItem = ({ recipe, saveRecipe, saveDislikeRecipe, selectRecipe, changeView }) => {

  return (
    <div
      className="recipe-list-item"
    >
      <table>
        <tbody>
          <tr>
            <td>
              <SearchItem />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default RecipeListItem;
