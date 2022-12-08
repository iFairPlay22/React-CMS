import React from 'react';
import PropTypes from 'prop-types'

class Row extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
      return (
        <div className="Row row">
            {this.props.children}   
        </div>
      );
    }
}

Row.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default Row;
