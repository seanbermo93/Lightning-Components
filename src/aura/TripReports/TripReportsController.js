({
    myAction : function(component, event, helper) {
        
    },
    onTripReportModeChange: function(component,event,helper) {
        component.set('v.mode',event.getParam('mode'));
        component.set('v.selectedTripReportId', event.getParam('Id'));
    }
})