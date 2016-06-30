/* jshint node: true */
'use strict';

module.exports = {

    name: 'ember-cli-mocha-reporter',

    included: function (app) {
        if (app.tests) {
            app.import('bower_components/url.js/src/url.min.js',                    {type: 'test'});
            app.import('vendor/ember-cli-mocha-reporter/test-container-styles.css', {type: 'test'});
        }
    }

};
