({
    helperMethod : function() {
        
    },
    enableActionButtons: function(component, somethingSelected) {
        somethingSelected = !somethingSelected;
        component.find('btnEmail').set('v.disabled',somethingSelected);
        component.find('btnSendCert').set('v.disabled',somethingSelected);
        component.find('btnDelete').set('v.disabled',somethingSelected);
    },
    onDelete: function(component,selectedIds) {
        this.callServer(
            component,
            "c.deleteStudentCertification",
            function(response) {
                this.refreshData(component);
            },
            {
                certificationIds : selectedIds
            }
        );
    },
    refreshData: function(component) {
        this.callServer(
            component,
            "c.getCertifiedStudents",
            function(response) {
                var contacts = [];
                for (var i=0; i< response.length; i++) {
                    var rec = response[i];
                    contacts.push({
                        certificationHeldId: rec.Id,
                        contactId: rec.Certified_Professional__r.Id,
                        name: rec.Certified_Professional__r.Name,
                        date: rec.Date_Achieved__c,
                        email:rec.Certified_Professional__r.Email,
                        phone: rec.Certified_Professional__r.Phone
                    });
                }
                component.set('v.contacts', contacts);
            },
            {
                certificationId:
                component.get('v.certificationId')
            }
        );
    }
})