// a drawer (with a saved recipes list component and a saved recipe list item component)
import React from 'react';
import SavedRecipesList from './SavedRecipesList.jsx';
import GroceryList from './GroceryList.jsx';
import IngredientList from './IngredientList.jsx';


class SavedRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedGroceryList: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(ingredient) {
    const { savedGroceryList } = this.state;

    ingredient.isChecked = !ingredient.isChecked;// toggles true/false
    console.log(ingredient);
    
    if (ingredient.isChecked) { // if ingredient has been checked add to grocery list
      this.setState({
        savedGroceryList: savedGroceryList.concat([ingredient]),
      });
    } else if (!ingredient.isChecked) { // if ingredient has not been checked remove from grocery list
      this.setState({
        savedGroceryList: savedGroceryList.filter((grocery) => grocery.isChecked),
      });
      console.log(savedGroceryList);
    }
  }

  render() {
    const { checked, savedGroceryList } = this.state;
    const { savedRecipes, changeView, selectRecipe } = this.props;
    return (
      <div className="saved-recipes-container">
        <div className="Lobster"><h2>Your saved recipes</h2></div>
        <div>
          <SavedRecipesList
            onClick={this.onClick}
            savedRecipes={savedRecipes}
            changeView={changeView}
            selectRecipe={selectRecipe}
            checked={checked}
          />
        </div>
        <div>
          <GroceryList savedGroceryList={savedGroceryList} />

        </div>
      </div>
    );
  }
}
// const SavedRecipes = ({ savedRecipes, changeView, selectRecipe }) => (

//   <div className="saved-recipes-container">
//     <div className="Lobster"><h2>Your saved recipes</h2></div>
//     <div>
//       <SavedRecipesList savedRecipes={savedRecipes} changeView={changeView} selectRecipe={selectRecipe} />
//     </div>
//     <div>
//       <GroceryList />

//     </div>
//   </div>
// );


export default SavedRecipes;
