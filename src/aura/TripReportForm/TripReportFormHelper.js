({
    onChangeId: function(component) {
        var Id = component.get('v.Id');
        var recordOps = component.find("recordOps");
        if (recordOps && recordOps.getNewRecord && (Id == '' || !Id)) {
            recordOps.getNewRecord(
                "TripReport__c", // sObject type (objectApiName)
                null,            // recordTypeId
                false,           // skip cache?
                $A.getCallback(function() {
                    var rec = component.get("v.objReport");
                    var error = component.get("v.objReportError");
                    if(error || (rec === null)) {
                        console.log("Error initializing record: " + error);
                        return;
                    }
                    console.log("Record initialized: ",rec);
                })
            );
        }
    },
    onInit: function(component) {
        this.callServer(
            component,
            "c.getInstructors",
            function(response) {
                component.set('v.instructors', response);
            }
        );
        this.callServer(
            component,
            "c.getLocationTypes",
            function(response) {
                var opts = [];
                for (var i=0; i<response.length; i++) {
                    opts.push({
                        label: response[i],
                        value: response[i]
                    });
                }
                component.set('v.reviewOptions',opts);
            }
        );
        this.onChangeId(component);
    }
})