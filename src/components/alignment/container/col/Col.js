import React from 'react';
import PropTypes from 'prop-types'
import { BreakPointSize, BreakPointOffset } from '../breakpoint/BreakPoint'

class Col extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
            size_class:   props.sizes.map(e => e.toBootstrapClass()),
            offset_class: props.offsets.map(e => e.toBootstrapClass())
        }
    }

    render() {
      return (
        <div className={`Col col ${this.state.size_class} ${this.state.offset_class}`}>
            {this.props.children}
        </div>
      );
    }
}

Col.propTypes = {
    children: PropTypes.element.isRequired,
    sizes:    PropTypes.arrayOf(PropTypes.instanceOf(BreakPointSize)),
    offsets:  PropTypes.arrayOf(PropTypes.instanceOf(BreakPointOffset)),
}

Col.defaultProps = {
    sizes:   [],
    offsets: []
}

export default Col;
