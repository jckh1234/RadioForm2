import React from 'react';

import PropTypes from 'prop-types';

const RadioDivStyle={

  display:'inline',
  align:'left',
  width:200

}

const RadioTableCellStyle={
  textAlign:'center', 
  borderWidth:1, 
  borderColor:'#A3C0E8', 
  borderStyle:'solid', 
  margin:0
}

const TextTableCellStyle={
  textAlign:'left', 
  borderWidth:1, 
  borderColor:'#A3C0E8', 
  borderStyle:'solid', 
  margin:0, 
  paddingLeft:5
}

class PlanTableRow extends React.Component {

  render() {
    return (

      <tr>
      	{
      		this.props.fields.map(
      			function(field){
      				return this.renderRowContent(field,this.props.selectedValuesOnRow);
      			}.bind(this)
      		)
      	}
      </tr>

    );
  }



  renderRowContent(field, selectedValues){

    if(field.isRadio){
        return(
          <td key={field.value} style={RadioTableCellStyle}>
            <div style={RadioDivStyle}>
              <input
                type="radio"
                disabled={this.props.disabled}
                checked={selectedValues.includes(field.value)}
                onChange={()=>{
                  this._onSelection(field.value)
                }}
              />
              <span>{field.title}</span>
            </div>
          </td>
        );
    }else{
        return(
          <td key={field.value} style={TextTableCellStyle}>
            {field.title}
          </td>
        );
    }
  }


  _onSelection(value){

      if(!this.props.disabled){

        this.props.oncheckedValueAtRow(value);

      }             
  }
}


PlanTableRow.propTypes = {
  fields:PropTypes.arrayOf(
    PropTypes.shape({
      value:PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isRadio:PropTypes.bool.isRequired,

    })
  ).isRequired,
  selectedValuesOnRow:PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled:PropTypes.bool
}


export default PlanTableRow;