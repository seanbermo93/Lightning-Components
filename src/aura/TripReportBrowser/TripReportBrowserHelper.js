({
    onInit: function(component) {
         this.callServer(
            component,
            "c.getAll",
            function(response) {
                for (var i=0; i<response.length; i++) {
                    if (response[i].Instructor__r){
                        response[i].InstructorName = response[i].Instructor__r.Name;
                    }
                }
              component.set('v.tripReports',response);
            }
        );
    }
})