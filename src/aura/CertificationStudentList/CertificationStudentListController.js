({
    myAction : function(component, event, helper) {
        
    },
    
    onCertificationIdChange:
    function(component,event,helper) {
        helper.refreshData(component);
    },
    doInit: function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName: 'name', type: 'text'},
            {label: 'Date', fieldName: 'date', type: 'text'},
            {label: 'Email',fieldName: 'email', type: 'email'},
            {label: 'Phone', fieldName: 'phone', type: 'phone'}
        ]);
    },
    onRowSelection: function(component,event,helper) {
        helper.enableActionButtons(component, event.getParam('selectedRows').length > 0);
    },
    onCertActions: function(component,event,helper) {
        var action = event.getSource().getLocalId();
        var selections =
            component.find('datatable').getSelectedRows();
        var selectedIds = [];
        for (var i = 0; i < selections.length; i++){
            selectedIds.push(selections[i].certificationHeldId);
        }
        switch(action) {
            case 'btnEmail':
                break;
            case 'btnSendCert':
                break;
            case 'btnDelete':
                helper.onDelete(component,selectedIds);
                break;
        }
    }
})