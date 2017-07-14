import React from 'react';
import {render} from 'react-dom';

import PropTypes from 'prop-types';

const ColStyle={
  textAlign:'left', 
  borderWidth:1, 
  borderColor:'#A3C0E8', 
  borderStyle:'solid', 
  margin:0, 
  backgroundColor:'#D0E4FE', 
  fontWeight:'normal', 
  paddingTop:10, 
  paddingBottom:10, 
  paddingLeft:5
}

class PlanTableHeader extends React.Component {

  render() {
    return (
      <tr>
        {this.renderColHeader(this.props.cols)}
      </tr>
    );
  }

  renderColHeader(cols){
    return (cols.map(
      function(col){
        return (<th key={col} style={ColStyle}>{col}</th>);
      }.bind(this)
    ));
  }
}

PlanTableHeader.propTypes = {

  cols:PropTypes.arrayOf(PropTypes.string).isRequired

}

export default PlanTableHeader;