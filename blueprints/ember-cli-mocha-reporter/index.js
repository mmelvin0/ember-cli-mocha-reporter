module.exports = {

    name: 'ember-cli-mocha-reporter',

    normalizeEntityName: function () {},

    afterInstall: function () {
        // even with ember-browserify installed in both this addon and its parent
        // it can't find the urljs library unless urljs is also installed in the parent
        // see https://github.com/ef4/ember-browserify/issues/38
        return this.addPackageToProject('urljs', '^2.3.1');
    }

};
