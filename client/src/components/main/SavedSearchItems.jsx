import React from 'react';
import _ from 'lodash';
import SearchItem from './SearchItem.jsx';

const SavedSearchItems = ({ ingredients, getRecipes, searchedIngredients, changeView }) => {
  console.log(searchedIngredients, 'searched ingredients');
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <SearchItem
                changeView={changeView}
                ingredients={ingredients}
                getRecipes={getRecipes}
                searchedIngredients={searchedIngredients}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default SavedSearchItems;
