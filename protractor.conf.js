exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['app/spec/e2e/dialog-a.e2e.js','app/spec/e2e/dialog-b.e2e.js'],
    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    }
};
