({
    callServer: function(component,method,callback,params, storable) {
        var compEvent = component.getEvent("loading");
        compEvent.fire();
        var action = component.get(method);
        if (params) {
            if (storable) {
                action.setStorable();
            } else {
                action.setStorable({
                    "ignoreExisting": "true"
                });
            }
            action.setParams(params);
        }
        
        action.setCallback(this,function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // pass returned value to callback function
                callback.call(this,response.getReturnValue());
            } else if (state === "ERROR") {
                // generic error handler
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        throw new Error("Error" + errors[0].message);
                    }
                } else {
                    throw new Error("Unknown Error");
                }
            }
            var compEvent = component.getEvent("doneloading");
            compEvent.fire();
        });
        
        $A.enqueueAction(action);
    },
    showNotification: function(component, header, title,
                               message, variant, closeCallback) {
        if (this.isLightningExperience()) {
            var compEvent =
                component.getEvent("onnotification");
            compEvent.setParams({
                type : 'notification',
                config: {
                    header: header,
                    title: title,
                    message: message,
                    variant: variant,
                    closeCallback: closeCallback
                }
            });
            compEvent.fire();
        }
    },
    showToast:
    function(component, title, message, messageData,
             variant, mode) {
        if (this.isLightningExperience()) {
            var compEvent =
                component.getEvent("onnotification");
            compEvent.setParams({
                type : 'toast',
                config: {
                    title: title,
                    message: message,
                    messageData: messageData,
                    variant: variant,
                    mode: mode
                }});
            compEvent.fire();
        }
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