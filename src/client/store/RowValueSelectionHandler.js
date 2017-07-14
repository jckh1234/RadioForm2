RowValueSelectionHandler = {

	UpdatePlanInputOnRowValueSelection:function(planInputToUpdate, planSettings, rowId, value){

		if(planSettings.selectionOption != null && (planSettings.selectionOption.singleChoice|| planSettings.selectionOption.bundleRow === rowId)){

			//behavior for single choice selection or bundle row selection
			planInputToUpdate.rowsSelections = [];
			var pickedOption = {rowId: rowId, value: value}
			planInputToUpdate.rowsSelections.push(pickedOption);

		}else{

			//behavior for normal selection
			var newRowsSelections = [];

			//push picked option to newRowsSelection
			var pickedOption = {rowId: rowId, value: value}
			newRowsSelections.push(pickedOption);

			//keep original selections except selections on bundle row or selections on from row of picked option
			newRowsSelections = newRowsSelections.concat(

			  planInputToUpdate.rowsSelections.filter(function(existingRowSelection){
			    var isBundleRowSelection = (planSettings.selectionOption != null && existingRowSelection.rowId == planSettings.selectionOption.bundleRow);
			    var isFromRowOfPickedOption = existingRowSelection.rowId === rowId;
			    return (!isBundleRowSelection) && (!isFromRowOfPickedOption);                
			  })

			);

			//add default selection if row has no selection
			newRowsSelections = newRowsSelections.concat(
			  planSettings.rows
			  .filter(function(row){

			    var rowNotHavingSelection = !(
			      newRowsSelections.some(function(newSelection, i, selections){
			        return newSelection.rowId === row.id;
			      })
			    );
			    var rowHasDefaultValue = row.defaultValue != null;
			    return (rowNotHavingSelection && rowHasDefaultValue);

			  }).map(function(row){
			    return {
			      rowId: row.id,
			      value: row.defaultValue
			    }
			  })

			);

			//assign new rowsSelections
			planInputToUpdate.rowsSelections = newRowsSelections;
		}
	}

}