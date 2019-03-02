import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import AutoComplete from './AutoComplete.jsx';


const StyledButtonSave = withStyles({
  root: {
    background: 'forestgreen',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 28,
    padding: '0 20px',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const styles = {
  form: {
    display: 'flex',
    // flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  card: {
    minWidth: 500,
  },
};

const SearchItem = ({
  classes,
  ingredients,
  addIngredient,
  getRecipes,
  handleSearchClose,
}) => {
  // const { classes } = this.props;
  return (
    <div
      className="search-list-item"
    >
      <table>
        <tbody>
          <tr>
            <td>
              <Card
                className={classes.card}
              >
                {/* <CardActionArea> */}
                  <CardMedia
                    className={classes.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    Search Ingredients
                    <AutoComplete ingredients={ingredients} addIngredient={addIngredient} getRecipes={getRecipes} handleSearchClose={handleSearchClose} />
                  </CardContent>
                {/* </CardActionArea> */}
                <CardActions>
                  {/* <Button className="search" variant="outlined" color="primary" type="button" onClick={() => getRecipes(selectedIngredients.join(', '))}>Search</Button> */}
                </CardActions>
              </Card>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default withStyles(styles)(SearchItem);
