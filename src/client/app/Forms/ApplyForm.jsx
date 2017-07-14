import React from 'react';
import PropTypes from 'prop-types';

import tableSetup from 'tableSetup';

import TablePanel from '../TablePanels/TablePanel.jsx';

class ApplyForm extends React.Component {

    render(){
    	return(
    		<div>
    			{this._generateApplyFormTablePanels()}
    		</div>
    	);

    }

    _generateApplyFormTablePanels(){

    	//generate only plans not yet applied
		return Object.keys(tableSetup)
			.filter(function(planType) {
				return !(this.props.appliedPlans.includes(planType));
			}.bind(this))
			.map(function(planType){
				return this._generateTablePanel( planType, tableSetup[planType]);
			}.bind(this))

    }

    _generateTablePanel(planType, planSettings){

    	//get input of the rendering plan
    	var inputOnPlan = this.props.ApplyFormInput.find((plan) => {
    		return plan.planType === planType;
    	});


		if(this.props.isProfessionalUser && Object.keys(planSettings).includes('pro')){

			//generate pro plan
			return this._generateTablePanelWithSettingsAndInputOnPlan(planType, planSettings.pro, inputOnPlan);

		}else{

			//generate non-pro plan
			return this._generateTablePanelWithSettingsAndInputOnPlan(planType, planSettings.nonPro, inputOnPlan);

		}
    }


	_generateTablePanelWithSettingsAndInputOnPlan(planType, settings, inputOnPlan){
		//render table panel
		var modifiedSettings = Object.assign({},settings);
		modifiedSettings.hiddenFooter = false;
		modifiedSettings.selectable = true;
		modifiedSettings.panelCheckboxChange = (value) => {this._planSelectionChange(planType, value )};
		modifiedSettings.checkedValueAtRow = (rowId, value) => {this._checkedValueAtRowForPlanType(planType, rowId, value)};
		return (<TablePanel key={planType} settings={modifiedSettings} currentData={inputOnPlan} planType={planType}/>);

	}

	_planSelectionChange(planType,value){

		this.props.store.dispatch(
			{
				type:"PlanSelection",
				formType:this._getFormType(),
				planType:planType,
				checked: value,

			}
		);

	}

	_checkedValueAtRowForPlanType(planType,rowId,value){

		this.props.store.dispatch(
			{
				type:"SelectedValuesOnRow",
				formType:this._getFormType(),
				planType:planType,
				rowId:rowId,
				value:value,
			}
		);

	}

	_getFormType(){
		return 'A'
	}

}

ApplyForm.propTypes = {

	appliedPlans:PropTypes.arrayOf(PropTypes.string).isRequired,
	isProfessionalUser:PropTypes.bool.isRequired,
	ApplyFormInput:PropTypes.arrayOf(
		PropTypes.shape({
			planType:PropTypes.string.isRequired
		})
	).isRequired,
	store:PropTypes.any.isRequired,
}

export default ApplyForm;
