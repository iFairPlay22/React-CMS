import React from 'react';
import PropTypes from 'prop-types'

class Grid extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
      return (
        <div className="Grid container">
          {this.props.children}
        </div>
      );
    }
}

Grid.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Grid;
