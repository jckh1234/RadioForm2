var mountingDomID = null;
function setUpReact(domID){

	mountingDomID = domID;
	store = Redux.createStore(reducer);
	
}