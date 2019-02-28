// Nutritional Information for the recipe

import React from 'react';

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
      <div className="selected-nutrition">Nutrition Information Goes Here</div>
    );
  }
}

export default Nutrition;
