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

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleSearchOpen = this.handleSearchOpen.bind(this);
    this.handleSearchClose = this.handleSearchClose.bind(this);
  }


  handleSearchOpen() {
    this.setState({ open: true });
  }

  handleSearchClose() {
    this.setState({ open: false });
  }

  render() {
    const {
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
        <Button variant="outlined" color="primary" onClick={this.handleSearchOpen}>
          Search Ingredients
        </Button>
        <Dialog
          open={open}
          onClose={this.handleSearchClose}
          aria-labelledby="form-dialog-title"
          maxWidth="lg"
        >
          <DialogTitle id="form-dialog-title">Search</DialogTitle>
          <DialogContent>
            <DialogContentText>
              What&apos;s in your fridge?
            </DialogContentText>
            <SearchItem ingredients={ingredients} addIngredient={this.addIngredient} getRecipes={getRecipes} handleSearchClose={this.handleSearchClose} changeView={changeView} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleSearchClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <div>
          <RecipeList recipes={recipes} saveRecipe={saveRecipe} saveDislikeRecipe={saveDislikeRecipe} selectRecipe={selectRecipe} changeView={changeView} />
        </div>


        <div className="test">
          {/* <RecipeList recipes={recipes} saveRecipe={saveRecipe} saveDislikeRecipe={saveDislikeRecipe} selectRecipe={selectRecipe} changeView={changeView} /> */}
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
