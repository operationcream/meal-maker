import React from 'react';

const GroceryListItem = ({ groceryItem }) => (


  <table>
    <tr>
      <td>{groceryItem.amount.us.amount}</td>
      <td>{groceryItem.amount.us.unitLong}</td>
      <td>{groceryItem.name}</td>
    </tr>
  </table>
);


export default GroceryListItem;
