module.exports = {

  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],

  "coverageReporters": [
    "text",
    "cobertura"
  ],
  "coveragePathIgnorePatterns": [
        "<rootDir>/src/mock/MockItems.js"
    ]
};