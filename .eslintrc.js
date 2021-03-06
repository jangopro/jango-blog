module.exports = {
    env: {
        browser: true,
        es6: true,
        commonjs: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react: {
            version: '16.0', // React version, default to the latest React stable release
        },
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
    },
    globals: {
        graphql: false,
        __dirname: false,
    },
};
