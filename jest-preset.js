// jest-preset.js  

module.exports = {  
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],  
    transform: {  
      '^.+\\.jsx?$': 'babel-jest',  
      '^.+\\.tsx?$': 'ts-jest',  
    },  
    moduleNameMapper: {  
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',  
      '^@/(.*)$': '<rootDir>/src/$1', // Adjust according to your folder structure if needed  
    },  
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],  
    collectCoverage: true,  
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],  
    coverageReporters: ['json', 'lcov', 'text', 'clover'],  
  };