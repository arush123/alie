(function (window) {
    // You can enable the strict mode uncommenting the following line  
    'use strict';

    // This function will contain all our code
    function alieLibrary() {
        var _alieLibraryObject = {};

        // This variable will be inaccessible to the user, only can be visible in the scope of your library.
        var settings = {
            volume: 100,
            mute: false
        };


        // Change a private property
        _alieLibraryObject.setVolume = function (volume) {
            settings.volume = volume;
            return volume;
        };

        // Change a private property
        _alieLibraryObject.setMute = function (muteStatus) {
            if (typeof (muteStatus) === 'boolean') {
                settings.mute = muteStatus;
            } else {
                console.error("You need to disable or enable the sound !");
            }

            return settings.mute;
        };

        // Change a private property
        _alieLibraryObject.haveSound = function () {
            return settings.mute;
        };

        return _alieLibraryObject;
    }

    // We need that our library is globally accesible, then we save in the window
    if (typeof (window.alie) === 'undefined') {
        window.alie = alieLibrary();
    }
})(window); // We send the window variable withing our function
