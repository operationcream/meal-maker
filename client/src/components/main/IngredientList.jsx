import React from 'react';
import {
  Paper, Card, withStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography,
} from '@material-ui/core';
import IngredientListItem from './IngredientListItem.jsx';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};


const IngredientList = ({ savedRecipe, classes }) => (
  <Card className={classes.card}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Ingredients
        </Typography>
        <Typography component="p">
          {savedRecipe.map(ingredient => (
            <IngredientListItem key={ingredient.id} ingredient={ingredient} />
          ))}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Add to Grocery List!
      </Button>
    </CardActions>
  </Card>


  // <div>
  //   <h2>ingredient list</h2>
  //   <Card>
  //     {savedRecipe.map(ingredient => (
  //       <IngredientListItem key={ingredient.id} ingredient={ingredient} />
  //     ))}
  //   </Card>
  // </div>
);
// export default IngredientList;
export default withStyles(styles)(IngredientList);
