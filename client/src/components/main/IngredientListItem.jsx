import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const state = {
  checkedA: true,
  checkedB: true,
  checkedF: true,
};
let handleChange = name => (event) => {
  this.setState({ [name]: event.target.checked });
};

handleChange = handleChange.bind(this);
const IngredientListItem = ({ ingredient }) => (
  <div>
    <Checkbox
      checked={state.checkedA}
      onChange={handleChange('checkedA')}
      value="checkedA"
      color="primary"
    />
    {ingredient.name}
  </div>
);
export default IngredientListItem;
