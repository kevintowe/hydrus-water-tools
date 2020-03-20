module.exports = {
  name: 'hydrus-user-portal-environment',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/hydrus-user-portal/environment',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
