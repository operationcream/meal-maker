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

    // if ingredient has been checked add to grocery list
    if (ingredient.isChecked) {
      // grab the current groceryList
      const currentGroceryList = savedGroceryList.slice();

      // add new ingredient to list
      const newGroceryList = this.addIngredient(ingredient, currentGroceryList);

      // set state to new grocery list
      this.setState({
        savedGroceryList: newGroceryList,
      });

      // if ingredient has not been checked remove from grocery list
    } else if (!ingredient.isChecked) {
      const currentGroceryList = savedGroceryList.slice();

      const newGroceryList = this.removeIngredient(ingredient, currentGroceryList);

      this.setState({
        savedGroceryList: newGroceryList,
      });
    }
  }

  // eslint-disable-next-line class-methods-use-this
  addIngredient(newIngredient, groceryList) {
    let added = false;

    let newList = groceryList.reduce((list, ingredient) => {
      if (newIngredient.id === ingredient.id) {
        const newIngre = JSON.parse(JSON.stringify(newIngredient));
        newIngre.amount.us.amount = ingredient.amount.us.amount + newIngredient.amount.us.amount;
        added = true;
        list.push(newIngre);
      } else {
        list.push(ingredient);
      }
      return list;
    }, []);

    if (!added) {
      newList = newList.concat([newIngredient]);
    }

    return newList;
  }

  // eslint-disable-next-line class-methods-use-this
  removeIngredient(deleteIngredient, groceryList) {

    let newList = groceryList.reduce((list, ingredient) => {
      if (deleteIngredient.id === ingredient.id) {
        const newIngre = JSON.parse(JSON.stringify(deleteIngredient));
        newIngre.amount.us.amount = ingredient.amount.us.amount - deleteIngredient.amount.us.amount;
        if (newIngre.amount.us.amount > 0) {
          newIngre.isChecked = true;
        }
        list.push(newIngre);
      } else {
        list.push(ingredient);
      }
      return list;
    }, []);
    newList = newList.filter(grocery => grocery.isChecked);
    return newList;
  }

  render() {
    const { checked, savedGroceryList } = this.state;
    const { savedRecipes, changeView, selectRecipe } = this.props;
    return (
      <div className="saved-recipes-container">
        <div className="Lobster"><h2>Your saved recipes</h2></div>
        <div>
          <GroceryList savedGroceryList={savedGroceryList} />
          <SavedRecipesList
            onClick={this.onClick}
            savedRecipes={savedRecipes}
            changeView={changeView}
            selectRecipe={selectRecipe}
            checked={checked}
          />
        </div>
        <div />
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
