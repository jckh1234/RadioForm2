import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';


import mountingDomID from 'mountingDomID';
import store from 'store';

import FormsContainer from './FormsContainer.jsx';
import DisplayContainer from './DisplayContainer.jsx';


const submissionOptions = 
	[
		{
			type:'A',
			display:'Apply'
		},	      	
		{
			type:'T',
			display:'Terminate'
		},	
	  	{
			type:'C',
			display:'Change'
		}
	];

const masterWrapperStyle = {
	fontFamily:'Tahoma'
}

class Form extends React.Component {

	constructor() {

		super();
	    this.state={
			submissionOptions:submissionOptions,
			userData:null,
			formInput:{
				submissionType:'N',
				applyForm:[],
				changeForm:[],
				terminateForm:[],
			}
		}

	}

    render () {
        return (

		  	<div style={masterWrapperStyle}>

		  		<FormsContainer store={this.props.store} submissionOptions={this.state.submissionOptions} userData={this.state.userData} formInput={this.state.formInput}/>

			</div>
			 
        );

    }

	componentDidMount(){

		this.props.store.subscribe(()=>{

			this.setState(this.props.store.getState());

		}).bind(this);

	}
}



class UserInfo extends React.Component {

	constructor() {

		super();
	    this.state={
			userData:null,
		}
	}

    render () {
  		return(
  			<div style={masterWrapperStyle}>

	  			{
		    		(this.state.userData != null)?
		  			<DisplayContainer appliedPlans={this.state.userData.appliedPlans} isProfessionalUser={this.state.userData.isProfessionalUser}/>
		  			:(null)
		  		}

  			</div>

  		);

    }

	componentDidMount(){

		this.props.store.subscribe(()=>{

			this.setState(
				{
					userData:this.props.store.getState().userData
				}
			);

		}).bind(this);

	}


    componentWillMount(){

	    document.body.style.margin = "0px";
	    
	}
}

render(<UserInfo store={store}/>, document.getElementById(mountingDomID.userInfoID));
render(<Form store={store}/>, document.getElementById(mountingDomID.formID));
	

