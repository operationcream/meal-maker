import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const IngredientListItem = ({ ingredient, onClick, checked }) => (
  <div>
    <table>
      <tr>
        <td><Checkbox onClick={() => { onClick(ingredient); }} color="primary" /></td>
        <td>{ingredient.amount.us.amount}</td>
        <td>{ingredient.amount.us.unitLong}</td>
        <td>{ingredient.name}</td>
      </tr>
    </table>



    {/* <Checkbox
      // checked={checked}
      onClick={() => { onClick(ingredient); }}
      // value="checkedA"
      color="primary"
    />
    {ingredient.name} */}
  </div>
);
export default IngredientListItem;
