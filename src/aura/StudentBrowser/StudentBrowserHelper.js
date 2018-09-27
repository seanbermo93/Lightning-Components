({
    
    onInit: function(component, event, helper){
        helper.queryStudents(component, helper, "", "");
    },
    queryStudents: function(component, helper, instructorId, courseDeliveryId){
        helper.callServer(component,"c.getStudents",
                          function(response) {component.set('v.studentList', response);
                                             }, {
                                                 instructorId : instructorId,
                                                 courseDeliveryId : courseDeliveryId
                                             }
                         );
    },
    broadcastStudentSelected: function(component){
        var appEvent = $A.get("e.c:AwInstructorsStudentSelected");
        appEvent.setParams({
            courseDeliveryId :component.get('v.selectedCourseDeliveryId'),
            contactId: component.get('v.selectedContactId')
        });
        appEvent.fire();
        
    }
})