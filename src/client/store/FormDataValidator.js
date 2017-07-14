function validateApplyPlan(input){
	return true;
}

function validateTerminateForm(input){
	return true;
}

function validateChangeForm(input){
	return true;
}

FormDataValidator = {

	ValidateBySubmissionTypeAndFormInput:function(submissionType, input){
		switch(submissionType){
			case 'A':
				return validateApplyForm(input);
			case 'T':
				return validateTerminateForm(input);
			case 'C':
				return validateChangeForm(input);

		}
	}

}