import React from 'react';
import PropTypes from 'prop-types';

import tableSetup from 'tableSetup';

import TablePanel from './TablePanels/TablePanel.jsx';

class DisplayContainer extends React.Component {


	render(){

    	return(
    		<div>
    			{this._generateChangeFormTablePanels()}
    		</div>
    	);

    }

    _generateChangeFormTablePanels(){

		return Object.keys(tableSetup)
			.map(function(planType){
				return this._generateTablePanel( planType, tableSetup[planType]);
			}.bind(this))

    }

    _generateTablePanel(planType, planSettings){

    	//get input of the rendering plan
    	var selectionsOnPlan = this.props.appliedPlans.find((plan) => {
    		return plan.planType === planType;
    	});


		if(this.props.isProfessionalUser && Object.keys(planSettings).includes('pro')){

			//generate pro plan
			return this._generateTablePanelWithSettingsAndSelectionsOnPlan(planType, planSettings.pro, selectionsOnPlan);

		}else{

			//generate non-pro plan
			return this._generateTablePanelWithSettingsAndSelectionsOnPlan(planType, planSettings.nonPro, selectionsOnPlan);

		}
    }

	_generateTablePanelWithSettingsAndSelectionsOnPlan(planType, settings, selectionsOnPlan){

		//render table panel
		var modifiedSettings = Object.assign({},settings);
		modifiedSettings.hiddenFooter = true;
		modifiedSettings.selectable = false;
		modifiedSettings.disabled = true;
		if(selectionsOnPlan == null){
			modifiedSettings.overridingMessage = "No existing " + planType  + " market data plan for user"
		}
		return (<TablePanel key={planType} settings={modifiedSettings} currentData={selectionsOnPlan} planType={planType}/>);

	}
}

DisplayContainer.propTypes = {

	appliedPlans:PropTypes.array.isRequired,
	isProfessionalUser:PropTypes.bool.isRequired
	
}

export default DisplayContainer;