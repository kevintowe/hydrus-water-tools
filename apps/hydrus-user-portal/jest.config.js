module.exports = {
  name: 'hydrus-user-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hydrus-user-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
