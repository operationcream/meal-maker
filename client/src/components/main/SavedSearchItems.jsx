import React from 'react';
import _ from 'lodash';
import SearchItem from './SearchItem.jsx';

const SavedSearchItems = ({ ingredients, getRecipes, searchedIngredients }) => {
  console.log(searchedIngredients, 'searched ingredients');
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <SearchItem ingredients={ingredients} getRecipes={getRecipes} searchedIngredients={searchedIngredients} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default SavedSearchItems;
