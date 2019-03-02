// a drawer (with a saved recipes list component and a saved recipe list item component)
import React from 'react';
import SavedSearchItems from './SavedSearchItems.jsx';

const SavedSearches = ({ ingredients, getRecipes, savedSearches }) => {
  // make get request here for each search combo
  console.log(savedSearches, 'searches please work');
  return (
    <div className="saved-recipes-container">
      <h2 className="Lobster">Your Search History</h2>
      <div>
        <div className="search-list">
          {savedSearches.map((savedSearch) => {
            if (savedSearch.ingredients !== '') {
              return (
                <SavedSearchItems
                  key={savedSearch.id}
                  ingredients={ingredients}
                  searchedIngredients={savedSearch.ingredients}
                  getRecipes={getRecipes}
                />
              );
            }
          })
          }
        </div>
      </div>
    </div>
  );
};


export default SavedSearches;
