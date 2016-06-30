module.exports = {

    normalizeEntityName: function (entityName) {
        return entityName;
    },

    afterInstall: function () {
        return this.addBowerPackageToProject('url.js', 'jillix/url.js#^2.4.0');
    }

};
