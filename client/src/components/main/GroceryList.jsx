// a component with
// a list of recipe list items spaced
import React from 'react';
import {
  Paper, Card, withStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography,
} from '@material-ui/core';
import GroceryListItem from './GroceryListItem.jsx';

const styles = {
  card: {
    minWidth: 275,
    maxWidth: 300,
    raised: true,
    position: 'fixed',
    right: 125,
  },

};

const GroceryList = ({ savedGroceryList, classes }) => (

  <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        Grocery List
      </Typography>
      <Typography component="p">
        {savedGroceryList.map(groceryItem => (
          <GroceryListItem key={groceryItem.id} groceryItem={groceryItem} />
        ))}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Create Grocery List
      </Button>
    </CardActions>
  </Card>

  // <div>
  //   <h1>GROCERY STUFFFFF</h1>
  //   {/* <GroceryListItem /> */}
  //   {savedGroceryList.map(groceryItem => (
  //     <GroceryListItem key={groceryItem.id} groceryItem={groceryItem} />
  //   ))}
  // </div>

);

export default withStyles(styles)(GroceryList);
// export default GroceryList;
