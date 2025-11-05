export default {
  testEnvironment: 'jsdom',
  transform: {},
  testMatch: ['**/*.test.js'],
  collectCoverageFrom: ['script.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/']
};
