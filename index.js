/* jshint node: true */
'use strict';

module.exports = {

    name: 'ember-cli-mocha-reporter',

    included: function (app) {
        if (app.tests) {
            app.import('vendor/ember-cli-mocha-reporter/test-container-styles.css', {type: 'test'});
        }
    }

};
