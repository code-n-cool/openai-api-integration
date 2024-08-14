module.exports = {
  // preset: 'next/babel', // Use Next.js preset  
  testEnvironment: 'jsdom', // Use jsdom for testing React components  
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files  
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Handle CSS imports  
  },
  preset: './jest-preset.js', // Use the preset you created  
  setupFilesAfterEnv: ['./jest.setup.js'], // Optional setup file  
  collectCoverage: true, // Optional: Collect coverage information  
};  