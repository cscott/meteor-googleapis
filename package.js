Package.describe({
  name: 'cscottnet:googleapis',
  summary: 'Interface with Google APIs on Meteor server',
  version: '2.1.7_1',
  git: 'https://github.com/cscott/meteor-googleapis.git'
});

Npm.depends({"googleapis": "2.1.7"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use(['ejson'], 'server');
  api.addFiles([
    'googleapis.js'
  ], 'server');
  if (api.export) { api.export('Gapi', 'server'); }
});

Package.onTest(function(api) {
  /*
  api.use('tinytest');
  api.use('cscottnet:googleapis');
  api.addFiles('googleapis-tests.js');
  */
});
