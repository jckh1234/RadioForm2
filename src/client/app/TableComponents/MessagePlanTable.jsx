import React from 'react';
import PropTypes from 'prop-types';

import PlanTableHeader from './PlanTableHeader.jsx';

const TableStyle={
  width:'100%',
  borderCollapse:'collapse',
  fontSize:12
}

const MessageContainerStyle={
  width:'100%', 
  textAlign:'center',
  backgroundColor:'#F7FAFF', 
  borderWidth:1, 
  borderColor:'#A3C0E8', 
  borderStyle:'solid'
}


class MessagePlanTable extends React.Component {

  render() {

    return (

      <div>
        <table style={TableStyle}>
          <thead>
            <PlanTableHeader cols={this.props.settings.cols}/>
          </thead>
        </table>
        <div style={MessageContainerStyle}>
          {this.props.settings.overridingMessage}
        </div>
      </div>
      
    );

  }
}

MessagePlanTable.propTypes = {
  settings:PropTypes.shape({
    cols:PropTypes.array.isRequired,
    overridingMessage:PropTypes.string.isRequired
  }).isRequired,
}

export default MessagePlanTable;