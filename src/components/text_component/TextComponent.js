import React from 'react';
import PropTypes from 'prop-types'

class TextComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text
        }
    }
  
    render() {
      return (
        <div className="TextComponent">
          <p>
              { this.props.text }
          </p>
        </div>
      );
    }
}

TextComponent.propTypes = {
  text: PropTypes.string.isRequired 
}

export default TextComponent;
