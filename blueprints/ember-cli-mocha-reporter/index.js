module.exports = {

    normalizeEntityName: function (entityName) {
        return entityName;
    },

    afterInstall: function () {
        // even with ember-browserify installed in both this addon and its parent
        // it can't find the urljs library unless urljs is also installed in the parent
        // see https://github.com/ef4/ember-browserify/issues/38
        return this.addPackagesToProject([
            {name: 'ember-browserify', target: '^1.1.9'},
            {name: 'urljs', target: '^2.3.1'}
        ]);
    }

};
