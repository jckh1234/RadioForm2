import React from 'react';
import PropTypes from 'prop-types';

import DataPlanTable from '../TableComponents/DataPlanTable.jsx'
import MessagePlanTable from '../TableComponents/MessagePlanTable.jsx'
import TableFooterReminder from './TableFooterReminder.jsx'

const TablePanelHeaderHeight= 30;
const TablePanelHeaderCheckboxPadding= 5;
const TablePanelHeaderStyle={
  textAlign:'center', 
  position:'relative', 
  height:TablePanelHeaderHeight + 'px', 
  lineHeight:TablePanelHeaderHeight + 'px', 
  backgroundColor:'#F7FAFF', 
  borderWidth:1, 
  borderColor:'#A3C0E8', 
  borderStyle:'solid'
}
const TablePanelCheckBoxStyle={
  height: (TablePanelHeaderHeight - TablePanelHeaderCheckboxPadding *2) + 'px',
  top: TablePanelHeaderCheckboxPadding + 'px',
  left: TablePanelHeaderCheckboxPadding + 'px',
  position:'absolute',
  margin:0,
  padding:0
}



class TablePanel extends React.Component {

  render() {

    return (
      <div>
        <div style={TablePanelHeaderStyle}>
          
          {
            (this.props.settings.selectable) &&
            <input type="checkbox"
              checked={(this.props.currentData.checked)}
              onChange={this._panelCheckboxChange.bind(this)}
              style={TablePanelCheckBoxStyle}
            />
          }

          {this.props.settings.title}

        </div>

        {
          (!this.props.settings.selectable || this.props.currentData.checked)?
          (

            <div>

              {
                (this.props.settings.overridingMessage == null)?

                  <DataPlanTable settings={this.props.settings} rowsSelections={this.props.currentData.rowsSelections} checkedValueAtRow={this._checkedValueAtRow.bind(this)}/>
                  :<MessagePlanTable settings={this.props.settings}/>
              }
              <TableFooterReminder hidden={this.props.settings.hiddenFooter} type ={this.props.settings.footerType}/>

            </div>

          ):(null)
        }
      </div>
    );
    
  }


  _panelCheckboxChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    if(this.props.settings.panelCheckboxChange(value) !== undefined){
      this.props.settings.panelCheckboxChange(value);
    }

  }

  _checkedValueAtRow(rowId,value){

    if(this.props.settings.checkedValueAtRow !== undefined){
      this.props.settings.checkedValueAtRow(rowId,value);
    }        
  }

}



TablePanel.propTypes = {
  settings:PropTypes.shape({
    selectable:PropTypes.bool.isRequired,
    hiddenFooter:PropTypes.bool.isRequired,
    disabled:PropTypes.bool,
    title:PropTypes.string,
    footerType:PropTypes.string,
    overridingMessage:PropTypes.string,
    checkedValueAtRow:PropTypes.func,
    panelCheckboxChange:PropTypes.func,
  }),
  currentData:PropTypes.shape({
    checked:PropTypes.bool,
    rowsSelections: PropTypes.array.isRequired,
  }),

}

export default TablePanel;