var store = {};

function getFormInputFromStateWithFormType(formType,state){
  var formToUpdate = [];
  switch(formType){
    case 'A':
      formToUpdate = state.formInput.applyForm;break;
    case 'C':
      formToUpdate = state.formInput.changeForm;break;
    case 'T':
      formToUpdate = state.formInput.terminateForm;break;
  }

  return formToUpdate;
}

function getPlanInputFromStateWithFormTypeAndPlanType(formType, planType, state){

  formToUpdate = getFormInputFromStateWithFormType(formType,state);
  var planInputToUpdate = formToUpdate.find(function(plan){
    return plan.planType === planType;
  });

  return planInputToUpdate;

}

function getPlanSettingsByPlanTypeAndUserData(planType, userData){

    SettingsByPlanType = tableSetup[planType];
    var settings;
    if(userData.isProfessionalUser && SettingsByPlanType.pro!= null){
      settings = SettingsByPlanType.pro;
    }else{
      settings = SettingsByPlanType.nonPro;
    }
    return settings;
}


function reducer(state, actions){

  switch (actions.type) {

    case "ReloadData":

          var newState = Object.assign({},state);
          newState.formInput.submissionType='A';
          newState.userData=actions.userData;
          if(newState.userData != null){
            newState.formInput.applyForm=FormDataPrefill.getApplyFormOriginalInput(actions.userData);          
            newState.formInput.terminateForm=FormDataPrefill.getTerminateFormOriginalInput(actions.userData);
            newState.formInput.changeForm=FormDataPrefill.getChangeFormOriginalInput(actions.userData);
          }
          return newState;
    
    case "SelectedValuesOnRow":

          var newState = Object.assign({},state);
          var formType = actions.formType;
          var planType = actions.planType;
          var rowId = actions.rowId;
          var value = actions.value;

          var planInputToUpdate = getPlanInputFromStateWithFormTypeAndPlanType(formType,planType,newState);
          var planSettings = getPlanSettingsByPlanTypeAndUserData(planType, newState.userData);

          RowValueSelectionHandler.UpdatePlanInputOnRowValueSelection(planInputToUpdate, planSettings,rowId,value);

          return newState;

    case "PlanSelection":

          var newState = Object.assign({},state);
          var formType = actions.formType;
          var planType = actions.planType;
          var checked = actions.checked;
          var planInputToUpdate = getPlanInputFromStateWithFormTypeAndPlanType(formType,planType,newState);
          planInputToUpdate.checked = checked;


          return newState;

    case "SelectedSubmissionType":

          var newState = Object.assign({},state);
          newState.formInput.submissionType = actions.submissionType;
          return newState;

    default: 

          return {
            //should be {isProfessionalUser:bool, appliedPlans:[{planType:string, rowsSelections:[{rowId, value}]}]}
            userData:null,
            formInput:{
              submissionType:'N',
              applyForm:[],
              changeForm:[],
              terminateForm:[],
              valid:false,
            }
          };

  }

}