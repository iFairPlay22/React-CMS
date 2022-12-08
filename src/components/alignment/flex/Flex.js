/* 
  > IMPORT 
  import { Flex } from '../../components/alignment/flex'

  > EXAMPLE 
  <Flex
    direction="horizontal"
    primary_axis="around"
    secondary_axis="around"
    wrap={false}
    >
        <button key="1" type="button" className="btn btn-primary">Primary</button>
        <button key="2" type="button" className="btn btn-secondary">Secondary</button>
        <button key="3" type="button" className="btn btn-success">Success</button>
  </Flex> 
*/

import React from 'react';
import PropTypes from 'prop-types'

class Flex extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = { 
          class: this.propsToBootstrapClass(props)
        }
    }

    propsToBootstrapClass({ direction, primary_axis, secondary_axis, wrap }) {
      const dir_c  = this.directionToBootstrapClass(direction)
      const pri_c  = this.primaryAxisAlignmentToBootstrapClass(primary_axis)
      const sec_c  = this.primaryAxisAlignmentToBootstrapClass(secondary_axis)
      const wrap_c = this.wrapToBootstrapClass(wrap)
      return `${dir_c} ${pri_c} ${sec_c} ${wrap_c}`
    }

    directionToBootstrapClass(direction) {
      switch (direction) {
        case "horizontal":
          return "d-flex"
        case "vertical":
          return "v-flex"
        default:
          throw Error("Invalid direction");
      }
    }

    primaryAxisAlignmentToBootstrapClass(alignment) {
      switch (alignment) {
        case "start":
          return "justify-content-start"
        case "center":
          return "justify-content-center"
        case "end":
          return "justify-content-end"
        case "around":
          return "justify-content-around"
        case "between":
          return "justify-content-between"
        default:
          throw Error("Invalid first axis alignment");
      }
    }

    secondaryAxisAlignmentToBootstrapClass(alignment) {
      switch (alignment) {
        case "start":
          return "align-items-start"
        case "center":
          return "align-items-center"
        case "end":
          return "align-items-end"
        case "around":
          return "align-items-around"
        case "between":
          return "align-items-between"
        default:
          throw Error("Invalid first axis alignment");
      }
    }

    wrapToBootstrapClass(wrap) {
      switch (wrap) {
        case true:
          return "flex-wrap"
        case false:
          return "flex-nowrap"
        default:
          throw Error("Invalid wrap");
      }
    }

    render() {

      return (
        <div className="Flex">
          <div className={ this.state.class }>
            {this.props.children}
          </div>
        </div>
      );
    }
}

Flex.propTypes = {
  direction:      PropTypes.oneOf([ "horizontal", "vertical" ]).isRequired,
  primary_axis:   PropTypes.oneOf([ "start", "center", "end", "between", "around" ]).isRequired,
  secondary_axis: PropTypes.oneOf([ "start", "center", "end", "between", "around" ]).isRequired,
  wrap:           PropTypes.bool.isRequired
}

Flex.defaultProps = {
  direction:      "horizontal",
  primary_axis:   "around",
  secondary_axis: "around", 
  wrap:           false
}

export default Flex;
