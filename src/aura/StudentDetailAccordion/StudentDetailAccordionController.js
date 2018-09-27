({
    onContactIdChange: function(component, event,
                                helper) {
        console.log('Contact ID Changed --- ');
        helper.callServer(
            component,
            "c.getCertificationsForStudent",
            function(response) {
                component.set('v.certs',response);
                console.log(response);
            },
            {
                contactId : component.get('v.contactId')
            }
        );
        console.log('Certs after calback - ' +component.get('v.certs')[0])
    },
})