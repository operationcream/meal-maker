import React from 'react';
import Button from '@material-ui/core/Button';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    const { ingredients } = this.props;
    this.ingredients = ingredients;
    this.state = {
      suggestions: [],
      text: '',
      selectedIngredients: [],
    };
    this.onTextChange = this.onTextChange.bind(this);
    this.suggestionSelected = this.suggestionSelected.bind(this);
    this.addIngredient = this.addIngredient.bind(this);
    this.removeIngredient = this.removeIngredient.bind(this);
  }

  componentDidMount() {
    const { searchedIngredients } = this.props;
    console.log(searchedIngredients, 'searched ingredients component did mount');
  }

  onTextChange(e) {
    const { ingredients } = this.props;
    const { value } = e.target;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = ingredients.sort().filter(v => regex.test(v));
    }
    this.setState({ suggestions, text: value });
  }


  addIngredient(ingredient) {
    const { selectedIngredients } = this.state;
    selectedIngredients.push(ingredient);
    this.setState({
      selectedIngredients,
      text: '',
    });
  }

  removeIngredient(ingredient) {
    const { selectedIngredients } = this.state;
    const ingredientIndex = selectedIngredients.indexOf(ingredient.ingredient);
    if (ingredientIndex !== -1) {
      selectedIngredients.splice(ingredientIndex, 1);
    }
    this.setState({
      selectedIngredients,
      text: '',
    });
  }

  suggestionSelected(value) {
    this.setState({
      text: value,
      suggestions: [],
    });
    this.addIngredient(value);
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul className="auto-ulist"
      // style={{ position: 'absolute' }}
      >
        {suggestions.map(ingredient => (
          <li 
            className="auto-list" 
            onClick={() => this.suggestionSelected(ingredient)} 
            key={ingredient}>{ingredient}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { text, selectedIngredients } = this.state;
    const { getRecipes, handleSearchClose } = this.props;

    return (
      <div className="AutoCompleteComponent">
        <div className="auto-complete">
          <input value={text} onChange={this.onTextChange} type="text" />
          {this.renderSuggestions()}
        </div>
        <div>
          {selectedIngredients.map(ingredient => (
            <div key={ingredient}>
              {ingredient}
              {' '}
              {/* <div className="buttons"> */}
                <Button variant="outlined" type="button" onClick={() => this.removeIngredient({ingredient})}>remove</Button>
              {/* </div> */}
            </div>
          ))}
        </div>
        <div>
          <Button className="search" variant="outlined" color="primary" type="button" onClick={() => {
            getRecipes(selectedIngredients.join(', '));
            handleSearchClose();
          }}>Search</Button>
        </div>
      </div>
    );
  }
}

export default AutoComplete;
