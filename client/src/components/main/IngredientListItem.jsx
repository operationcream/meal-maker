import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const IngredientListItem = ({ ingredient, onClick, checked }) => (
  <div>
    <Checkbox
      // checked={checked}
      onClick={() => { onClick(ingredient); }}
      // value="checkedA"
      color="primary"
    />
    {ingredient.name}
  </div>
);
export default IngredientListItem;
