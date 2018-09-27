({
	helperMethod : function() {
		
	},
    propogateCourseAttendees: function(component, contactId){
        var action = component.get("c.getCourseAttendees");
        action.setParams({
            studentId: contactId
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state=="SUCCESS"){
                component.set("v.History", response.getReturnValue());
            }else{
                console.log(response.getError());
            }
        });
        $A.enqueueAction(action);
    }
})