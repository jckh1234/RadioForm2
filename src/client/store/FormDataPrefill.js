FormDataPrefill = {
  getApplyFormOriginalInput : function (userData){

    return Object.keys(tableSetup)
    //filter out applied plan type
    .filter(function(planType){

      return !(
        userData.appliedPlans
        .map(function(appliedPlan){
          return appliedPlan.planType;
        }).includes(planType)
      );

    })
    //set default values for each plan type
    .map(function(planType, index) {

      var planSettings = getPlanSettingsByPlanTypeAndUserData(planType, userData)
      return  ({
        checked:false,
        planType:planType,
        rowsSelections:planSettings.rows
          .filter(function(row){
            return row.defaultValue != null;
          })
          .map(function(row){
            InputOnRow = {
              rowId:row.id,
              value:row.defaultValue
            }
            return InputOnRow;
          })
      });
    });
  },


  getTerminateFormOriginalInput: function (userData){

    return userData.appliedPlans.map(function(appliedPlan){    
      return {
        checked:false,
        rowsSelections:[],
        planType:appliedPlan.planType,
      };
    })

  },

  getChangeFormOriginalInput: function (userData){

    return userData.appliedPlans.map(function(appliedPlan){
      var planType = appliedPlan.planType;
      var planSettings = getPlanSettingsByPlanTypeAndUserData(planType, userData);
      var rowsSelections = appliedPlan.rowsSelections;

      //assign default for rows unselected;
      // alert(JSON.stringify(planSettings));
      rowsSelections = rowsSelections.concat(
        planSettings.rows
        .filter(function(row){

          var rowNotHavingSelection = !(
            rowsSelections.some(function(selection, i, selections){
              return selection.rowId === row.id;
            })
          );
          var rowHasDefaultValue = row.defaultValue != null;
          return rowNotHavingSelection && rowHasDefaultValue;

        }).map(function(row){
          return {
            rowId: row.id,
            value: row.defaultValue
          }
        })

      );

      return {
        checked:false,
        planType:appliedPlan.planType,
        rowsSelections: rowsSelections
      };
    })
  }
}