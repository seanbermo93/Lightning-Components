({
    doInit : function(component, event, helper) {
        helper.onInit(component);
    },
    onDataGridClick: function(component,event,helper) {
        component.set('v.selectedRecordId',event.getParam('pk'));
    },
    onBtnNewClick: function(component,event,helper) {
        var compEvent = component.getEvent("ontripreportmodechange");
        compEvent.setParams({"mode" : "add" });
        compEvent.fire();
    },
    onBtnEditClick: function(component,event,helper) {
        var compEvent =component.getEvent("ontripreportmodechange");
        compEvent.setParams({
            "mode" : "edit",
            "Id" : component.get('v.selectedRecordId')
        });
        compEvent.fire();
    }
})