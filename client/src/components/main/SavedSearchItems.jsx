import React from 'react';
import _ from 'lodash';
import SearchItem from './SearchItem.jsx';

const RecipeListItem = ({ ingredients, getRecipes }) => {

  return (
    <div
      className="recipe-list-item"
    >
      <table>
        <tbody>
          <tr>
            <td>
              <SearchItem ingredients={ingredients} getRecipes={getRecipes} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default RecipeListItem;
