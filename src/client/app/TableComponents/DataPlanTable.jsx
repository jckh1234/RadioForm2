import React from 'react';
import {render} from 'react-dom';

import PlanTableHeader from './PlanTableHeader.jsx';
import PlanTableRow from './PlanTableRow.jsx'

import PropTypes from 'prop-types';

const TableStyle={
  width:'100%',
  borderCollapse:'collapse',
  fontSize:12
}

class DataPlanTable extends React.Component {

  render() {

    return (
      
        <table style={TableStyle}>
          <thead>
            <PlanTableHeader cols={this.props.settings.cols}/>
          </thead>
            <tbody>
              {this.renderRows(this.props.settings.rows, this.props.rowsSelections)}
            </tbody>
        </table>

    );

  }

  renderRows(rows, rowsSelections){

    return (rows.map(
      function(row){

        return (
          <PlanTableRow 
            key={row.id} 
            id={row.id}
            fields={row.fields} 
            selectedValuesOnRow={
              
              rowsSelections.filter(function(selection){
                return selection.rowId === row.id;
              }.bind(this))
              .map(function(selection){
                return selection.value;
              }.bind(this))

            } 
            disabled={this.props.settings.disabled} 
            oncheckedValueAtRow={(value) =>this._checkedValueAtRow(row.id, value)}
          />
        );

      }.bind(this)
    ));

  }

  _checkedValueAtRow(rowId, value){
    
      this.props.checkedValueAtRow(rowId,value);
      
  }
}

DataPlanTable.propTypes = {

  checkedValueAtRow:PropTypes.func.isRequired,
  settings:PropTypes.shape({
    cols:PropTypes.array.isRequired,
    rows:PropTypes.array.isRequired,
    disabled:PropTypes.bool,
  }).isRequired,
  rowsSelections:PropTypes.array.isRequired,

}

export default DataPlanTable;