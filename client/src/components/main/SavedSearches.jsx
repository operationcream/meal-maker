// a drawer (with a saved recipes list component and a saved recipe list item component)
import React from 'react';
import SearchItem from './SearchItem.jsx';


// const SavedSearches = ({ savedRecipes, changeView, selectRecipe }) => (
const SavedSearches = () => {
  return (
    <div className="saved-recipes-container">
      <h1>Your Search History</h1>
      <div>
        SAVED SEARCH CARDS HERE
        {/* <SearchItem ingredients={ingredients} addIngredient={this.addIngredient} getRecipes={getRecipes} /> */}
      </div>
    </div>
  );
};


export default SavedSearches;
