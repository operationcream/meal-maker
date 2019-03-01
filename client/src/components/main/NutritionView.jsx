// Nutritional Information for the recipe

import React from 'react';
import Paper from '@material-ui/core/Paper';

class Nutrition extends React.Component {
  constructor(props) {
    super(props);
    const { recipe } = this.props;
    this.state = {
      currentVideo: recipe,
    };
  }

  render() {
    const { recipe } = this.props;
    return (
      <div className="selected-nutrition">
        <Paper style={{ maxHeight: 500, overflow: 'auto', width: 560 }}>
          <b>Total Calories: </b>
          This is where total calories go?
          <br />
          <b>Fat: </b>
          Maybe where Fat Goes
          <br />
          <br />
          <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more
          <br />
          <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more
           <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more
          <br />
          <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more
           <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more
          <br />
          <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more


        </Paper>

      </div>
    );
  }
}

export default Nutrition;
