// Nutritional Information for the recipe

import React from 'react';
import {
  Card, withStyles, CardContent, Typography,
} from '@material-ui/core';
import Axios from 'axios';

const styles = {
  card: {
    minWidth: 500,
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


const Nutrition = ({ selectedRecipe, classes }) => {
  const ingredients = {};
  ingredients.name = selectedRecipe.singleIngredient[1].name;
  ingredients.amount = selectedRecipe.singleIngredient[1].amount.us.amount;
  ingredients.unit = selectedRecipe.singleIngredient[1].amount.us.unitShort;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <tr>
            <td>
            Total Calories:
            </td>
            <td>
              500
            </td>
          </tr>
        </Typography>
        <Typography variant="h6">
          <tr>
            <td>
            Protien:
            </td>
            <td />
            <td>
              {ingredients.amount}
            </td>
          </tr>
        </Typography>
        <Typography variant="h6">
          <tr>
            <td>
            Total Fat:
            </td>
            <td />
            <td>
           9g
            </td>
          </tr>
        </Typography>
        <Typography>
          <tr>
            <td />
            <td>
            Sat Fat:
            </td>
            <td />
            <td>
           2g
            </td>
          </tr>
        </Typography>
        <Typography variant="h6">
          <tr>
            <td>
            Carbs:
            </td>
            <td />
            <td>
            15g
            </td>
          </tr>
        </Typography>
        <Typography>
          <tr>
            <td />
            <td>
            Sugar:
            </td>
            <td />
            <td>
            5g
            </td>
          </tr>
        </Typography>
        <Typography>
          <tr>
            <td />
            <td>
            Fiber:
            </td>
            <td />
            <td>
            7g
            </td>
          </tr>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Nutrition);
