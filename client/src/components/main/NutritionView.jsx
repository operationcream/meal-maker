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


const Nutrition = ({ nutrition, classes }) => {
  const ing = {};
  ing.cal = 0;
  ing.pro = 0;
  ing.fat = 0;
  ing.car = 0;
  ing.sat = 0;
  ing.sug = 0;
  // Loop over nutrition array
  nutrition.forEach((ingredient) => {
    // Loop over inner array
    ingredient.forEach((nutrient) => {
      // See what the nutrients are
      if (nutrient.title === 'Calories') {
        ing.cal += nutrient.amount;
      }
      if (nutrient.title === 'Protein') {
        ing.pro += nutrient.amount;
      }
      if (nutrient.title === 'Fat') {
        ing.fat += nutrient.amount;
      }
      if (nutrient.title === 'Saturated Fat') {
        ing.sat += nutrient.amount;
      }
      if (nutrient.title === 'Carbohydrates') {
        ing.car += nutrient.amount;
      }
      if (nutrient.title === 'Sugar') {
        ing.sug += nutrient.amount;
      }
    });
  });

  ing.cal = Math.round(ing.cal);
  ing.pro = Math.round(ing.pro);
  ing.fat = Math.round(ing.fat);
  ing.sat = Math.round(ing.sat);
  ing.car = Math.round(ing.car);
  ing.sug = Math.round(ing.sug);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          <tr>
            <td>
            Total Calories:
            </td>
            <td>
              {ing.cal}
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
              {ing.pro}
              g
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
              {ing.fat}
            g
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
              {ing.sat}
            g
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
              {ing.car}
            g
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
              {ing.sug}
            g
            </td>
          </tr>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Nutrition);
