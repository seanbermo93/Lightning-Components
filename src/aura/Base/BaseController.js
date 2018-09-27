({
    myAction : function(component, event, helper) {
        
    },
    isLightningExperience: function() {
        var toast = $A.get("e.force:showToast");
        if (toast){
            return true;
        } else {
            return false;
        }
    },
})