// component with an input form, a + button and a submit button

import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import VideoPlayer from '../VideoPlayer.jsx';
import RecipeInstructions from '../login/RecipeInstructions.jsx';
import RecipeList from './RecipeList.jsx';
// import AutoComplete from './AutoComplete.jsx';
import SearchItem from './SearchItem.jsx';

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing.unit * 2,
    minWidth: 120,
  },
  // formControlLabel: {
  //   marginTop: theme.spacing.unit,
  // },
});

// eslint-disable-next-line react/prefer-stateless-function
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClickSearchOpen = this.handleClickSearchOpen.bind(this);
    this.handleSearchClose = this.handleSearchClose.bind(this);
  }


  handleClickSearchOpen() {
    this.setState({ open: true });
  }

  handleSearchClose() {
    this.setState({ open: false });
  }

  render() {
    const {
      classes,
      handleClickSearchOpen,
      handleSearchClose,
      recipeOfTheDay,
      recipes,
      getRecipes,
      ingredients,
      saveRecipe,
      saveDislikeRecipe, 
      selectRecipe, 
      changeView, 
      user 
    } = this.props;
    const {
      open,
    } = this.state;
    return (
      <div>
        <h2 className="Lobster">
          Welcome,
          {' '}
          { user }
        </h2>
        <Button variant="outlined" color="primary" onClick={this.handleClickSearchOpen}>
          Search Ingredients
        </Button>
        <Dialog
          open={open}
          onClose={handleSearchClose}
          aria-labelledby="form-dialog-title"
          maxWidth="lg"
        >
          <DialogTitle id="form-dialog-title">Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              What&apos;s in your fridge?
            </DialogContentText>
            {/* <AutoComplete ingredients={ingredients} addIngredient={this.addIngredient} getRecipes={getRecipes} /> */}
            <SearchItem ingredients={ingredients} addIngredient={this.addIngredient} getRecipes={getRecipes} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSearchClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        {/* <RecipeList recipes={recipes} saveRecipe={saveRecipe} saveDislikeRecipe={saveDislikeRecipe} selectRecipe={selectRecipe} changeView={changeView} /> */}


        <div className="test">
          <RecipeList recipes={recipes} saveRecipe={saveRecipe} saveDislikeRecipe={saveDislikeRecipe} selectRecipe={selectRecipe} changeView={changeView} />
        </div>
        <h3 id="recipeTitle">Recipe of the day</h3>
        <div className="recipe-of-the-day-container">
          <table>
            <tbody>
              <tr>
                <td className="vidPlayer"><VideoPlayer recipe={recipeOfTheDay} /></td>
                <td className="instructions"><RecipeInstructions recipe={recipeOfTheDay} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// export default Search;
export default withStyles(styles)(Search);
