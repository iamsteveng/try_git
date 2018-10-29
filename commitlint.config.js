module.exports = {
    // extends: ['@commitlint/config-conventional']
    parserPreset: {
        parserOpts: {
            issuePrefixes: ['AT-']
        }
    },
    rules: {
        'references-empty': [2, 'never']
    }
};
