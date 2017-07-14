import React from 'react';
import PropTypes from 'prop-types';

import ApplyForm from './Forms/ApplyForm.jsx';
import ChangeForm from './Forms/ChangeForm.jsx';
import TerminateForm from './Forms/TerminateForm.jsx';

const FormsContainerHeaderHeight = '30px';
const SurroundingDivStyle = {
	borderWidth:1, 
	borderColor:'#A3C0E8', 
	borderStyle:'solid', 
	borderRadius:10, 
	overflow:'hidden'
}

const HeaderStyle = {
	textAlign:'center', 
	position:'relative', 
	height:FormsContainerHeaderHeight, 
	lineHeight:FormsContainerHeaderHeight, 
	backgroundColor:'#F7FAFF'
}

const HeaderTextStyle = { 
	height:FormsContainerHeaderHeight, 
	top:'0px', 
	left:5, 
	position:'absolute', 
	margin:0, 
	padding:0
}

const HeaderRadioWrapperStyle = {
	display:'inline'
}

const HeaderRadioStyle = {
	display:'inline'
}

const FormWrapperStyle = {
	padding:30
}



class FormsContainer extends React.Component {

    render(){

        return(
	        <div style={SurroundingDivStyle}>
		        <div style={HeaderStyle}>

					<p style={HeaderTextStyle}>
						Market Data Subscription
					</p>

					<div style={HeaderRadioWrapperStyle}>
						{this._generateSubmissionTypeRadios()}
					</div>

		        </div>
		        <div style={FormWrapperStyle}>
    		        {this._renderCorrespondingForm()}
		        </div>
		       
		    </div>
	    );

    }


    _renderCorrespondingForm(){
    	
    	if(this.props.userData != null){
	    	var appliedPlans = this.props.userData.appliedPlans.map((plan)=>{return plan.planType});
			switch(this.props.formInput.submissionType){
				case "A":
					return <ApplyForm ApplyFormInput={this.props.formInput.applyForm} appliedPlans={appliedPlans} isProfessionalUser={this.props.userData.isProfessionalUser} store={this.props.store}/>;
				case "C":
					return <ChangeForm ChangeFormInput={this.props.formInput.changeForm} appliedPlans={appliedPlans} isProfessionalUser={this.props.userData.isProfessionalUser} store={this.props.store}/>;
				case "T":
					return <TerminateForm TerminateFormInput={this.props.formInput.terminateForm} appliedPlans={appliedPlans} isProfessionalUser={this.props.userData.isProfessionalUser} store={this.props.store}/>;
				defualt:
					return null;
			}
    	}

    }


	_generateSubmissionTypeRadios(){

		return (

			this.props.submissionOptions.map(function(option){
				return(
					<div key={option.type} style={HeaderRadioStyle}>
			            <input
			              type="radio"
			              checked={this.props.formInput.submissionType === option.type}
			              onChange={()=>{
			                this._dispatchSubmissionTypeSelectionSignal(option.type);
			              }}
			            />
			            <span>{option.display}</span>
					</div>
				);
			}.bind(this))

		);

	}


	_dispatchSubmissionTypeSelectionSignal(type){

	    this.props.store.dispatch(
	    	{
	    		type:"SelectedSubmissionType",
	    		submissionType:type
	    	}
	    );

	}
}




FormsContainer.propTypes = {

	submissionOptions: PropTypes.arrayOf(PropTypes.shape({
		type:PropTypes.oneOf(['A', 'C', 'T','N']),
		display:PropTypes.string.isRequired,
	})).isRequired,

	userData:PropTypes.shape({
		appliedPlans:PropTypes.array.isRequired,
		isProfessionalUser:PropTypes.bool.isRequired
	}),

	formInput:PropTypes.shape({
		submissionType:PropTypes.oneOf(['A', 'C', 'T', 'N']).isRequired,
		applyForm:PropTypes.array.isRequired,
		changeForm:PropTypes.array.isRequired,
		terminateForm:PropTypes.array.isRequired,
	}).isRequired,

	store:PropTypes.any.isRequired,

}




export default FormsContainer;