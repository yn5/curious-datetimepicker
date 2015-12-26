Package.describe({
  name: 'yn5:curious-datetimepicker',
  version: '0.1.25',
  summary: 'Responsive flat design jQuery DateTime Picker plugin for Web & Mobile',
  git: 'https://github.com/yn5/curious-datetimepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.use('jquery');
  api.addFiles('DateTimePicker.min.css', 'client');
  api.addFiles('DateTimePicker.min.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('DateTimePicker.min.css');
  api.addFiles('DateTimePicker.min.js');
});
