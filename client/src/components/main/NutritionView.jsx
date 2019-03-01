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
      <Paper style={{
        maxHeight: 500, overflow: 'auto', width: 560,
      }}
      >
        <style>{'table{border:0px solid black;}'}</style>
        <table>
          <tr>
            <b>Total Calories: </b>
          Did This Actually Change?
            <br />
            <style>{'table1{border:3px solid black; padding:1px}'}</style>
            <table1>
              <b>Fat: </b>
          Maybe where Fat Goes
              <br />
            </table1>
            <br />
            <style>{'table2{border:1px solid black;}'}</style>
            <table2>
              <b>Other Things I want Formatted Nicely </b>
          More and more and more
          and more and more
          and more and more
              <br />
            </table2>
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
          </tr>
        </table>
      </Paper>
    );
  }
}

export default Nutrition;
