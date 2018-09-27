({
	doInit : function(component, event, helper) {
        var action = component.get("c.getDaysToExpiry");
        action.setCallback(this, function(response){
            if(response.state=="SUCCESS"){
                alert('Success');
                component.set("v.expiryMessage", 'Your org will expire in '+response.getReturnValue() + ' days.');
            }else{
                alert(response.state);
            }
        });
        $A.enqueueAction(action);
	}
})