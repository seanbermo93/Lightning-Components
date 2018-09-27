({
    myAction : function(component, event, helper) {
        
    },
    onStudentSelected : function(component, event, helper) {
        var contactId = event.getParam('contactId');
        var courseDeliveryId = event.getParam('courseDeliveryId');
        component.set('v.contactId',contactId);
        component.set('v.courseDeliveryId', courseDeliveryId);
        component.set('v.isSelected', true);
        component.find('recordLoader').reloadRecord();
        helper.propogateCourseAttendees(component, contactId);
    },
    handleClick: function(component, event, helper){
        var cId = component.get('v.contactId');
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId": cId,
            "slideDevName": "related"
        });
        navEvt.fire();
    }
})