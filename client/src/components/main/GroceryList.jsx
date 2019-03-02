// a component with
// a list of recipe list items spaced
import React from 'react';
import GroceryListItem from './GroceryListItem.jsx';

const GroceryList = ({ savedGroceryList }) => (

  <div>
    <h1>GROCERY STUFFFFF</h1>
    {/* <GroceryListItem /> */}
    {savedGroceryList.map(groceryItem => (
      <GroceryListItem key={groceryItem.id} groceryItem={groceryItem} />
    ))}
  </div>

);


export default GroceryList;
