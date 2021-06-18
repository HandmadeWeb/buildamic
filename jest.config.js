module.exports = {
    "testEnvironment": 'jsdom',
    "roots": [
        "<rootDir>/tests/unit"
    ],
    "transform": {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    "moduleNameMapper": {
        "^@/(.*)$": "<rootDir>/resources/js/components/$1"
    }
}
