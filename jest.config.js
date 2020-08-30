module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^mixins/(.*)$': '<rootDir>/src/mixins/$1',
    '^priv-data/(.*)$': '<rootDir>/src/priv-data/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',
  },
};
