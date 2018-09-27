({
    myAction : function(component, event, helper) {
        
    },
    doInit: function(component, event, helper){
        var history = component.get('v.attendances');
        if(history.length > 0){
            component.set('v.hasAttendances', true);
            component.set('v.selectedAttendanceId', history[0].Id);
            component.find("accountRecordLoader").reloadRecord();
        }else {
            console.log('No previous attendances');
        }
    },
    handleChange: function(component, event, helper){
        var selectedAttendance = component.find('attendanceSelect').get('v.value');
        component.set('v.selectedAttendance', selectedAttendanceId);
        component.find("accountRecordLoader").reloadRecord();
    },
    recordUpdated: function(component, event, helper){
        console.log('update of the lds record');
    },
    updateClicked: function(){
        alert('updated correclty');
    },
    saveClicked: function(component){
        component.find("accountRecordLoader").saveRecord($A.getCallback(function(saveResult) {
            
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                alert('Success')
            }
        }));
        
    },
    onSave: function(component, event, helper) {
        component.find("recordHandler").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                helper.showToast(component,'','Record Saved','Huzzah!','success');
            } else if (saveResult.state === "INCOMPLETE") {
                helper.showNotification(component,'','Ooops','User is offline, device doesn\'t support drafts.','warning');
            } else if (saveResult.state === "ERROR") {
                helper.showNotification(component,'','Problem saving record',JSON.stringify(saveResult.error),'error');
                
            } else {
                helper.showNotification(component,'','Unknown problem','state' +  saveResult.state + ', error: ' + JSON.stringify(saveResult.error),'error');
            }
        }));
    }
})