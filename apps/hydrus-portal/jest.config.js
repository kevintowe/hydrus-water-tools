module.exports = {
  name: 'hydrus-portal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hydrus-portal',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
