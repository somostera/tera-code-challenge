module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    setupFiles: ['<rootDir>/tests/setup.js'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
}
