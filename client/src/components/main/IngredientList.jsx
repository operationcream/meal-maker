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


const IngredientList = ({ savedRecipe, classes, onClick, checked }) => (
  <Card className={classes.card}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
          Ingredients
      </Typography>
      <Typography component="p">
        {savedRecipe.map(ingredient => (
          <IngredientListItem 
          key={ingredient.id} 
          ingredient={ingredient} 
          onClick={onClick}
          checked={checked}
          />
        ))}
      </Typography>
    </CardContent>
  </Card>
);
// export default IngredientList;
export default withStyles(styles)(IngredientList);
