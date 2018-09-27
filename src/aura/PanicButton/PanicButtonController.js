({
    handleClick: function(component, event, helper) {
        helper.onStartPlaying(component, helper);
    },

    onPlaybackEnded: function(component, event, helper) {
        helper.onEndPlaying(component, helper);
    },

    doInit: function(component, event, helper) {
        var defaultSound = component.get('v.sound');
        var baseUrl = $A.get('$Resource.PanicButtonAssets');
        var opts = [{
            Name: 'Sad Trombone',
            fileUrl: baseUrl + '/PanicButton/SadTrombone.mp3'
        }, {
            Name: 'Explosion',
            fileUrl: baseUrl + '/PanicButton/Explosion.mp3'
        }];

        component.set('v.soundOptions', opts);

        for (var i = 0; i < opts.length; i++) {
            if (opts[i].Name == defaultSound) {
                component.set('v.soundUrl', opts[i].fileUrl);
                break;
            }
        }
    }
})