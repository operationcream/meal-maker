// a drawer (with a saved recipes list component and a saved recipe list item component)
import React from 'react';
import SavedSearchItems from './SavedSearchItems.jsx';

const SavedSearches = ({ ingredients, getRecipes }) => {
  return (
    <div className="saved-recipes-container">
      <h2 className="Lobster">Your Search History</h2>
      <div>
        <SavedSearchItems
          ingredients={ingredients}
          getRecipes={getRecipes}
        />
      </div>
    </div>
  );
};


export default SavedSearches;
