// Nutritional Information for the recipe

import React from 'react';
import {
  Paper, Card, withStyles, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Table,
} from '@material-ui/core';

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

const Nutrition = ({ savedRecipe, classes }) => (
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
          12g
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

export default withStyles(styles)(Nutrition);
