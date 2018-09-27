({
    onStudentClick : function(component, event, helper) {
        var student = component.get('v.student');
        var evt =
            component.getEvent('onStudentSelected');
        evt.setParams({
            contactId:student.Id
        });
        evt.fire();
    }
})